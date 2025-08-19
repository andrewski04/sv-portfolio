import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types';
import { render } from 'svelte/server';

export const load = (async ({ params }) => {
	try {
		const post = await import(`$lib/posts/${params.slug}.svx`);
		const html = render(post.default, { props: {} }).body;

		return {
			metadata: post.metadata as Post,
			html
		};
	} catch (e) {
		console.log(e);
		throw error(404, 'Post not found');
	}
}) satisfies PageServerLoad;
