import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types';

export const load = (async ({ params }) => {
	try {
		const post = await import(/* @vite-ignore */ `/content/posts/${params.slug}.md`);
		console.log(post.default);

		return {
			content: post.default.render(),
			metadata: post.metadata as Post
		};
	} catch {
		throw error(404, 'Post not found');
	}
}) satisfies PageServerLoad;
