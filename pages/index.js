import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from './components/navbar';
import { useRouter } from 'next/router';

// API call to get recipes
export default function Home() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch('/api/recipes');
      const data = await res.json();
      setRecipes(data);
    }

    fetchRecipes();
  }, []);

  return (
    <>
    <Navbar />
    <div className="flex flex-col w-full items-center">
      <div className="bg-recipe-background bg-cover bg-no-repeat bg-[position:25%_75%] h-[300px] w-full sm:h-[350px] md:h-[350px] lg:h-[350px] xl:h-[400px] relative">
        <div className="w-full mx-auto py-10 px-10 my-10">  
          <h1 className="text-white font-extrabold text-center text-6xl mx-auto
            sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 
            ">
            Olivia's
          </h1>
          <h2 className="text-white font-extrabold text-center text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl mx-auto">
            KITCHEN
          </h2>
          </div>
        </div>
        <div className="w-full max-w-7xl p-5"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 p-10">
            {recipes.map((recipe) => (
              recipe && recipe.id ? (
                <Link key={recipe.id} href={`/recipes/${recipe.id}`} passHref>
                  <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                      <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover object-center " />
                    </div>
                    <div className="p-4 flex-grow">
                      <h2 className="text-lg sm:text-xl font-semibold text-darkGrayishBlue hover:text-mustard transition-colors duration-200">
                        {recipe.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
