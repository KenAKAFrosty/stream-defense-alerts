import { type RequestHandler } from "@builder.io/qwik-city";
import { getQueryBuilder } from "~/database/functions";

export const onRequest: RequestHandler = async (event) => {
    let body;
    try { 
        body = await event.request.json();
    } catch(e) { 
        event.json(500, {value: null, failure: "No body provided."})
        return;
    }
    const method = event.request.method;
    const headers: Record<string, string> = {}
    event.request.headers.forEach((value, key) => {
        headers[key] = value;
    })
    console.log({ method, headers, body })
    const qb = getQueryBuilder();
    await qb.insertInto("incoming_webhooks").values({
        payload: JSON.stringify({ origin: event.url.origin, method, headers, body }),
    }).execute();
    event.json(200, { value: "Received and processed", failure: null });
}