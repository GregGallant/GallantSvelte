import {beforeUpdate} from 'svelte';
import { page } from '$app/stores';

//export const prerender = true;

/** @type {import('.$types').PageLoad} */
export const load = async({params}) => {
    console.log('Loading products as data...');
    const products = await (await import('$lib/dummy-products.json')).default; // default also needs await
    const product = products.products.find(p => p.id == +params.id);

    if(!product) {
        console.log('async issue though: no product found');
        /* Buid process precompiles routes it can find, this will never work - stick to backend for dynamic routing */
        //redirect(404, '/files');
        //throw error(404, "Product not found")
    } else {
        console.log('product found');
    }

    return {
        product
    };
};

