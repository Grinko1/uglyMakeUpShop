import React, { useEffect } from 'react';
import style from './Profile.module.css';
import { CheckOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';

const Loggined = () => {
    const history = useHistory()
  
    useEffect(() => {
        const timer = setTimeout(() => {
            history.push('/')
          console.log('This will run after 1 second!')
        }, 1000);
        return () => clearTimeout(timer);
      }, []);
    return (
        <div className={style.form}>
         <div className={style.done}>
         {/* <img src="https://img.icons8.com/ios-filled/50/000000/checkmark--v2.png"/> */}
        <CheckOutlined style={{ fontSize: '50px' , marginTop:'150px', color:'white', fontWeight:'800'}}/>
        </div>
        </div>
    );
};

export default Loggined;