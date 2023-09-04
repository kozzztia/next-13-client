'use client'

import React from 'react';
import style from "./style.module.css"
import useSWR from "swr";
import {getAllProducts} from "@/services/getAllProducts";
import LoadingComponent from "@/components/ui-kit/Loading/LoadingComponent";
import {postProduct} from "@/services/postProduct";

const ProductList = () => {
    const {data: products, isLoading, mutate} = useSWR("products", getAllProducts)
    // const body = {id :10 , name : "name"}
    return (
        <div className={style.list}>
            {
                isLoading ?
                    <LoadingComponent/>
                    :
                    products?.map(product => <p key={product.id}>{product.id} : {product.name}</p>)
            }
        </div>
    );
};

export default ProductList;