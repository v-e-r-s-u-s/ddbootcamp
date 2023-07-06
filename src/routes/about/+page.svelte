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
	<div class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
		<div class="flex flex-col items-center py-6">
			<div class="h-64 w-64 text-primary-500 flex"
			     style="white-space: pre;font-family:'Courier New', Courier, monospace; font-size: 10px;">
				<div class="w-32">
					{config.logoText}
				</div>
				<div class="w-32">
					{config.logoText}
				</div>
			</div>
			<!-- <img src={config.siteLogo} alt="logo" class="h-64 w-64" /> -->
			<!-- <div class="flex space-x-2 pt-4">
				<SocialIcon icon="mail" url={`mailto:${config.email}`} />
				<SocialIcon icon="github" url={config.github} />
				<SocialIcon icon="linkedin" url={config.linkedin} />
				<SocialIcon icon="twitter" url={config.twitter} />
			</div> -->
		</div>
		<div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
			<!-- <p>
				Dummy Daniel started as an initiative to tackle gatekeeping and imposter
				syndrome within the software community. I have been in the software industry for 10+ years and
				yet, by no means do I consider myself an expert. I've learned a lot but I have much more to
				learn, hence the name.
			</p>

			<p>
				Given the heavy focus on bootcamps and learning the tools, while forgoing the basics, this
				site will attempt to establish a more fundamental approach to teaching software development.
				Further, I often find when I am seeking answers, that search starts with a question.
				As such, my lessons will be structured with goals in mind, and hopefully less
				front-loaded with terminology and concepts that don't apply to the goal at hand.
			</p>

			<p>
				Throughout my career software has changed considerably with substantially more emphasis on
				full-stack, front-end frameworks, machine-learning / AI, etc. It can be difficult to determine
				where to focus your efforts. I encourage you to proceed at your own pace and get comfortable
				asking questions. Feel free to <a class="text-primary-500" href="{`mailto:${config.email}`}">e-mail</a>
				me about anything.
			</p> -->
		</div>
	</div>
	<!-- <div class="space-y-2 py-8 md:space-y-5">
		<Title h2 title="Contributors" />
		<div class="grid xl:grid-cols-3 grid-cols-2 gap-4">
			{#each authors as author}
				<div class="lg:flex flex-row space-x-3">
					<div class="grow-0 shrink-0 basis-auto w-full lg:w-1/3">
						<img src={author.avatar} alt={author.name} class="w-full rounded-xl mb-4 lg:mb-0" />
					</div>
					<div class="grow-0 shrink-0 basis-auto w-full lg:w-2/3">
						<h5 class="text-lg font-bold">{author.name}</h5>
						<p class="text-gray-500 mb-2">{author.occupation}</p>
						<div class="flex">
							<SocialIcon small icon="mail" url={`mailto:${author.email}`} />
							<SocialIcon small icon="twitter" url={author.twitter} />
							<SocialIcon small icon="linkedin" url={author.linkedin} />
							<SocialIcon small icon="github" url={author.github} />
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div> -->
</div>
