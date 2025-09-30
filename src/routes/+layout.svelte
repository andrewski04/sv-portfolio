<script lang="ts">
	import '../app.css';
	import NavBar from '../lib/components/navigation/NavBar.svelte';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';

	NProgress.configure({ showSpinner: false, minimum: 0.1 });

	beforeNavigate(async () => {
		NProgress.start();
	});

	afterNavigate(async () => {
		NProgress.done();
	});

	let { children } = $props();
</script>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black dark:focus:bg-gray-100"
>
	Skip to main content
</a>
<div
	class="min-h-screen bg-neutral-200 transition-colors duration-300 dark:bg-gray-800 dark:text-white"
>
	<NavBar />
	<main id="main" tabindex="-1">
		{@render children()}
	</main>
</div>
