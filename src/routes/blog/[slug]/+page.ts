import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// CORRECCIÓN: Usamos 3 niveles (../../..) para llegar a 'src', y de ahí a 'posts'
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default,
			title: post.metadata.title,
			date: post.metadata.date
		};
	} catch {
		throw error(404, `No se encontró el post: ${params.slug}`);
	}
}
