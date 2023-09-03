import React from 'react';
import style from "./style.module.css";
import Link from "next/link";
import {Metadata} from "next";
import {text} from "@/public/dictionary/text"

type todosType = {
    id: string;
    title: string;
    body : string;
}

const getPosts = async () : Promise<todosType[]>=>{
    const data : Response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return data.json()
}



export const metadata: Metadata = {
    title: 'products',
    description: 'Generated by create next app',
}

const Page = async () => {
    const posts = await getPosts()
    const {postsTitle} = text
    return (
        <div className={style.posts}>
            <h2>{postsTitle}</h2>
                {
                    posts.map(item =>
                        <Link href={`/posts/${item.id}`}>{item.id}. {item.title}</Link>)
                }

        </div>
    );
};

export default Page;