<script>
	import Head from '$lib/components/layout/Head.svelte';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import { config } from '$lib/config';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const authors = data.authors;
</script>

<Head title="About" />

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="About" />
	</div>
	<div class="items-start space-y-2 xl:space-y-0">
		<div class="prose max-w-none pt-8 pb-8 dark:prose-dark">
			<h1>Welcome</h1>

			<p>
				Despite the name, I am not that much of a dummy.
			</p>

			<p>
				My goal through this site is to create an environment where
				<span class="text-pink-500">normal</span> people can
				learn to code without feeling out of place. Everyone has their
				own unique journey in software development and not all of us are called to
				be rockstars, and that is <span class="text-pink-500"><bold>OK</bold></span>.
			</p>

			<h2>First Things First</h2>

			<p>
				Through my own learning, I've often noticed a focus on terms and concepts first.
				I have never found this too helpful because my process of learning always starts
				with a question.
			</p>

			<p><span class="text-pink-500">How do I do this?</span></p>

			<p>
				Therefore, my lessons will often be problem-centric, starting with projects and then
				expanding into new concepts as we need them.
			</p>

			<h2>Getting Started</h2>
			<p>
				Visit the <a href="/what-to-learn">What To Learn</a> section. For now, I am focused on
				building out some basic courses on HTML, CSS, & Javascript. Subscribe to my <a href="/newsletter">
				Newsletter</a> to receive updates when I publish new lessons. And feel free to <a href="mailto:blah@blah.com">
				contact me</a> with any requests outside the scope of this site.			
			</p>

			
			<p>Most people in the software industry are working normal jobs, for normal salaries,
				with normal hours, etc. You get the idea. There is a lot of room for normal people
				in the industry, and this often gets overlooked by media that focuses on the extremes.
			</p>
		</div>
	</div>
</div>