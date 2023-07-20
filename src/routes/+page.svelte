<script>
	import Transition from '$lib/components/layout/Transition.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '../app.css';

	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto">
			<Transition pathname={data?.pathname}>
				<div class="pt-12">
					<h1
						class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
					>
						Welcome to Pied Piper!
					</h1>
					<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
						This is Pied Piper's (un)official blog. Amoung many other things, Pied Piper offers a middle-out
						compression solution making data storage problems smaller. To get the updates, please check this
						site often, or subscribe to our RSS feed.
					</p>
				</div>

				<Blogs title="Latest Posts" h2 {posts} search={false} count={3} />

			</Transition>
		</main>
		<Footer />
	</div>
</div>

<!-- <div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
	>
		Welcome to Pied Piper!
	</h1>
	<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
		This is Pied Piper's (un)official blog. Amoung many other things, Pied Piper offers a middle-out
		compression solution making data storage problems smaller. To get the updates, please check this
		site often, or subscribe to our RSS feed.
	</p>
</div> -->



<!-- <Blogs title="Latest Posts" h2 {posts} search={false} count={3} /> -->

<!-- <script>
	import Transition from '$lib/components/layout/Transition.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '../app.css';

	export let data = {};
</script>

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
	<div class="flex h-screen flex-col justify-between">
		<Header />
		<main class="mb-auto">
			<Transition pathname={data?.pathname}>
				<slot />
			</Transition>
		</main>
		<Footer />
	</div>
</div> -->
