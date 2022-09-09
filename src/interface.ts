export interface DrinkCategory {
  strCategory: string
}

export interface Categories {
  categories: DrinkCategory[];
}

export interface DrinksByCategory {
  strDrink: string,
  strDrinkThumb: string,
  idDrink: string
}