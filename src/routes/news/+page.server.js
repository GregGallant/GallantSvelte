import {error, json} from "@sveltejs/kit";


/** @type {import('./$types').PageServerLoad} */
export const load = async ({fetch}) => {

    //const response = await fetch('/api/products');
    const response = await fetch('/news');

    if (response.ok) {
    //const products = await (await import('$lib/dummy-products.json')).default;
    //return new Response(JSON.stringify(products), {status: 200});
        return  {
            title: "GallantOne Creative Networks",
            threads: await response.json()
        };
    } else {
        // this would work on dummy 404 but need to code in message on custom
        const errorJSON = await response.json();
        throw error(response.status, errorJSON.message);
    }
}

