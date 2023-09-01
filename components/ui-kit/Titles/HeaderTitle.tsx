import React from 'react';
import style from "./style.module.css"
const HeaderTitle = ({title} : {title : string}) => {
    return (
        <h2 className={style.headerTitle}>{title}</h2>
    );
};

export default HeaderTitle;