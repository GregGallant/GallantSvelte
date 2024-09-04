<script>
	import Calendar from './Calendar.svelte';
</script>

<svelte:head>
	<title>Cronvega Calendar</title>
	<meta name="description" content="Cronvega Calendar" />
</svelte:head>
<div class="calendar">
	<div class="calendar-column">
		<Calendar />
	</div>
</div>

<style lang="scss">
	p {
		font-family: Lora, sans-serif;
		a:link {
			color: #3a7fa3;
		}
		a:visited {
			color: #3a6f93;
		}

	}
	.sig {
		font-family: Lora, sans-serif;
		text-align: right;
	}
</style>