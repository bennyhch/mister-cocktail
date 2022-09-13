import React from 'react'
import { DrinkById } from '../interface';
import styles from './box.module.css';
import { useNavigate } from "react-router-dom";

interface Drink {
  drink: DrinkById
}

const Box:React.FC<Drink> = ({drink}) => {
  console.log(drink);
  let navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/${drink.idDrink}`)
  }

  return (
      <section className={styles.drink} onClick={clickHandler}>
        <div className={styles.drinkImgContainer}>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} className={styles.drinkImg}/>
        </div>
        <h5>{drink.strDrink}</h5>
      </section>
  )
}

export default Box