import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import Box from '../components/Box';
import { DrinkById } from '../interface';
import styles from './searchPage.module.css'

const SearchPage: React.FC = () => {
  let {wrd} = useParams();
  const [drinks, setDrinks] = useState<DrinkById[]>([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${wrd}`)
      .then(resp => resp.json())
      // .then(data => console.log(data.drinks))
      .then(data => setDrinks(data.drinks))
  }, [])

  if (drinks.length === 0) {
    return <h1>Loading ...</h1>
  }

  return (
    <>
      <h1>Search Result: {wrd}</h1>
      <main className={styles.drinkContainer}>
        {drinks.map(drink => {
          return <Box key={drink.idDrink} drink={drink}/>
        })}
      </main>

    </>
  )
}

export default SearchPage