

type productType = {
    id :number;
    name  : string;
}


export const getAllProducts = async () : Promise<productType[] | undefined> => {
    const data = await fetch("http://localhost:3000/api/products");
    if(!data.ok) throw new Error("shit can happen")
    return data.json()
}
