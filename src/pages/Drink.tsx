import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { DrinkById } from '../interface';
import styles from './drink.module.css'

const Drink: React.FC = () => {
  let params = useParams();

  const [drink, setDrink] = useState<DrinkById[]>([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then(resp => resp.json())
      .then(data => setDrink(data.drinks));
      // .then(data => console.log('data', data.drinks))
  }, [])

  if (drink.length === 0) {
    return <h1>Loading...</h1>
  }
  const {strDrink, strDrinkThumb, strInstructions, strAlcoholic, strGlass, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14, strIngredient15} = drink[0]
  return (
    <main className={styles.drinkContainer}>
      <section className={styles.imgContainer}>
        <img src={strDrinkThumb} alt={strDrink} className={styles.drinkImg} />
      </section>
      <section className={styles.description}>
        <header>{strDrink}</header>
        <article>
          <p>
            <span>Category</span>: {strCategory}
          </p>
          <p>
            <span>Alcoholic</span>: {strAlcoholic}
          </p>
          <p>
            <span>Glass</span>: {strGlass}
          </p>
          <p>
            <span>Instruction</span>: {strInstructions}
          </p>
          <p>
            <span>Ingredients</span>: {strIngredient1}{strIngredient2 ? ',' : ''} {strIngredient2}{strIngredient3 ? ',' : ''} {strIngredient3}{strIngredient4 ? ',' : ''} {strIngredient4}{strIngredient5 ? ',' : ''} {strIngredient5}{strIngredient6 ? ',' : ''} {strIngredient6}{strIngredient7 ? ',' : ''} {strIngredient7}{strIngredient8 ? ',' : ''} {strIngredient8}{strIngredient9 ? ',' : ''} {strIngredient9}{strIngredient10 ? ',' : ''} {strIngredient10}{strIngredient11 ? ',' : ''} {strIngredient11}{strIngredient12 ? ',' : ''} {strIngredient12}{strIngredient13 ? ',' : ''} {strIngredient13}{strIngredient14 ? ',' : ''} {strIngredient14}{strIngredient15 ? ',' : ''} {strIngredient15 }
          </p>
        </article>

      </section>
    </main>
  )
}

export default Drink