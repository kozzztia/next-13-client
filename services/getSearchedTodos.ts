

type todoType = {
    id :number;
    userId : number;
    title  : string;
    completed  : boolean;
}


export const getSearchedTodos= async (search : string):Promise<todoType[] | []> => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos?q=${search}`)
    if(!data.ok) throw new Error("unfind");
    return data.json();
}
