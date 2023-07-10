import { getEntries, getLessonTags } from '$utils/entries.js';
// import { tags } from '$lib/data/tags';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const lessons = getEntries('lessons');
	if (!lessons) {
		throw error(404, 'No lessons found');
	}

	const tags = getLessonTags();

	return {
		// eslint-disable-next-line no-unused-vars
		lessons: lessons,
		tags: tags
	};
}
