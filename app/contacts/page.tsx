
import React from 'react';
import style from "./style.module.css";

import {text} from "@/public/dictionary/text";
import HeaderTitle from "@/components/ui-kit/Titles/HeaderTitle";
import {getAllProducts} from "@/services/getAllProducts";
import {Metadata} from "next";
import ProductList from "@/components/ui-kit/ProductList/ProductList";
import ProductSearch from "@/components/ui-kit/ProductSearch/ProductSearch";



export const metadata: Metadata = {
    title: 'products',
    description: '...',
}


const Page =  () => {
    const {contactsTitle} = text;
    return (
        <div className={style.contacts}>

            <ProductSearch/>
            <HeaderTitle title={contactsTitle} />
            <ProductList/>
        </div>
    );
};

export default Page;