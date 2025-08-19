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

<div
	class="min-h-screen bg-neutral-200 transition-colors duration-300 dark:bg-gray-800 dark:text-white"
>
	<NavBar />
	{@render children()}
</div>
