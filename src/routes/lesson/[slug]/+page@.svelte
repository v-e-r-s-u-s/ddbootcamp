<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Lesson from '$lib/components/Lesson.svelte';
	import Comments from '$lib/components/comment/index.svelte';

	import '../../../app.css';

	export let data;
	const lesson = data.lesson;
	const author = data.author;
</script>

<Head title={lesson.title} />

<Lesson {lesson} {author} />