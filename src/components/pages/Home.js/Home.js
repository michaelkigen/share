import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Food from "./food"

const Home = () => {
  const [food,setFood] = useState([])
  useEffect(()=>{
    fetch("http://127.0.0.1:8000/food/").then((resp)=>{
      return resp.json()
    }).then((data)=>{
      console.log(data)
      setFood(data)
    })
  },[])
  return (
    <section className="home__container">
      <div className="home__left">
        <div className="home__header">
          <div className="home__headerDesc">
            <h4>Welcome Elon</h4>
            <p>
              struggling with long ques,don't struggle no more qmelter got you
            </p>
          </div>
          <div className="search__foodContainer">
            <input type="text" placeholder="search food" />
            <button>
              <BiSearch />
            </button>
          </div>
        </div>
        <div className="food__categoriesContainer">
          <h4>Find the Menu you want</h4>
          <div className="food__categories">
            <button>All</button>
            <button>Breakfast</button>
            <button>Lunch</button>
            <button>Supper</button>
          </div>
        </div>
        <div className="food__container">
        {food.map((food)=>{
          return <Food      key={food.food_id}
        {...food}/>
        })}
         
        </div>
      </div>
      <div className="home__right">
        <h4>Your food basket</h4>
        <div className="cart__container">
          <div className="cart__header">
            <h4>4</h4>
            <button>Remove all</button>
          </div>
          <div className="cart">
            <div className="cart__item">
              <div className="cartItem__imageContainer">
                <img src="food.jpg" alt="" />
              </div>
              <div className="item__details">
                <div className="item__detailsUpper">
                  <h4>ugali/rice</h4>
                  <div className="adjustItem__buttons">
                    <button>-</button>
                    <p>4</p>
                    <button>+</button>
                  </div>
                </div>
                <div className="item__detailsLower">
                  <h4>sh 100</h4>
                  <div className="remove btn">
                    <button>x</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__item">
              <div className="cartItem__imageContainer">
                <img src="food.jpg" alt="" />
              </div>
              <div className="item__details">
                <div className="item__detailsUpper">
                  <h4>ugali/rice</h4>
                  <div className="adjustItem__buttons">
                    <button>-</button>
                    <p>4</p>
                    <button>+</button>
                  </div>
                </div>
                <div className="item__detailsLower">
                  <h4>sh 100</h4>
                  <div className="remove btn">
                    <button>x</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
