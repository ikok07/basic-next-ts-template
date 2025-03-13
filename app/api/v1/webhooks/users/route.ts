import {z} from "zod";
import {NextResponse} from "next/server";
import axios from "axios";
import {clerkWebhookProtect} from "@/app/api/v1/webhooks/protect";

export const requestBodySchema = z.object({
    type: z.literal("user.created"),
    data: z.object({}).passthrough()
});

export const userCreatedData = z.object({
    id: z.string()
})

export async function POST(req: Request) {
    try {
        const rawBody = await req.text();
        const protectResponse = clerkWebhookProtect(process.env.CLERK_USERS_WEBHOOK_SECRET!, rawBody, req.headers);
        if (protectResponse) return protectResponse;

        const {data: body, error: bodyError} = requestBodySchema.safeParse(JSON.parse(rawBody));
        if (bodyError) {
            console.error(bodyError)
            return NextResponse.json({status: "fail", error: "Invalid body!"}, {status: 400});
        }

        const {data: createdUserData, error: createdUserError} = userCreatedData.safeParse(body.data);
        if (createdUserError) {
            console.error(bodyError)
            return NextResponse.json({status: "fail", error: "Create user data is invalid!"}, {status: 400});
        }

        await axios.patch(`https://api.clerk.com/v1/users/${createdUserData.id}/metadata`, {
            public_metadata: {
                roles: ["user"]
            }
        }, {
            headers: {
                Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`
            }
        })

        return NextResponse.json({status: "success"});
    } catch(e) {
        console.error(e);
        return NextResponse.json({status: "fail", error: "Something went wrong!"}, {status: 500})
    }
}