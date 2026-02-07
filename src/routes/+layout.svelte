<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GrowingBranches from '$lib/components/GrowingBranches.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<GrowingBranches />

<div class="page-container">
	<Navbar />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		background: var(--bg, #1c1c1c);
		color: var(--text, #ececec);
		font-family: system-ui, -apple-system, sans-serif;
		line-height: 1.6;
		--link-color: #F763BF;
		--text-muted: #a0a0a0;
		--border: #3a3a3a;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(a:hover) {
		text-decoration: none;
	}

	:global(a.link),
	:global(p a),
	:global(li a) {
		color: var(--link-color);
		border-bottom: 1px solid color-mix(in srgb, var(--link-color) 50%, transparent);
		transition: border-color 0.2s;
	}

	:global(a.link:hover),
	:global(p a:hover),
	:global(li a:hover) {
		border-color: var(--link-color);
	}

	.page-container {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		margin-top: 2rem;
		flex: 1;
	}
</style>
