import React from 'react'
import { Categories } from '../interface';
import Reel from './Reel';



const Reels:React.FC<Categories> = ({categories}) => {
  return (
    <>
    {categories.map((category, index) => {
      return <Reel key={index} reelName={category.strCategory}/>
    })}
    </>
  )
}

export default Reels