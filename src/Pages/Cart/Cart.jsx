import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/action';
import style from './Cart.module.css';
import CartItems from './CartItems';

const Cart = () => {
  const dispatch = useDispatch()
  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);
  const addedProducts = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  const onRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <div>
        <h1>Корзина</h1>
      </div>

      {addedProducts.map((obj) => (
        <CartItems
          id={obj.id}
          image={obj.image}
          name={obj.name}
          price={obj.price}
          desc={obj.desc}
          totalPrice={items[obj.id].totalPrice}
          totalCount={items[obj.id].items.length}
          onRemoveItem={onRemoveItem}
        />
      ))}

      <div className={style.total}>
        <div className={style.subtotal}>
            
          <h2>Итого:{totalPrice}</h2>

          <h2>Доставка: 500</h2>
          <h2>Общая сумма :{totalPrice >0 ? `${totalPrice+500}` : 0 }
           </h2>
        </div>
        <button className={style.button}>Купить</button>
      </div>
    </div>
  );
};

export default Cart;
