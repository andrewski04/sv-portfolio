<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let post = data.metadata;
	let html = data.html;
</script>

<svelte:head>
	<title>Andrew Houser - {post.title}</title>
	<meta name="description" content={post.description} />
</svelte:head>

<div class="flex flex-col items-center justify-center p-6">
	<div class="container max-w-4xl rounded-lg bg-white p-8 shadow-lg dark:bg-gray-700">
		<h1 class="mb-2 text-5xl font-bold text-gray-800 dark:text-gray-100">{post.title}</h1>
		<p class="mb-4 text-sm text-gray-500 dark:text-gray-400">Date: {post.date}</p>
		{#if post.categories && post.categories.length > 0}
			<div class="mb-4 flex flex-wrap gap-2">
				{#each post.categories as category}
					<span
						class="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-green-600 dark:text-green-100"
					>
						{category}
					</span>
				{/each}
			</div>
		{/if}
		<article class="prose dark:prose-invert max-w-none">
			{@html html}
		</article>
	</div>
</div>
