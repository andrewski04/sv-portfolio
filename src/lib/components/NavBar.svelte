<script>
	let currentPage = 'About Me'; // Track the current page, can be dynamically updated
	let menuOpen = false; // Track whether the mobile menu is open or closed

	const pages = [
		{ name: 'About Me', route: '/' },
		{ name: 'Resume', route: '/resume' },
		{ name: 'Projects', route: '/projects' },
		{ name: 'My Vision', route: '/vision' },
		{ name: 'Goals', route: '/goals' }
	];

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<nav class="rounded-lg bg-white p-6 shadow-md">
	<div class="flex items-center justify-between">
		<div class="ml-4 font-mono text-3xl font-bold">
			<a href="/">Andrew Houser</a>
		</div>

		<div class="mr-4 hidden space-x-4 md:flex">
			{#each pages as { name, route }}
				<a
					href={route}
					class={`${
						currentPage === name ? 'font-bold underline' : 'text-gray-600'
					} text-xl hover:text-gray-800`}
					on:click={() => (currentPage = name)}
				>
					{name}
				</a>
			{/each}
		</div>

		<button aria-label="Menu" class="md:hidden" on:click={toggleMenu}>
			<svg
				class="h-6 w-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	</div>

	{#if menuOpen}
		<div class="mt-2 flex flex-col space-y-2 md:hidden">
			{#each pages as { name, route }}
				<a
					href={route}
					class={`${
						currentPage === name ? 'font-bold underline' : 'text-gray-600'
					} px-4 py-2 hover:text-gray-800`}
					on:click={() => (currentPage = name)}
				>
					{name}
				</a>
			{/each}
		</div>
	{/if}
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 50;
	}
</style>
