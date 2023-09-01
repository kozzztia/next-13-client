export const getSearchedTodos= async (search : string) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos?q=${search}`)
    if(!data.ok) throw new Error("unfind");
    return data.json();
}
