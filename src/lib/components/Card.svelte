<script>
	import Tag from "./Tag.svelte";

	export let card;
</script>

<div class="md p-4 w-auto" style="max-width: '544px'">
	<div
		class={`${
			card.image && 'h-full'
		}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
	>
		{#if card.image}
			{#if card.href}
				<a
					href={`/lesson/${card.slug}`}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`Link to ${card.title}`}
				>
					<img
						alt={card.title}
						src={card.image}
						class="object-cover object-center aspect-video w-full"
					/>
				</a>
			{:else}
				<img
					alt={card.title}
					src={card.image}
					class="object-cover object-center aspect-video w-full"
				/>
			{/if}
		{/if}
		<div class="p-6">
			<h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
				{#if card.href}
					<a href={`/lesson/${card.slug}`} aria-label={`Link to ${card.title}`}>
						{card.title}
					</a>
				{:else}
					{card.title}
				{/if}
			</h2>
			<div class="flex flex-wrap pb-2">
				{#each card.tags as tag}
					<Tag text={tag} />
				{/each}
			</div>
			<p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{card.summary}</p>
			{#if card.href}
				<a
					href={`/lesson/${card.slug}`}
					target="_blank"
					rel="noopener noreferrer"
					class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
					aria-label={`Link to ${card.title}`}
				>
					Get Started &rarr;
				</a>
			{/if}
		</div>
	</div>
</div>
