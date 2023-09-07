

type productType = {
    id :number;
    name  : string;
}


export const getAllProducts = async () : Promise<productType[] | undefined> => {
    const data = await fetch("/api/products");
    if(!data.ok) throw new Error("shit can happen")
    return data.json()
}
