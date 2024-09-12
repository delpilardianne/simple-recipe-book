import fs from 'fs';
import path from 'path';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';

const recipesPath = path.join(process.cwd(), 'data/recipes.json');

export async function getServerSideProps(context) {
  const { id } = context.params;
  
  try {
    const rawData = await fs.promises.readFile(recipesPath, 'utf8');
    const recipes = JSON.parse(rawData);
    const recipe = recipes.find((r) => r.id === parseInt(id, 10));

    if (!recipe) {
      return { notFound: true };
    }

    return { props: { recipe } };
    
  } catch (error) {
    console.error('Error reading or parsing recipe data:', error);
    return { notFound: true };
  }
}

export default function RecipeDetails({ recipe }) {
  const router = useRouter();
  return (
    <>
    <Navbar />
    <div className="w-full mx-auto px-5">
    <div className=" max-w-7xl mx-auto  py-8">
        <button 
          onClick={() => router.back()} 
          className="text-black hover:text-mustard transition-colors duration-200 pd-10 "
        >
          ← Back
        </button>
      </div>
      {recipe.image && (
        <div className="flex justify-center">
          <img 
            src={`/${recipe.image}`} 
            alt={`${recipe.name} image`} 
            className="w-full max-w-2xl h-90 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
      <h1 className="text-5xl text-center my-8 font-bold">{recipe.name}</h1>
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <div className="w-full">
          <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
          <ul className="list-disc pl-5">
            {recipe.recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="w-full my-8">
          <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
          <ol className="list-decimal pl-5">
            {recipe.recipe.instructions.map((instruction, index) => (
              <li key={index} className="mb-2">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    </>
  );
}