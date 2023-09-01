'use client'
import React from 'react';
import Link from "next/link";
import style from "./style.module.css";
import {usePathname} from "next/navigation";

const CustomLink = ({title , link} : {title :string , link  :string}) => {
    const path = usePathname()
    const iaActive = path === link;
    return (
        <Link href={link} className={`${style.link} ${iaActive?style.active:""}`}>
            {title}
        </Link>
    );
};

export default CustomLink;