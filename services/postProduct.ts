import {getAllProducts} from "@/services/getAllProducts";

type productType = {
    id :number;
    name  : string;
}

export const postProduct = async (body:productType)=>{
    const res = await fetch("http://localhost:3000/api/products" , {
        method: "POST",
        body : JSON.stringify(body),
    });
    if(!res.ok) throw new Error("shit can happen")
    return res.json()
}