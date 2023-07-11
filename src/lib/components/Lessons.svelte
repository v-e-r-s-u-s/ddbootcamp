<script>
	import Tag from '$lib/components/Tag.svelte';
	import Title from '$lib/components/Title.svelte';
	import LessonSearchBox from '$lib/components/LessonSearchBox.svelte';
	import { page } from '$app/stores';
	import fuzzySearch from '$utils/search.js';

	export let title = '';
	// TODO: What is this used for???
	export let subtitle = '';
	export let lessons = [];
	export let tags = [];
	export let more = true;
	export let search = true;
	export let h2 = false;
	export let count = 0;

	if (count) {
		lessons = lessons.slice(0, count);
	}

	$: filter = $page.url.searchParams.get('query');
	$: currentLessons = filter ? fuzzySearch(lessons, filter) : lessons;

	import Card from '$lib/components/Card.svelte';
	//import Title from '$lib/components/Title.svelte';

	//export let data;
	//const lessons = data.lessons;
</script>

<!-- Search Box -->
<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<div class="grid lg:grid-cols-2 gap-4">
			<div>
				<Title {title} {subtitle} {h2} />
			</div>

			<div class="pl-4" class:border-l-2={search}>
				{#if search}
					<LessonSearchBox />
				{/if}

				{#if tags.length}
					<div class="flex flex-wrap">
						{#each tags as tag}
							<div class="mr-5">
								<Tag text={tag.text} size="text-xs" />
								<a
									href={`/tags/${tag.slug}`}
									class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300"
								>
									{` (${tag.count})`}
								</a>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
	<!-- List of Lessons -->
	<div class="container py-12">
		<div class="-m-4 flex-wrap">
			{#if !currentLessons.length}
				No lessons found.
			{:else}
				{#each currentLessons as lesson}
					<article>





						<div class="md p-4 w-auto" style="max-width: '544px'">
							<div
								class={`${
									lesson.image && 'h-full'
								}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
							>
								<div class="p-6">
									<h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
										{#if lesson.href}
											<a href={`/lesson/${lesson.slug}`} aria-label={`Link to ${lesson.title}`}>
												{lesson.title}
											</a>
										{:else}
											{lesson.title}
										{/if}
									</h2>
									<div class="flex flex-wrap pb-2">
										{#each lesson.tags as tag}
											<Tag text={tag} />
										{/each}
									</div>
									<p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{lesson.summary}</p>
									{#if lesson.href}
										<a
											href={`/lesson/${lesson.slug}`}
											class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											aria-label={`Link to ${lesson.title}`}
										>
											Get Started &rarr;
										</a>
									{/if}
								</div>
							</div>
						</div>




						<!-- <Card card={lesson} /> -->
					</article>
				{/each}
			{/if}
		</div>
	</div>
</div>



<!-- <div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<div class="grid lg:grid-cols-2 gap-4">
			<div>
				<Title {title} {subtitle} {h2} />
			</div>

			<div class="pl-4" class:border-l-2={search}>
				{#if search}
					<LessonSearchBox />
				{/if}

				{#if tags.length}
					<div class="flex flex-wrap">
						{#each tags as tag}
							<div class="mr-5">
								<Tag text={tag.text} size="text-xs" />
								<a
									href={`/tags/${tag.slug}`}
									class="-ml-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-300"
								>
									{` (${tag.count})`}
								</a>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div> 
	{#if !currentLessons.length}
		No lessons found.
	{:else}
		<ul>
			{#each currentLessons as lesson}
				<li class="py-12">
						<div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
						<div>
							<div class="space-y-5 xl:col-span-3">
								<div class="space-y-6">
									<div>
										<h2 class="text-2xl font-bold leading-8 tracking-tight">
											<a href={`/lesson/${lesson.slug}`} class="text-gray-900 dark:text-gray-100">
												{lesson.title}
											</a>
										</h2>
										<div class="flex flex-wrap">
											{#each lesson.tags as tag}
												<Tag text={tag} />
											{/each}
										</div>
									</div>
									<div class="prose max-w-none text-gray-500 dark:text-gray-400">
										{lesson.summary}
									</div>
								</div>
								{#if more}
									<div class="text-base font-medium leading-6">
										<a
											href={`/lesson/${lesson.slug}`}
											class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											aria-label={`Read "${lesson.title}"`}
										>
											Read more &rarr;
										</a>
									</div>
								{/if}
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div> -->
