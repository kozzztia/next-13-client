'use client'
import React, {ChangeEvent, FormEvent, useState} from 'react';
import style from "./style.module.css";
import useSWR from "swr";
import {text} from "@/public/dictionary/text";
import {getSearchedProducts} from "@/services/getSearchedProducts";



const ProductSearch = () => {
    const {inputPlaceholder} = text;
    const [searchValue , setSearchValueValue] = useState<string>("");
    const {mutate } = useSWR("products")

    const handleSubmit = async (e  : FormEvent<HTMLFormElement>, )=>{
        await e.preventDefault();
        const product = await getSearchedProducts(searchValue);
        await mutate(product)
        await setSearchValueValue("");
    }
    return (
        <form  className={style.search} onSubmit={(e)=> handleSubmit(e)}>
            <input type={"search"} className={style.input}
                value={searchValue}
                onChange={(e: ChangeEvent<HTMLInputElement>)=>setSearchValueValue(e.target.value)}
                placeholder={inputPlaceholder}
            />
            <button type={'submit'} className={style.button}>
                <svg width="17" height="19" viewBox="0 0 17 19" xmlns="http://www.w3.org/2000/svg" className={style.svg}>
                    <path d="M16.362 17.5332L11.531 12.0312C12.4941 10.7305 12.9757 9.23047 12.9757 7.53125C12.9757 6.25391 12.6986 5.07617 12.1446 3.99805C11.5906 2.91992 10.8346 2.06738 9.87672 1.44043C8.91882 0.813477 7.87807 0.5 6.75448 0.5C5.63088 0.5 4.59273 0.813477 3.64 1.44043C2.68728 2.06738 1.9339 2.91992 1.37987 3.99805C0.825843 5.07617 0.548828 6.25391 0.548828 7.53125C0.548828 8.80859 0.825843 9.98633 1.37987 11.0645C1.9339 12.1426 2.68728 12.9951 3.64 13.6221C4.59273 14.249 5.63347 14.5625 6.76224 14.5625C8.30524 14.5625 9.66184 13.9883 10.832 12.8398L15.6474 18.3242C15.751 18.4414 15.8701 18.5 16.0047 18.5C16.1393 18.5 16.2558 18.4443 16.3542 18.333C16.4526 18.2217 16.5018 18.0869 16.5018 17.9287C16.5018 17.7705 16.4552 17.6387 16.362 17.5332ZM6.76224 13.4551C5.80952 13.4551 4.93187 13.1885 4.12931 12.6553C3.32674 12.1221 2.69246 11.4014 2.22645 10.4932C1.76044 9.58496 1.52744 8.59766 1.52744 7.53125C1.52744 6.46484 1.76044 5.47754 2.22645 4.56934C2.69246 3.66113 3.32674 2.94043 4.12931 2.40723C4.93187 1.87402 5.80693 1.60742 6.75448 1.60742C7.70202 1.60742 8.57708 1.87402 9.37964 2.40723C10.1822 2.94043 10.8165 3.66113 11.2825 4.56934C11.7485 5.47754 11.9815 6.46484 11.9815 7.53125C11.9815 7.98828 11.9349 8.43945 11.8417 8.88477C11.7485 9.33008 11.6165 9.74609 11.4456 10.1328C11.2747 10.5195 11.0702 10.8857 10.832 11.2314C10.5938 11.5771 10.3246 11.8848 10.0243 12.1543C9.72397 12.4238 9.40294 12.6553 9.06121 12.8486C8.71947 13.042 8.35184 13.1914 7.95832 13.2969C7.56481 13.4023 7.16611 13.4551 6.76224 13.4551Z" fill="white"/>
                </svg>
            </button>
        </form>
    );
};

export default ProductSearch;