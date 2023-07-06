<script>
	import Card from '$lib/components/Card.svelte';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const lessons = data.lessons;
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="Lessons" subtitle="Learn to code with Dummy Daniel" />
	</div>
	<div class="container py-12">
		<div class="-m-4 flex flex-wrap">
			{#if !lessons.length}
				No lessons found.
			{:else}
				{#each lessons as lesson}
					<Card card={lesson} />
				{/each}
			{/if}
		</div>
	</div>
</div>
