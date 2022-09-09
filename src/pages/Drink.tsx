import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { DrinkById } from '../interface';

const Drink: React.FC = () => {
  let params = useParams();

  const [drink, setDrink] = useState<DrinkById[]>([])

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      .then(resp => resp.json())
      // .then(data => console.log('data', data.drinks));
      .then(data => setDrink(data.drinks));
  }, [])

  if (drink.length === 0) {
    return <h1>Loading...</h1>
  }
  const {strDrink, strDrinkThumb} = drink[0]
  return (
    
    <>
      <h2>{drink[0].strDrink}</h2>
      <div>
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
    </>
  )
}

export default Drink