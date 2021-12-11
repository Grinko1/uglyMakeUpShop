import React from 'react';
import { data } from '../../db.js';
import Products from '../../componets/Products/Products.jsx';
import Slider from '../../componets/Slider/Slider.jsx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action.js';

const Main = () => {
  const { make } = data;
  console.log(make);
  const dispatch = useDispatch();
  
  const handleAddToCart = (obj) => {
    dispatch(addToCart(obj));
    console.log(obj);
  };
  const handlerInfo = (obj) => {
      dispatch(addToCart(obj))
  }
  return (
    <div>
      <Slider />
      {make.map((item) => (
        <Products
          handleAddToCart={handleAddToCart}
          handlerInfo={handlerInfo}
          key={item.id}
          id={item.id}
          image={item.image}
          desc={item.desc}
          price={item.price}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Main;
