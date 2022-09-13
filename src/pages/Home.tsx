import React, { useEffect, useState } from 'react'
import Reels from '../components/Reels';
import { DrinkCategory } from '../interface';
import styles from './home.module.css';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<DrinkCategory[]>([]);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(resp => resp.json())
      .then(data => setCategories(data.drinks));
  }, []) 

  return (
    <div className={styles.homeContainer}>
      <div>slider</div>
      <Reels categories={categories}/>
    </div>
  )
}

export default Home