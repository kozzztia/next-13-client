import React from 'react';
import style from "./style.module.css";
import {Metadata} from "next";



export const metadata: Metadata = {
    title: 'contacts',
    description: 'Generated by create next app',
}
const Page = () => {
    return (
        <div className={style.contacts}>
            contacts
        </div>
    );
};

export default Page;