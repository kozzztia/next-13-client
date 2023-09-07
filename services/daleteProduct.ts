type productType = {
    id :number;
}


export const deleteProduct = async (id:string): Promise<string|undefined>=>{
    const res = await fetch(`http://localhost:3000/api/products/${id}` , {
        method: "DELETE",
    });
    if(!res.ok) throw new Error("shit can happen")
    return id
}
