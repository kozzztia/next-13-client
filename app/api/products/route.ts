import {NextResponse} from "next/server";
import {products} from "./products";
type productType = {
    id :number;
    name  : string;
}

// localhost:3000/api/products?q=one
export  const GET = async(req :Request, res : Response)=> {
    const {searchParams} = new URL(req.url);
    const query = searchParams.get('q');
    let currentProducts = products;

    if (query) {
        currentProducts = products.filter(product => product.name.toLowerCase().includes(query))
    }

    return NextResponse.json(currentProducts)
}

export const POST = async (req : Request, res : Response)=>{
    const body = await req.json();
    console.log(body)
    return NextResponse.json({body} );
}