<script>
	import { config } from '$lib/config';
	import Tag from '$lib/components/Tag.svelte';

	export let lesson;
</script>

<!-- <div class="prose dark:prose-dark"> -->
<div class="prose-lg dark:prose-dark">
	{@html lesson.content}
</div>

<!-- <div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700 xl:grid xl:grid-cols-2 h-full">
	<div class="overflow-y-auto px-4" style="height: 600px;">
		<article>
			<div class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
				<header class="pt-6 xl:pb-6">
					<div class="space-y-1 text-center">
						<div>
							<h1
								class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
							>
								{lesson.title}
							</h1>
						</div>
						<dl class="space-y-10">
							<div>
								<dt class="sr-only">Published on</dt>
								<dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
									<time dateTime={lesson.date}>
										{new Date(lesson.date).toLocaleDateString(config.locale, {
											weekday: 'long',
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</time>
								</dd>
							</div>
						</dl>
					</div>
				</header>
				<div
					class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
					style="grid-template-rows: auto 1fr;"
				>
					<div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
						<div class="prose max-w-none pt-10 pb-8 dark:prose-dark">
							{@html lesson.content}
						</div>
					</div>
					<footer class="">
						<div
							class="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y"
						>
							{#if lesson.tags}
								<div class="py-4 xl:py-8">
									<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
										Tags
									</h2>
									<div class="flex flex-wrap">
										{#each lesson.tags as tag}
											<Tag text={tag} />
										{/each}
									</div>
								</div>
							{/if}
							{#if lesson.next || lesson.prev}
								<div class="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
									{#if lesson.prev}
										<div>
											<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
												Previous Article
											</h2>
											<div
												class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											>
												<a href={`/lesson/${lesson.prev.slug}`}>{lesson.prev.title}</a>
											</div>
										</div>
									{/if}
									{#if lesson.next}
										<div>
											<h2 class="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
												Next Article
											</h2>
											<div
												class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
											>
												<a href={`/lesson/${lesson.next.slug}`}>{lesson.next.title}</a>
											</div>
										</div>
									{/if}
								</div>
							{/if}
						</div>
						<div class="pt-4 xl:pt-8">
							<a
								href="/lesson"
								class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
							>
								&larr; Back to lessons
							</a>
						</div>
					</footer>
				</div>
			</div>
		</article>
	</div>
</div> -->
