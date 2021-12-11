import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import { data } from '../../db';
import { addToCart } from '../../redux/action';
import Care from './Care';
import Hair from './Hair';
import MakeUp from './MakeUp';
import New from './New';

const Category = () => {
  const dispatch = useDispatch();
  const { hair } = data;
  const { make } = data;
  const { care } = data;
  const handleAddToCart = (obj) => {
    dispatch(addToCart(obj));
    console.log(obj);
  };
  return (
    <div>
      <Route path="/makeup">
        {make.map((item) => (
          <MakeUp
            key={item.id}
            handleAddToCart={handleAddToCart}
            name={item.name}
            image={item.image}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </Route>
      <Route path="/care">
        {care.map((item) => (
          <Care
            key={item.id}
            handleAddToCart={handleAddToCart}
            name={item.name}
            image={item.image}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </Route>
      <Route path="/hair">
        {hair.map((item) => (
          <Hair
            key={item.id}
            handleAddToCart={handleAddToCart}
            name={item.name}
            image={item.image}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </Route>
      <Route path="/new">
        {make.map((item) => (
          <New
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </Route>
    </div>
  );
};

export default Category;
