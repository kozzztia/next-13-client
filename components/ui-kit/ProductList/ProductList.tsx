'use client'

import React from 'react';
import style from "./style.module.css"
import useSWR from "swr";
import {getAllProducts} from "@/services/getAllProducts";
import LoadingComponent from "@/components/ui-kit/Loading/LoadingComponent";
import {deleteProduct} from "@/services/daleteProduct";

type productType = {
    id :number,
    name  :string,
}



const ProductList = () => {
    const {data: products, isLoading, mutate} = useSWR("products", getAllProducts);
    const deleteItem = async (id: number, item: productType[] | undefined)=>{
        await deleteProduct(`${id}`)
        let newProducts: productType[] | undefined = []
        if (item) {
            newProducts = item?.filter(item => item.id !== id)
        }
        return newProducts
    }
    return (
        <div className={style.list}>
            {
                isLoading ?
                    <LoadingComponent/>
                    :
                    products?.map(product =>
                        <p
                            key={product.id}
                            onClick={()=>
                                 deleteItem(product.id , products).then(items => mutate(items))
                        }
                        >{product.id} : {product.name}</p>
                    )
            }
        </div>
    );
};

export default ProductList;