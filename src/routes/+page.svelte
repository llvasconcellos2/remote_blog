<script lang="ts">
	import { resolve } from '$app/paths';
	import { getAllPosts } from './admin/posts.remote';
</script>

<section class="stack">
	{#each await getAllPosts() as post (post.id)}
		<a href={resolve(`/post/${post.slug}`)}>
			<div class="box">
				<h2>{post.title}</h2>
			</div>
		</a>
	{/each}
</section>
