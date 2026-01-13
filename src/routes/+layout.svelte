<script lang="ts">
	import '@drop-in/graffiti';
	import './style.css';
	import favicon from '$lib/assets/favicon.svg';
	import { resolve } from '$app/paths';
	import { getUser } from './user.remote';
	import { authClient } from '$lib/auth-client';
	import { goto, onNavigate } from '$app/navigation';

	let { children, data } = $props();

	const user = $derived(await getUser());

	function logout() {
		authClient.signOut({
			fetchOptions: {
				onSuccess: async () => {
					await getUser().refresh();
					goto(resolve('/auth/login'));
				}
			}
		});
	}

	function gotoLogin() {
		goto(resolve('/auth/login'));
	}

	onNavigate((navigate) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigate.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="layout-readable center split">
	<a href={resolve('/')}>Blog</a>
	{#if user.id}
		<button onclick={logout}>Logout</button>
	{:else}
		<button onclick={gotoLogin}>Login</button>
	{/if}
</header>

<main class="layout-readable center">
	{@render children()}
</main>
{data?.name}

<style>
	header {
		border-bottom: solid 1px var(--tint-or-shade);
		align-items: center;
		padding-block: var(--vs-s);
	}
	main {
		padding-block: var(--vs-m);
	}
</style>
