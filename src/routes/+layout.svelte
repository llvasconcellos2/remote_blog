<script lang="ts">
	import '@drop-in/graffiti';
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="layout-readable center">
	{#if data.name}{data.name}{/if}
	{@render children()}
</main>
