import React, {useEffect, useState} from "react";
import {RestaurantCard} from "./RestaurantCard";
import {Shimmer} from "./Shimmer";

export const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);



  const getMenu = async () => {
    const data = await fetch('https://dummyjson.com/products')

    const json = await data.json();

    setRestaurantsList(json.products)

  }

  useEffect(() => {
    getMenu()
  },[])

  if (!restaurantsList.length) return <Shimmer />

  return <div className='body'>
    <div className='filter'>
      <button className='filter-btn' onClick={() => {
        setRestaurantsList((list) => list.filter(item => item.rating > 4))
      }}>Top rated Restaurants
      </button>
    </div>
    <div className='restaurant-container'>
      {restaurantsList.map(item => <RestaurantCard key={item.id} restaurant={item}/>)}
    </div>
  </div>
}
