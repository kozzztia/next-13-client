import React from 'react';
import style from "./style.module.css"
import HeaderTitle from "@/components/ui-kit/Titles/HeaderTitle";
import {text} from "@/public/dictionary/text"
import CustomLink from "@/components/ui-kit/Link/CustomLink";
const Header = () => {
    const {headerTitle,headerNavigation} = text
    return (
        <header className={style.header}>
            <HeaderTitle title={headerTitle}/>
            <ul className={style.nav}>
                {
                    headerNavigation.map(item =>
                        <CustomLink key={item.id} title={item.linkTitle} link={item.link}/>
                    )
                }
            </ul>
        </header>
    );
};

export default Header;