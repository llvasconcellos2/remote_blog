<script lang="ts">
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { authClient } from '$lib/auth-client';
	import type { ErrorContext, SuccessContext } from 'better-auth/svelte';
	import { getUser } from '../../user.remote';

	let error = $state('');

	async function signIn(e: Event) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const email = form.email.value;
		const password = form.password.value;

		if (!email || !password) {
			error = 'All fields are required';
			return;
		}

		await authClient.signIn.email(
			{
				email,
				password
			},
			{
				onSuccess: async (context: SuccessContext<any>) => {
					getUser().refresh();
					goto(resolve('/'));
				},
				onError: async (context: ErrorContext) => {
					error = `${context.error.status} - ${context.error.code} - ${context.error.message}`;
				}
			}
		);
	}
</script>

<div class="box">
	<h1>Sign In</h1>
	<form onsubmit={signIn}>
		<div class="row">
			<label>
				Email:
				<input required type="email" id="email" />
			</label>
		</div>
		<div class="row">
			<label>
				Password:
				<input required type="password" id="password" />
			</label>
		</div>
		{#if error}
			<p style:color="var(--red)">{error}</p>
		{/if}
		<button type="submit">Login</button>
	</form>
</div>
<p>Don't have an account? <a href={resolve('/auth/signup')}>Sign Up</a></p>
