<script lang="ts">
	let {
		images
	}: {
		images: { src: string; alt: string }[];
	} = $props();

	let currentImageIndex = $state(0);
	let totalImages = images.length;

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % totalImages;
	}

	function prevImage() {
		currentImageIndex = currentImageIndex === 0 ? totalImages - 1 : currentImageIndex - 1;
	}

	function goToImage(index: number) {
		currentImageIndex = index;
	}
</script>

<!-- Image Carousel -->
<div class="relative h-48 overflow-hidden rounded-md sm:h-56 md:h-96">
	<!-- Current Image -->
	<img
		src={images[currentImageIndex].src}
		alt={images[currentImageIndex].alt}
		class="object-contain transition-opacity duration-300"
	/>

	<!-- Navigation Buttons -->
	{#if totalImages > 1}
		<!-- Previous Button -->
		<button
			onclick={() => prevImage()}
			class="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors duration-200 hover:bg-black/70"
			aria-label="Previous image"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"
				></path>
			</svg>
		</button>

		<!-- Next Button -->
		<button
			onclick={() => nextImage()}
			class="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors duration-200 hover:bg-black/70"
			aria-label="Next image"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
				></path>
			</svg>
		</button>

		<!-- Image Indicators -->
		<div class="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 space-x-3 sm:bottom-2">
			{#each images as _, imageIndex}
				<button
					onclick={() => goToImage(imageIndex)}
					class="h-3 w-3 cursor-pointer rounded-full transition-colors duration-200 {imageIndex ===
					currentImageIndex
						? 'bg-gray-700 dark:bg-neutral-800'
						: 'bg-gray-400'}"
					aria-label="Go to image {imageIndex + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>
