"use client"
import React from 'react';
import style from "./style.module.css"
import useSWR from "swr"
import LoadingComponent from "@/components/ui-kit/Loading/LoadingComponent";
import {getAllTodos} from "@/services/getAllTodos"
import HeaderTitle from "@/components/ui-kit/Titles/HeaderTitle";
import {text} from "@/public/dictionary/text";

type todosType = {
    id : number,
    userId : number;
    title : string;
    completed : boolean
}

const Todos = () => {
    const {postsTitle} = text;
    const {data : todos , isLoading} = useSWR("todos" , getAllTodos)
    return (
            <div className={style.todoList}>
                <HeaderTitle title={postsTitle} />
                {isLoading?
                    <LoadingComponent/>:
                    todos?.map(item => <div key={item.id} className={style.todo}>
                        <b>{item.id}</b> : {item.title}
                    </div>)
                }
            </div>
    );
};

export default Todos;