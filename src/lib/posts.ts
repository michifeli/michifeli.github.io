export type Post = {
	title: string;
	slug: string;
	date: string;
	year: string;
	readTime: number;
	description?: string;
};

export function getPosts(): Post[] {
	const files = import.meta.glob('../posts/*.md', { eager: true });

	const rawFiles = import.meta.glob('../posts/*.md', {
		eager: true,
		query: '?raw',
		import: 'default'
	});

	const posts: Post[] = [];

	for (const path in files) {
		const file = files[path] as { metadata: { title: string; date: string; description?: string } };
		const rawContent = rawFiles[path] as string;
		const slug = path.split('/').pop()?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata;

			const textContent = rawContent ? rawContent.replace(/---[\s\S]*?---/, '').trim() : '';
			const words = textContent.split(/\s+/).length;
			const readTime = Math.ceil(words / 200);

			let year = 'Unknown';
			if (metadata.date) {
				const dateObj = new Date(metadata.date);
				if (!isNaN(dateObj.getTime())) {
					year = dateObj.getFullYear().toString();
				}
			}

			posts.push({
				title: metadata.title || 'Sin Título',
				slug,
				date: metadata.date || new Date().toISOString(),
				year,
				readTime,
				description: metadata.description
			});
		}
	}

	console.log('Posts encontrados:', posts);

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
