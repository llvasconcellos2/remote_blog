<script lang="ts">
	import { resolve } from '$app/paths';
	import { getAllPosts } from './posts.remote';

	//Query for all posts
	//const posts = await getAllPosts();
</script>

<a class="button" href={resolve('/admin/post/new')}>New Post</a>

<!-- List all posts -->
<ol>
	{#each await getAllPosts() as post (post.id)}
		<li><a href={resolve(`/admin/post/${post.id}`)}>{post.title}</a></li>
	{/each}
</ol>
