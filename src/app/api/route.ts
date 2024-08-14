import { products } from "./data";

export async function GET() {
    return Response.json(products)
}