import {create} from 'zustand';
import {getAllTodos} from "@/services/getAllTodos"
import {getSearchedTodos} from "@/services/getSearchedTodos"

type UseTodos = {
    todos : {
        id :number;
        userId : number;
        title  : string;
        completed  : boolean;
    }[],
    loading :boolean,
    getAllTodos : ()=>Promise<void>
    getSearchedTodos : (value : string)=>Promise<void>
}

export const useTodos = create<UseTodos>() ((set) => ({
    todos : [],
    loading : false,
    getAllTodos : async ()=>{
        set({loading : true})
        const todos = await getAllTodos()
        set({todos , loading : false})

    },
    getSearchedTodos : async (search)=>{
        set({loading : true})
        const todos = await getSearchedTodos(search)
        set({todos , loading : false})
    }

}))