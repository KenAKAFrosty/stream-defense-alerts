import { type RequestHandler } from "@builder.io/qwik-city";
import { getQueryBuilder } from "~/database/functions";

export const onRequest: RequestHandler = async (event) => {
    const method = event.request.method;
    const headers = event.request.headers.entries();
    const body = event.parseBody();
    console.log(headers);
    console.log(body);
    const qb = getQueryBuilder();
    qb.insertInto("incoming_webhooks").values({ 
        payload: JSON.stringify({method, headers, body}),
    })
}