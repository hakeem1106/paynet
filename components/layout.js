import React from 'react';
import css from '../styles.scss';


const Layout =(props)=>{
    return(
        <div className={css.wrapper}>
            {props.children}
        </div>
    )
}
export default Layout;