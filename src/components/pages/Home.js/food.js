import React from 'react'

const food = ({description
    ,food_name,price}) => {
  return (
    <div className="food">
    <div className="food__image">
      <img src="food.jpg" alt="" />
    </div>
    <p className="food__name">{food_name}</p>
    <div className="food__footer">
      <p>sh{price}</p>
      <button>add to cart</button>
    </div>
  </div>
  )
}

export default food