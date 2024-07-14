import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json("Hi, Server is online")
}