

type todoType = {
    id :number;
    userId : number;
    title  : string;
    completed  : boolean;
}


export const getAllTodos = async () : Promise<todoType[] | []> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    if(!data.ok) throw new Error("shit can happen")
    return data.json()
}
