export const load = async () => {
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });
	const rawFiles = import.meta.glob('/src/posts/*.md', {
		eager: true,
		query: '?raw',
		import: 'default'
	});

	const posts = [];

	for (const path in modules) {
		const file = modules[path] as any;
		const slug = path.split('/').pop()?.replace('.md', '');

		if (file && file.metadata && slug) {
			const metadata = file.metadata;

			const rawContent = rawFiles[path] as string;
			const cleanContent = rawContent.replace(/^---[\s\S]*?---\s*/, '');
			const wordCount = cleanContent.trim().split(/\s+/).length;
			const readTime = Math.ceil(wordCount / 200);

			const dateObj = new Date(metadata.date);
			const year = isNaN(dateObj.getTime()) ? '2026' : dateObj.getFullYear().toString();

			posts.push({
				slug,
				title: metadata.title,
				date: metadata.date,
				year,
				readTime,
				description: metadata.description
			});
		}
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
