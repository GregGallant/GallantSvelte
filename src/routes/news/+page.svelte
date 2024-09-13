<script>
import NewsArt from "./Newsart.svelte";
//import {page} from "$app/stores";

/** @type {import('.$types').PageData} */
export let data;
$: threads = data.threads['posts'];
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content="Entertainment, tech, art, science and music news" />
</svelte:head>
<div class="gazette">
	<div class="datehead">Creative Links
		<div class="subdatehead">Automated entertainment-tech news</div>
	</div>
	{#await threads}
		Loading...
	{:then threads}
		{#if threads && threads.length > 0}
			<ul>
				{#each threads as nnews}
					<NewsArt newsObj={nnews} />
				{/each}
			</ul>
		{/if}
	{/await}
</div>
<!-- @html nnews.text -->
