import { dev } from '$app/environment';
import { json, error } from '@sveltejs/kit';

// Used locally via dev server only
//export const prerender = true;

/** @type {import('./$types').RequestHandler) */
export const GET = async ({fetch}) => {

    const response = await fetch('https://dummyjson.com/products/category/mens-watches');
    let responseJson = '';

    //console.log(response);
    if (response.ok) {
        responseJson = await response.json();
    } else {
        throw error(response.status, response.statusText)
    }

    //const products = await (await import('$lib/dummy-products.json')).default;
    //return new Response(JSON.stringify(products), {status: 200});
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
