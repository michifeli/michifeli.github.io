import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
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
