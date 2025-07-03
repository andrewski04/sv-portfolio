<script lang="ts">
	export const prerender = false;
	import '../app.css';
	import NavBar from '../lib/components/navigation/NavBar.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-neutral-100 dark:bg-black">
	<NavBar />
	{@render children()}
</div>
