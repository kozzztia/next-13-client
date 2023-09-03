import {NextResponse} from "next/server";
import {products} from "./products";
type productType = {
    id :number;
    name  : string;
}
export  const GET = async(req :Request, res : Response)=> {
    return NextResponse.json(products)
}

// export const POST = async (req : Request, res : Response)=>{
//     const body : productType = await req.json();
//     products.push(body);
//     return NextResponse.json(req);
// }