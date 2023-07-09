import { type RequestHandler } from "@builder.io/qwik-city";
import { getQueryBuilder } from "~/database/functions";

export const onPost: RequestHandler = async (event) => {
    const body = await event.parseBody();
    if (body === null) { 
        event.json(500, {value: null, failure: "No body provided. Please provide a JSON body and be sure to include the 'Content-Type' header of 'application/json'"})
        return;
    }
    const method = event.request.method;
    const headers = event.request.headers.entries();
    console.log({ method, headers, body })
    const qb = getQueryBuilder();
    await qb.insertInto("incoming_webhooks").values({
        payload: JSON.stringify({ method, headers, body }),
    }).execute();
    event.json(200, { value: "Received and processed", failure: null });
}