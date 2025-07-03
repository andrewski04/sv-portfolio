<script lang="ts">
	import '../app.css';
	import NavBar from '../lib/components/NavBar.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-neutral-400 px-8 pt-4">
	<NavBar />
	{@render children()}
</div>
