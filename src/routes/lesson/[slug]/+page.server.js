import { error } from '@sveltejs/kit';
import { getEntries } from '$utils/entries.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const lessons = getEntries('lessons');
	const authors = getEntries('authors');
	const { slug } = params;

	const lesson = lessons.find((l) => l.slug === slug);
	const author = authors.find((a) => a.name === lesson.author);

	if (!lesson) {
		throw error(404, 'No lesson found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		lesson: lesson,
		author: author
	};
}
