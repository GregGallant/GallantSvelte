<script>
    import {page} from '$app/stores';

    /** @type {import('.$types').PageData} */
    export let data;

    //console.log(data);

    $: product = data.product;
</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
    <h1>Product</h1>
    <img src={product.thumbnail} alt={product.title} />
    <p>{product.description} : {product.rating}</p>
    <p>
        Prerendering tests:
        {JSON.stringify($page.params)}
    </p>
</div>

<style>
    img {
        width:100%;
    }
</style>