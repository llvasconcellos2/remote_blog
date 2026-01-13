<script lang="ts">
	import { page } from '$app/state';
	import { getPostBySlug } from '../../admin/posts.remote';

	const post = await getPostBySlug(page.params.slug!);
</script>

{#if post}
	<section>
		<h1>{post.title}</h1>
		<p>{post.body}</p>
	</section>
{/if}
