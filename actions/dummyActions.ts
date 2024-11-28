import axios from "axios";
import {z} from "zod";

export async function getDummyData() {
    const responseSchema = z.object({
        products: z.array(z.object({
            id: z.number(),
            title: z.string()
        }))
    })

    const res = await axios.get("https://dummyjson.com/products");
    return responseSchema.parse(res.data);
}