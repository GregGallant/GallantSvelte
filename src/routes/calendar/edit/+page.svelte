<script>
	import {onMount} from 'svelte';
	import {page} from '$app/stores';
	import bkarrow from '$lib/images/bkarrow_w1.png';
	import 'quill/dist/quill.core.css';


	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	let iuData;
	let izData;

	// date data
	let uData = $page.url.searchParams.get("dT")
	uData = uData.slice(2);
	iuData = uData.split('z0g');
	izData = iuData[1].split('y0x');
	console.log("dat from edit1: " + iuData[0]);
	console.log("dat from edit2: " + izData[0]);
	console.log("dat from edit3: " + izData[1]);

	let monthName = months[izData[0]];
	let laDia = iuData[0];
	let fYear = izData[1];

	let editDate = monthName + " " + laDia + ", " + fYear;

	let editor;

	export let toolbarOptions = [
		[{ font: [] }],
		[{ size: [] }],
		[{ header: 1 }, { header: 2 }, { header: 3 }, "blockquote", "link", "image", "video"],
		["bold", "italic", "underline", "strike"],
		[{ list: "ordered" }, { list: "ordered" }],
		[{ 'script': 'sub'}, { 'script': 'super' }],
		[{ 'color': [] }, { 'background': [] }],
		[{ align: [] }],
		["clean"]
	];

	onMount(async () => {
		const { default: Quill } = await import("quill");

		let quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: "snow",
			placeholder: "Notes, thoughts, updates, etc... "
		});
	});

</script>

<svelte:head>
	<title>Cronvega Calendar</title>
	<meta name="description" content="Cronvega Calendar"/>
</svelte:head>

<div class="calendar">
	<div class="editdate">
		<a href="/calendar"><img src={bkarrow} alt="back to calendar" /></a>
		&nbsp;&nbsp;&nbsp; <!-- TODO: no nbsps -->
		<span>Notes:</span> {editDate}</div>
	<div class="calendar-edit-column">
		<style>
			@import 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
		</style>

		<div class="editor-wrapper">
			<div class="editor-pane" bind:this={editor} />
		</div>
	</div>
</div>

<style lang="scss">
	div {
		font-family:Helvetica, Arial, sans-serif;
		.editor-wrapper {
			font-family:Helvetica, Arial, sans-serif;
		}
	}
</style>