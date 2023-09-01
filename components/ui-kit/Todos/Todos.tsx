'use client'

import React, {useEffect} from 'react';
import style from "./style.module.css"
import {useTodos} from "@/store";
import {shallow} from "zustand/shallow";
import LoadingComponent from "@/components/ui-kit/Loading/LoadingComponent";



const Todos = () => {
    const [todos , loading , getAllTodos] = useTodos((state) => [
        state.todos , state.loading , state.getAllTodos
    ] , shallow)
    useEffect(()=>{
        getAllTodos();
    },[getAllTodos])
    return (
            <ul className={style.todoList}>
                {loading?
                    <LoadingComponent/>:
                    todos.map(item => <div key={item.id} className={style.todo}>
                        <b>{item.id}</b> : {item.title}
                    </div>)
                }
            </ul>
    );
};

export default Todos;