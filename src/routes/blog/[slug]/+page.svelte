<script lang="ts">
	import type { Component } from 'svelte';

	interface Data {
		title: string;
		date: string;
		content: Component;
	}

	let { data }: { data: Data } = $props();

	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(dateString).toLocaleDateString('en-US', options);
	};
</script>

<svelte:head>
	<title>{data.title} | Mitchel Rojas</title>
</svelte:head>

<article class="blog-container">
	<header class="blog-header">
		<h1>{data.title}</h1>

		<div class="meta">
			<span class="meta-item">
				<a href="https://github.com/michifeli" target="_blank" class="author-link">@michi</a>
			</span>
			<span class="separator">|</span>
			<span class="meta-item">{formatDate(data.date)}</span>
			<span class="separator">|</span>
		</div>
	</header>

	<div class="content">
		<data.content />
	</div>

	<footer class="blog-footer">
		<span class="separator">·</span>
		<a href="/">Home</a>
	</footer>
</article>

<style>
	.blog-container {
		max-width: 800px;
		margin: 0 auto;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		color: #e5e5e5;
	}

	.blog-header {
		margin-bottom: 3rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		margin-bottom: 0.5rem;
		color: #fff;
		line-height: 1.2;
	}

	.meta {
		font-family:
			ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
			monospace;
		font-size: 0.8rem;
		color: #888;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.author-link {
		color: inherit;
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition:
			color 0.2s,
			border-color 0.2s;
	}

	.author-link:hover {
		color: #e5e5e5;
		border-bottom-color: #e5e5e5;
	}

	.separator {
		color: #444;
	}

	.content :global(p) {
		margin: 1.5rem 0;
		line-height: 1.7;
		color: #d4d4d4;
		font-size: 1rem;
	}

	.content :global(a) {
		color: #a3a3a3;
		text-decoration: none;
		border-bottom: 1px solid #525252;
		transition: all 0.2s ease;
	}

	.content :global(a:hover) {
		color: #fff;
		border-bottom-color: #fff;
	}

	.content :global(h2) {
		font-size: 1.5rem;
		font-weight: 700;
		margin-top: 3rem;
		margin-bottom: 1rem;
		color: #fff;
		letter-spacing: -0.01em;
	}

	.content :global(h3) {
		font-size: 1.25rem;
		font-weight: 600;
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		color: #fff;
	}

	.content :global(ul) {
		margin: 1.5rem 0;
		padding-left: 1.5rem;
		list-style: none;
	}

	.content :global(li) {
		margin-bottom: 0.5rem;
		position: relative;
		padding-left: 1rem;
		color: #d4d4d4;
	}

	.content :global(li::before) {
		content: '–';
		position: absolute;
		left: -1rem;
		color: #666;
	}

	.content :global(strong) {
		color: #fff;
		font-weight: 600;
	}

	.content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: 2rem 0;
		font-size: 0.9rem;
	}

	.content :global(th),
	.content :global(td) {
		padding: 0.75rem 1rem;
		border: 1px solid #333;
		text-align: left;
	}

	.content :global(th) {
		background-color: #111;
		font-weight: 600;
		color: #fff;
	}

	.content :global(tr:hover td) {
		background-color: #111;
	}

	.content :global(blockquote) {
		border-left: 3px solid #333;
		padding-left: 1rem;
		margin: 1.5rem 0;
		font-style: italic;
		color: #a0a0a0;
	}

	.blog-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid #222;
		font-family: ui-monospace, SFMono-Regular, monospace;
		font-size: 0.8rem;
		color: #666;
		display: flex;
		gap: 0.5rem;
	}

	.blog-footer a {
		color: #888;
		text-decoration: none;
		border-bottom: 1px solid transparent;
	}

	.blog-footer a:hover {
		color: #ccc;
		border-bottom-color: #ccc;
	}
</style>
