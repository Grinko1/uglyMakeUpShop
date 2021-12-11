import { FacebookOutlined, InstagramOutlined, TaobaoCircleOutlined, TwitterOutlined, WechatOutlined } from '@ant-design/icons';
import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.info}>
                <ul>
                    <li>О нас</li>
                    <li> Доставка</li>
                    <li>Отмена и возврат </li>
                    <li>Адрес</li>
                    <li> Юридический дрес</li>
                </ul>
            <p>        </p>
            </div>
          
        <div >
                <ul  className={style.icons}>
                    <li><TaobaoCircleOutlined /></li>
                    <li><WechatOutlined /></li>
                    <li>   <FacebookOutlined/></li>
                    <li><TwitterOutlined /></li>
                    <li> <InstagramOutlined /></li>
             </ul>
             </div>

             <div className={style.tel}>
            <p >88001234567</p>
            <p>makeupstore@mail.com</p>
        </div>
        </div>
    );
};

export default Footer;