import React from 'react';
import style from "./style.module.css"
const Main = ({children} : {children : React.ReactNode}) => {
    return (
        <main className={style.main}>
            {children}
        </main>
    );
};

export default Main;