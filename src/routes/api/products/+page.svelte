<script>
import {page} from "$app/stores";

/** @type {import('.$types').PageData} */
export let data;

//console.log(data);

$: products = data.products.products;
//$: console.log(products);
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content="Blah blah blah" />
</svelte:head>

<div class="text-column">

</div>

<div class="text-column">
	<h1>{data.title}</h1>
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
</div>
<pre>local server: npm run dev</pre>
<p> Server-side only - no static adapter for +server.js - Run in postman to get JSON API context </p>

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
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 30px;
	}

	img {
		width:100%;
	}

</style>