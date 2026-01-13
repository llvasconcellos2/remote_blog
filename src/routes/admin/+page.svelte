<script lang="ts">
	import { getAllPosts } from './posts.remote';

	//Query for all posts
	//const posts = await getAllPosts();
</script>

<!-- List all posts -->
<ol>
	{#each await getAllPosts() as post (post.id)}
		<li>{post.title}</li>
	{/each}
</ol>
