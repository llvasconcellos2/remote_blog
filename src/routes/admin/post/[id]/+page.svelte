<script lang="ts">
	import { page } from '$app/state';
	import { getPostById, updatePost } from '../../posts.remote';

	const post = await getPostById(page.params.id!);
</script>

{post?.title}

<form {...updatePost}>
	<input {...updatePost.fields.id.as('text')} hidden value={post?.id} />
	<div class="row">
		<label
			>Title:
			<input {...updatePost.fields.title.as('text')} value={post?.title} />
		</label>
		{#each updatePost.fields.title.issues() as issue (issue.message)}
			<p>{issue.message}</p>
		{/each}
	</div>
	<div class="row">
		<label
			>Body: <textarea {...updatePost.fields.body.as('text')} value={post?.body}></textarea></label
		>
	</div>
	<button type="submit">Post</button>
</form>
