
import React from 'react';
import style from "./style.module.css";

import Todos from "@/components/ui-kit/Todos/Todos";
import TodoSearch from "@/components/ui-kit/TodoSearch/TodoSearch";


type todoType = {
    id :number;
    userId : number;
    title  : string;
    completed  : boolean;
}



const Page = () => {
    return (
        <div className={style.about}>
            <TodoSearch/>
            <Todos/>
        </div>
    );
};

export default Page;