<script lang="ts">
	import { createPost } from '../../posts.remote';
</script>

<form {...createPost}>
	<div class="row">
		<label
			>Title:
			<input {...createPost.fields.title.as('text')} />
		</label>
		{#each createPost.fields.title.issues() as issue (issue.message)}
			<p>{issue.message}</p>
		{/each}
	</div>
	<div class="row">
		<label>Body: <textarea {...createPost.fields.body.as('text')}></textarea></label>
	</div>
	<button type="submit">Post</button>
</form>
