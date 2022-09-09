import React from 'react'
import { DrinkById } from '../interface';
import styles from './box.module.css'

interface Drink {
  drink: DrinkById
}

const Box:React.FC<Drink> = ({drink}) => {
  return (

      <section className={styles.box}>
        <div>{drink.strDrink}</div>
        <div className={styles.imgContainer}>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>
      </section>
  )
}

export default Box