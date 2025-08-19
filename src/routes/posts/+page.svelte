<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let posts = data.posts;
</script>

<svelte:head>
	<title>Andrew Houser - Posts</title>
	<meta name="description" content="Andrew Houser's Blog" />
</svelte:head>

<h1 class="pt-6 text-center text-4xl font-bold">Posts</h1>

<div class="flex flex-col items-center justify-center space-y-6 p-6">
	{#each posts as post}
		<a
			href={`/posts/${post.slug}`}
			class="block w-full max-w-3xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-700"
		>
			<h2 class="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-100">{post.title}</h2>
			<p class="mb-2 text-gray-600 dark:text-gray-300">{post.description}</p>
			<p class=" text-sm text-gray-500 dark:text-gray-400">Date: {post.date}</p>
			{#if post.categories && post.categories.length > 0}
				<div class="mt-4 flex flex-wrap gap-2">
					{#each post.categories as category}
						<span
							class="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-green-600 dark:text-green-100"
						>
							{category}
						</span>
					{/each}
				</div>
			{/if}
		</a>
	{/each}
</div>
