import React, { useEffect, useState } from 'react'
import Reels from '../components/Reels';
import { DrinkCategory } from '../interface';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<DrinkCategory[]>([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(resp => resp.json())
      .then(data => setCategories(data.drinks));
  }, []) 

  return (
    <>
      <div>slider</div>
      <Reels categories={categories}/>
    </>
  )
}

export default Home