<script lang="ts">
	import '@drop-in/graffiti';
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{data.name}

<main class="layout-readable center">
	{@render children()}
</main>
