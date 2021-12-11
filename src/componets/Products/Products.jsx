import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Product.module.css';

const Products = ({ id, image, name, price, desc, handleAddToCart,handlerInfo }) => {
  


  const addProductToCart = () => {
    const obj = {
      id,
      image,
      name,
      price,
      desc,
    };
    handleAddToCart(obj);
  };

  const getInfo = () => {
    const obj = {
      id,
      image,
      name,
      price,
      desc,
    };
    handlerInfo(obj);
  };
 
  return (
    <>
        <div className={style.wrapper}>
          <div className={style.product}>
            <Link  to='/info'>
            <img  onClick={getInfo} className={style.img} src={image} alt={name} />
            </Link>
            <p className={style.name}>{name}</p>
            
            <p className={style.desc}>{desc}</p>
            <h2>{price}p</h2>
            <button onClick={addProductToCart} onAut className={style.button}>
              в корзину
            </button>
          </div>
        </div>
     
    </>
  );
};

export default Products;
