<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Lessons from '$lib/components/Lessons.svelte';

	export let data;
	const lessons = data.lessons;
	const tags = data.tags;
</script>

<Head title="Lesson" />

<Lessons title="All Lessons" {lessons} {tags} />
