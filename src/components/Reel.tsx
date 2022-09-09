import React, { useEffect, useState } from 'react'
import { DrinksByCategory } from '../interface';
import styles from './reel.module.css'
const baseReelUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

interface Category {
  reelName: string
}

const Reel: React.FC<Category> = ({reelName}) => {
  let newReelName = reelName.replace(' ', '_'); 
  const [reelDrinks, setReelDrinks] = useState<DrinksByCategory[]>([])


  useEffect(() => {
    fetch(`${baseReelUrl}${newReelName}`)
      .then(resp => resp.json())
      .then(data => setReelDrinks(data.drinks))
  }, [])

  return (
    <div>
      <h1>{reelName}</h1>
        <section className={styles.reelContainer}>
          {reelDrinks.map(reelDrink => {
            const {idDrink, strDrink, strDrinkThumb} = reelDrink;
            return (
              <div key={idDrink}>
                <div className={styles.drinkImgContainer}>
                  <img src={strDrinkThumb} alt={strDrink} className={styles.drinkImg}/>
                </div>
                <h5>
                {strDrink}
                </h5>
              </div>
            )
          })}
        </section>

    </div>
  )
}

export default Reel