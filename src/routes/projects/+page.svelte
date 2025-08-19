<script lang="ts">
	import type { PageProps } from './$types';
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';

	let { data }: PageProps = $props();
	let projects = data.projects;
</script>

<svelte:head>
	<title>Andrew Houser - Projects</title>
	<meta name="description" content="Andrew Houser's Projects" />
</svelte:head>

<h1 class="pt-6 text-center text-4xl font-bold">{projects.title}</h1>

<div class="flex flex-col items-center justify-center space-y-6 p-4 md:p-6">
	{#each projects.sections as section}
		<div
			class=" w-full max-w-3xl rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-600 dark:bg-gray-700"
		>
			{#if section.images && section.images.length > 0}
				<ImageCarousel images={section.images} />
			{/if}

			<div class="p-4 md:p-8">
				<h2 class="mb-2 text-2xl font-semibold">{section.title}</h2>
				<p class="mb-2 text-gray-600 dark:text-gray-300">
					{section.subtitle}
				</p>
				{#each section.list as list}
					<h3 class="my-2 text-xl font-semibold">{list.title}</h3>
					<ul class="list-disc space-y-2 pl-5">
						{#each list.description as description}
							<li class="text-blue-500 dark:text-green-600">
								<span class="text-gray-800 dark:text-gray-100">{description}</span>
							</li>
						{/each}
					</ul>
				{/each}
			</div>
		</div>
	{/each}
</div>
