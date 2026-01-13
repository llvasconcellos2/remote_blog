<script lang="ts">
	import { page } from '$app/state';
	import { getPostBySlug } from '../../admin/posts.remote';

	const post = await getPostBySlug(page.params.slug!);
</script>

{#if post}
	<section>
		<h2 style:view-transition-name={`heading-${post.slug}`}>{post.title}</h2>
		<p>{post.body}</p>
	</section>
{/if}
