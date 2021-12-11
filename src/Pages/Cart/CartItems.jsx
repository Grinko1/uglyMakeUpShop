import React from 'react';
import style from './Cart.module.css'

const CartItems = ({id, image,  name, price, desc, onRemoveItem}) => {
    const handleRemoveClick = () => {
        onRemoveItem(id)
    }
    return (
        <div>
                    <div className={style.container}>
        <div>
            <img className={style.img} src={image} alt='goods'/>
        </div>
        <div className={style.info}>
            
                <h1>{name}</h1>
                <p  className={style.desc}>{desc}</p>
                <h3>{price}p</h3>
                <button  onClick={handleRemoveClick}  className={style.delete}>Удалить из корзины</button>

            </div>
           
         </div>
                {/* <div className={style.container}>
        <div>
            <img className={style.img} src='https://static.iledebeaute.ru/files/images/tag/part_12/252791/pre/500_500sb.jpg' />
        </div>
        <div className={style.info}>
            
                <h1>тушь</h1>
                <p  className={style.desc}>Чёрная тушь бла бла бла</p>
                <h3>3223 p</h3>
                <button   className={style.delete}>Удалить из корзины</button>

            </div>
           
         </div> */}
            
        </div>
    );
};

export default CartItems;