export const load = async () => {
	// 1. Buscamos los posts
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	console.log('-------------------------------------------');
	console.log('md found:', Object.keys(paths));

	const posts = [];

	for (const path in paths) {
		const file = paths[path] as any;
		const slug = path.split('/').pop()?.replace('.md', '');

		if (file && file.metadata && slug) {
			const metadata = file.metadata;
			const dateObj = new Date(metadata.date);
			const year = isNaN(dateObj.getTime()) ? '2026' : dateObj.getFullYear().toString();

			posts.push({
				slug,
				title: metadata.title,
				date: metadata.date,
				year,
				readTime: 5,
				description: metadata.description
			});
		} else {
			console.warn(`Archivo ${path} no tiene metadata o slug válido.`);
		}
	}

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};
