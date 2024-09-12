import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'data/recipes.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const recipes = JSON.parse(jsonData);

    res.status(200).json(recipes);

  } catch (error) {
    console.error('Error in /api/recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes', details: error.message });
  }
}