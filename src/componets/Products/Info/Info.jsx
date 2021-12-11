import React from 'react';
import style from './Info.module.css'

const Info = ({id, image,  name, price, desc,}) => {
    return (
        <div className={style.wrapper}>
        <div >
        <div>
            <img src={image}  alt='goods'/>
        </div>
        <div >
            
                <h1>{name}</h1>
                <p >{desc}</p>
                <h3>{price} p</h3>
                <button >в корзину</button>

            </div>
           
         </div>
        </div>
    );
};

export default Info;