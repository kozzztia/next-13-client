import {NextResponse} from "next/server";
import {headers , cookies} from "next/headers";
import { redirect} from "next/navigation";


export const DELETE = async (req : Request, {params} : {params : {id : string}}, res : Response)  =>{
        const {id} = params;
        return NextResponse.json({req : {id}})
}