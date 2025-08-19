<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import nProgress from 'nprogress';
	let menuOpen = $state(false);
	let darkMode = $state(false);

	const pages = [
		{ name: 'About Me', route: '/' },
		{ name: 'Resume', route: '/resume' },
		{ name: 'Projects', route: '/projects' },
		//{ name: 'My Vision', route: '/vision' },
		//{ name: 'Goals', route: '/goals' },
		{ name: 'Posts', route: '/posts' }
	];

	if (browser) {
		const storedTheme = localStorage.getItem('theme');

		if (storedTheme === 'dark') {
			darkMode = true;
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	function handleSwitchDarkMode() {
		nProgress.start();
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		nProgress.done();
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<svelte:head>
	<script>
		localStorage.getItem('theme') === 'dark'
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	</script>
</svelte:head>

<nav
	class="bg-white p-4 font-mono shadow-md transition-colors duration-300 dark:bg-gray-900 dark:text-white"
>
	<!-- Mobile Header (Title + Menu Button + Dark Mode Toggle) -->
	<div class="flex items-center justify-between md:hidden">
		<div class="font-mono text-3xl font-bold">
			<a href="/" class=" text-black underline dark:text-green-500">Andrew Houser</a>
		</div>
		<div class="flex items-center space-x-2">
			<button aria-label="Toggle dark mode" onclick={handleSwitchDarkMode} class="p-2">
				{#if darkMode}
					<img
						src="/icons/sun.svg"
						alt="Sun icon"
						class="h-6 w-6 text-gray-600 dark:text-gray-200 dark:invert dark:filter"
					/>
				{:else}
					<img
						src="/icons/moon.svg"
						alt="Moon icon"
						class="h-6 w-6 text-gray-600 dark:text-gray-200 dark:invert dark:filter"
					/>
				{/if}
			</button>
			<button aria-label="Menu" onclick={toggleMenu}>
				<img src="/icons/menu.svg" alt="Menu icon" class="h-6 w-6 dark:invert dark:filter" />
			</button>
		</div>
	</div>

	<!-- Desktop Header (Title + Nav + Dark Mode Toggle) -->
	<div class="hidden flex-col items-center justify-center md:flex">
		<div class="mb-4 font-mono text-3xl font-bold">
			<a href="/" class=" text-black underline dark:text-green-500">Andrew Houser</a>
		</div>
		<div class="flex items-center justify-center space-x-4">
			<div class="flex space-x-6">
				{#each pages as { name, route }}
					<a
						href={route}
						class={`${
							page.url.pathname === route
								? 'font-bold text-gray-800 underline dark:text-white'
								: ' text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-gray-500'
						} hover:animate-size-pulse  text-xl`}
					>
						{name}
					</a>
				{/each}
			</div>
			<button aria-label="Toggle dark mode" onclick={handleSwitchDarkMode} class="p-2">
				{#if darkMode}
					<img
						src="/icons/sun.svg"
						alt="Sun icon"
						class="hover:animate-sun-glow h-6 w-6 text-gray-600 hover:text-gray-200 dark:text-gray-200 dark:invert"
					/>
				{:else}
					<img
						src="/icons/moon.svg"
						alt="Moon icon"
						class="hover:animate-moon-glow h-6 w-6 text-gray-600 dark:text-gray-200 dark:invert dark:filter"
					/>
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div class="mt-2 flex flex-col space-y-2 md:hidden">
			{#each pages as { name, route }}
				<a
					href={route}
					class={`${
						page.url.pathname === route
							? 'font-bold text-gray-800 underline dark:text-white'
							: 'text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-gray-500'
					} px-4 py-2 text-xl  `}
					onclick={() => (menuOpen = false)}
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
