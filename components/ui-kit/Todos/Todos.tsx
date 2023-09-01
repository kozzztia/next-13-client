import React from 'react';
import style from "./style.module.css"

type todoType = {
    id: number;
    title: string;
    completed: boolean;
}

const Todos = ({todos}: { todos: todoType[] }) => {
    return (
        todos.length === 0 ?
            <p>empty</p>
            :
            <ul className={style.todoList}>
                {
                    todos.map(item => <div key={item.id} className={style.todo}>
                        <b>{item.id}</b> : {item.title}
                    </div>)
                }
            </ul>
    );
};

export default Todos;