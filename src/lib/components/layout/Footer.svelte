<script>
	import { config } from '$lib/config';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	let year = new Date().getFullYear();
</script>

<footer>
	<div class="mt-16 flex flex-col items-center border-t pt-6 gap-2">
		<div class="mb-3 flex space-x-2">
			<SocialIcon icon="mail" url={config.email ? `mailto:${config.email}` : ''} />
			<!-- <SocialIcon icon="github" url={config.github} />
			<SocialIcon icon="facebook" url={config.facebook} />
			<SocialIcon icon="youtube" url={config.youtube} />
			<SocialIcon icon="linkedin" url={config.linkedin} />
			<SocialIcon icon="twitter" url={config.twitter} /> -->
		</div>
		{#if config.newsletter.provider}
			<Newsletter />
		{/if}
		<div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			Content © {year} {config.author}. All Rights Reserved. &nbsp; • &nbsp;
			Theme &nbsp; © 2022 &nbsp;
			<a class="text-primary-500" href="https://github.com/akiarostami/sveltekit-tailwind-blog-starter">
				{config.themeAuthor}
			</a>
			&nbsp;
			<a class="text-primary-500" href="/THEME-LICENSE">LICENSE</a>
		</div>
		<!-- <div class="mb-4 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
			© {year} {config.author} &nbsp; • &nbsp;
			Site Design By &nbsp;
			<a class="text-primary-500" href="https://github.com/akiarostami/sveltekit-tailwind-blog-starter">
				{config.themeAuthor}
			</a>
			&nbsp; • &nbsp;
			Customized By {config.author}
		</div> -->
	</div>
</footer>
