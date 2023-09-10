import React from "react";

export const RestaurantCard = ({restaurant:{title, rating, images}}) => <div className='restaurant-card'>
  {images?.length ? <img className='restaurant-logo' src={`${images[0]}`} alt="restaurant"/> : <img className='restaurant-logo' src="https://cdn2.vectorstock.com/i/1000x1000/73/31/food-app-logo-vector-34017331.jpg" alt="restaurant"/>}
  <div style={{fontWeight: 'bold'}}>{title}</div>
  <div>rating: {rating}</div>
  <div>time</div>
  <div>menu</div>
  <div>price</div>
</div>
