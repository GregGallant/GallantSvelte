import { dev } from '$app/environment';
import { json, error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler) */
export const GET = async ({fetch}) => {

    // Async fetching Svelte style.  Btw, Staging / Prod urls removed...

    const response = await fetch(newsURL);
    let responseJson = '';
    if (response.ok) {
        responseJson = await response.json();
    } else {
        throw error(response.status, response.statusText)
    }

    return json(responseJson, {status: 200});
}

/** @type {import('./$types').RequestHandler) */
export const POST = async ({request}) => {
    const product = await request.json();

    if (!product.title) {
        throw error(400, 'Product title is required')
    }

    return json({id: 444, title: product.title})
}

