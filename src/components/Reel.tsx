import React, { useEffect, useState } from 'react'
import { DrinksByCategory } from '../interface';
import styles from './reel.module.css'
import {useNavigate} from 'react-router-dom';
const baseReelUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

interface Category {
  reelName: string
}

const Reel: React.FC<Category> = ({reelName}) => {
  let newReelName = reelName.replace(' ', '_'); 
  let navigate = useNavigate();
  const [reelDrinks, setReelDrinks] = useState<DrinksByCategory[]>([]);
  
  const drinkHandler = (id: string) => {
    navigate(`/${id}`)
  }


  useEffect(() => {
    fetch(`${baseReelUrl}${newReelName}`)
      .then(resp => resp.json())
      .then(data => setReelDrinks(data.drinks))
  }, [])

  return (
    <div className={styles.reel}>
      <h1>{reelName}</h1>
        <section className={styles.reelContainer}>
          {reelDrinks.map(reelDrink => {
            const {idDrink, strDrink, strDrinkThumb} = reelDrink;
            return (
              <div key={idDrink} className={styles.drink} onClick={drinkHandler.bind(null, idDrink)}>
                <div className={styles.drinkImgContainer}>
                  <img src={strDrinkThumb} alt={strDrink} className={styles.drinkImg}/>
                </div>
                  <h5>{strDrink}</h5>
              </div>
            )
          })}
        </section>

    </div>
  )
}

export default Reel