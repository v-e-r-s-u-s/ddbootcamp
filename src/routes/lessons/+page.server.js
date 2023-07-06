import { getEntries } from '$utils/entries.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const lessons = getEntries('lessons');
	if (!lessons) {
		throw error(404, 'No project found');
	}

	return {
		// eslint-disable-next-line no-unused-vars
		lessons: lessons
	};
}
