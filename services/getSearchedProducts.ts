

type productType = {
    id :number;
    name : "string";
}


export const getSearchedProducts= async (search : string):Promise<productType[] | undefined> => {
    const data = await fetch(`/api/products?q=${search}`)
    if(!data.ok) throw new Error("unfind");
    return data.json();
}
