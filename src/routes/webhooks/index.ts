import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async (event) => {
    const headers = event.request.headers.entries();
    const body = event.parseBody();
    console.log(headers);
    console.log(body);
}