<script>
    import {page} from '$app/stores';
    import Counter2 from '../Counter2.svelte';


    /** @type {import('.$types').PageData} */
    export let data;

    //console.log(data);

    $: products = data.products.products;
    //$: console.log(products);

</script>

<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>
<div class="text-column">
    <h1>{data.title}</h1>
    <h2>Testing possibly successful, here's some Ferarris</h2>
    {#if products && products.length > 0}
        <ul>
            {#each products as product}
                <li>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3><a href="/learning/{product.id}">{product.title}</a></h3>
                    <h4>${product.price}</h4>
                    <p>{product.description}</p>
                </li>
            {/each}
        </ul>
    {/if}
    <Counter2 />
    <p>
        Prerendering tests:
        {JSON.stringify($page.params)}
    </p>
    <p>
        Pre-rendered dynamic pages only work as pre-compiled and rendered links parsed by the initial build.
    </p>
</div>

<style>
    h3 {
        background-color:#dfdce3;
        padding:9px;
    }
    ul {
        padding:0;
        margin:0;
        list-style:none;
        display:grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 30px;
    }
    img {
        width:100%;
    }
</style>