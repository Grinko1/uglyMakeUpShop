import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Info from './Info';

const Details = () => {
    const dispatch = useDispatch()
  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const addedProducts = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

    return (
        <div>
                {addedProducts.map((obj) => (
        <Info
          id={obj.id}
          image={obj.image}
          name={obj.name}
          price={obj.price}
          desc={obj.desc}
          
         
        />
      ))}
            
        </div>
    );
};

export default Details;