<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { fly } from 'svelte/transition';

	let {
		images
	}: {
		images: { src: string; alt: string }[];
	} = $props();

	let currentImageIndex = $state(0);
	let totalImages = images.length;
	let imagesPreloaded = $state(false);
	let direction = $state<'next' | 'prev'>('next');
	let isMagnified = $state(false);
	let overlayEl = $state<HTMLDivElement | null>(null);

	onMount(() => {
		const preloadPromises = images.map(({ src }) => {
			return new Promise<void>((resolve) => {
				const img = new Image();
				img.decoding = 'async';
				img.loading = 'eager';
				img.onload = () => resolve();
				img.onerror = () => resolve();
				img.src = src;
			});
		});

		Promise.allSettled(preloadPromises).then(() => {
			imagesPreloaded = true;
		});
	});

	function nextImage() {
		direction = 'next';
		currentImageIndex = (currentImageIndex + 1) % totalImages;
	}

	function prevImage() {
		direction = 'prev';
		currentImageIndex = currentImageIndex === 0 ? totalImages - 1 : currentImageIndex - 1;
	}

	function goToImage(index: number) {
		if (index === currentImageIndex) return;
		direction = index > currentImageIndex ? 'next' : 'prev';
		currentImageIndex = index;
	}

	async function openMagnify() {
		isMagnified = true;
		await tick();
		overlayEl?.focus();
	}

	function closeMagnify() {
		isMagnified = false;
	}

	function onOverlayKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			event.preventDefault();
			closeMagnify();
		} else if (event.key === 'ArrowRight') {
			event.preventDefault();
			nextImage();
		} else if (event.key === 'ArrowLeft') {
			event.preventDefault();
			prevImage();
		}
	}

	function onOverlayClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeMagnify();
		}
	}
</script>

<!-- Image Carousel -->
<div class="relative h-48 overflow-hidden rounded-md sm:h-56 md:h-96">
	<!-- Current Image with slide animation -->
	{#key currentImageIndex}
		<img
			src={images[currentImageIndex].src}
			alt={images[currentImageIndex].alt}
			decoding="async"
			fetchpriority="high"
			class="absolute inset-0 h-full w-full object-cover"
			in:fly={{ x: direction === 'next' ? 300 : -300, duration: 250 }}
			out:fly={{ x: direction === 'next' ? -300 : 300, duration: 250 }}
		/>
	{/key}

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

		<!-- Magnify Button -->
		<button
			onclick={() => openMagnify()}
			class="absolute top-2 right-2 hidden cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors duration-200 hover:bg-black/70 md:block"
			aria-label="Magnify carousel"
		>
			<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<circle cx="11" cy="11" r="7" stroke-width="2" />
				<path d="M20 20l-3.5-3.5" stroke-width="2" stroke-linecap="round" />
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

<!-- Fullscreen Magnified Overlay -->
{#if isMagnified}
	<div
		bind:this={overlayEl}
		tabindex="0"
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
		onkeydown={onOverlayKeydown}
		onclick={onOverlayClick}
		role="dialog"
		aria-modal="true"
		aria-label="Image viewer"
	>
		<button
			onclick={() => closeMagnify()}
			class="absolute top-4 right-4 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors duration-200 hover:bg-black/70"
			aria-label="Close viewer"
		>
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<div class="relative h-[80vh] w-[92vw] max-w-6xl overflow-hidden rounded-md">
			{#key currentImageIndex}
				<img
					src={images[currentImageIndex].src}
					alt={images[currentImageIndex].alt}
					decoding="async"
					fetchpriority="high"
					class="absolute inset-0 h-full w-full object-contain"
					in:fly={{ x: direction === 'next' ? 400 : -400, duration: 250 }}
					out:fly={{ x: direction === 'next' ? -400 : 400, duration: 250 }}
				/>
			{/key}

			{#if totalImages > 1}
				<button
					onclick={() => prevImage()}
					class="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white transition-colors duration-200 hover:bg-black/70"
					aria-label="Previous image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						></path>
					</svg>
				</button>
				<button
					onclick={() => nextImage()}
					class="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-3 text-white transition-colors duration-200 hover:bg-black/70"
					aria-label="Next image"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
						></path>
					</svg>
				</button>
			{/if}
		</div>
	</div>
{/if}
