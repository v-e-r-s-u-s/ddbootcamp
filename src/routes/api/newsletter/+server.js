import { error } from '@sveltejs/kit';
//import registerEmail from '$lib/newsletter';
import registerEmail from '$lib/newsletter/convertkit.js';

export const POST = async ({ request }) => {
	try {
		const { email } = await request.json();
		let result = await registerEmail(email);

		return result;
	} catch (err) {
		console.error(err);
		throw error(400, "couldn't add email to the newsletter");
	}
};
