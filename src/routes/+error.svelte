<script lang="ts">
	import { page } from '$app/state';
</script>

<h1 class="mt-32 text-center font-mono text-4xl font-bold">Error: {page.status}</h1>
<h2 class="mt-8 text-center font-mono text-3xl font-semibold">{page.error?.message}</h2>
