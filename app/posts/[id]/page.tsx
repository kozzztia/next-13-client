import React from 'react';
import {Metadata} from "next";
import style from "./style.module.css"
import Link from "next/link";


type idParamsType = {
    params : {
        id : string;
    }
}

type postType = {
    id : string;
    title : string;
}

const api = "https://jsonplaceholder.typicode.com/todos/"
const getPost = async (id: string): Promise<postType>=>{
    const data = await fetch(`${api}${id}`)
    return data.json()
}

export  const generateMetadata = async ({params: {id}} : idParamsType) : Promise<Metadata>  => {
    const {title} :postType  = await getPost(id);
    return {title : title}
}

const Page = async ({params : {id}} : idParamsType) => {
    const {title} :postType = await getPost(id)
    return (
        <div className={style.post}>
            <h2>{id}: {title}</h2>
            <Link href={"/products/"} className={style.link}>
                back
            </Link>
        </div>
    );
};

export default Page;