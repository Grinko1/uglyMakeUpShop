import React, { useEffect, useState } from 'react';
import style from './Try.module.css'

const Try = () => {
    let[click , setClick] = useState(0)

    console.log(click)

    const handleClick = () => {
        for( click === 0 ; click < 50 ;click ++ )
        console.log(click)
        // setTimeout(
             setClick(click )
            // ,500)
       
        
    }

    useEffect(() => {

    }, [])
    return (
        <div className={style.container}>
            <div>
                <b style={{marginRight:"10px"}}>{click}</b>
                <button onClick={handleClick}>Click</button>
            </div>
            
        </div>
    );
};

export default Try;