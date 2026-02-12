<script lang="ts">
	import Main from '$lib/components/Main.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Mitchel Rojas</title>
</svelte:head>

<Main posts={data.posts} />
