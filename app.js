import React from 'react';
import ReactDOM from 'react-dom/client';

const Restaurants = ['Good', 'Mornings','Kahvalti','Good', 'Mornings','Kahvalti']
const RestaurantCard = () => <div className='restaurant-card'>
  <img className='restaurant-logo' src="https://cdn2.vectorstock.com/i/1000x1000/73/31/food-app-logo-vector-34017331.jpg" alt="restaurant"/>
  name
  rating
  time
  menu
  price
</div>

const Body = () => <div className='body'>
  <div className='search'>
    Search
  </div>
  <div className='restaurant-container'>
    {Restaurants.map(item => <RestaurantCard />)}
  </div>
</div>
const Header = () => <div className='header'>
  <div className='logo-container'>
    <img
      className='logo'
      src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/media/f1dc908d5e3aa58ae7beed58c623acb6.png?resize=400x300&vertical=center" alt=""/>
  </div>
  <div className='nav-items'>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact us</li>
      <li>Cart</li>
    </ul>
  </div>
</div>

const App = () => <div className='app'>
  <Header />
  <Body />
</div>

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
