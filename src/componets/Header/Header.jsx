import React from 'react';
import style from  './Header.module.css';
import { ShoppingCartOutlined , UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className={style.container}>
        <Link to='/' exact>
      <div className={style.logo}>MakeUpStore</div>
      </Link>
      <div className={style.category}>
          <Link to='/makeup'>
          <p className={style.p}>МейкАп</p>
          </Link>
          <Link to='/care'>
              <p className={style.p}>Уход</p>
          </Link>
          <Link to='/hair'>
          <p className={style.p}>Волосы</p>
          </Link>
          <Link to='/new'>
          <p className={style.p}>Новинки</p>
          </Link>
          <Link to='/try'>
            try
          </Link>
          
          
          
      </div>
      <Link to='/cart' >
      <div className={style.cart}>
        <ShoppingCartOutlined style={{ fontSize: '32px',color: 'white' }} />
        <Link to='/profile'>
      
      <UserOutlined style={{ fontSize: '32px',color: 'white' }}/>
      
      </Link>
      </div>
      </Link>
    
    </div>
  );
};

export default Header;
