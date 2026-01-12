import type { Handle } from '@sveltejs/kit';
import { building } from '$app/environment';
import { sequence } from '@sveltejs/kit/hooks';
import { svelteKitHandler } from 'better-auth/svelte-kit';

import { auth } from '$lib/auth';

// export const log: Handle = async ({ event, resolve }) => {
// 	console.log('before LOG hit');
// 	const response = await resolve(event);
// 	console.log('after LOG hit');
// 	return response;
// };

// export const log_two: Handle = async ({ event, resolve }) => {
// 	console.log('before LOG2 hit');
// 	const response = await resolve(event);
// 	console.log('after LOG2 hit');
// 	return response;
// };

// export const handle = sequence(log, log_two);

const authHandle: Handle = async ({ event, resolve }) => {
	return svelteKitHandler({ event, resolve, auth, building });
};

const sessionHandle: Handle = async ({ event, resolve }) => {
	const session = await auth.api.getSession({
		headers: event.request.headers
	});
	event.locals.user = session?.user;
	return await resolve(event);
};

export const handle = sequence(authHandle, sessionHandle);
