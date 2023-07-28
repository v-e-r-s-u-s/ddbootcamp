<script>
	import Comments from '$lib/components/comment/index.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
	import { navLinks } from '$lib/config';
  	import Exercise from './Exercise.svelte';
  	import Instructions from './Instructions.svelte';

	export let lesson;
</script>

<div class="h-screen flex">
	<!-- Scrolling instructions window -->
	<div class="flex-1 flex overflow-hidden w-1/2 pl-4 pr-2">
		<div class="flex-1 overflow-y-scroll">

			<div class="pr-2">
				<div class="flex items-center text-base leading-5">
					<div class="hidden sm:block">
						{#each navLinks as link}
							<a href={link.href} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
								>{link.title}</a
							>
						{/each}
					</div>
					<ThemeSwitch />
					<MobileMenu />
				</div>

				<Instructions lesson={lesson} />
			</div>
		</div>
	</div>
	<!-- Fixed exercise window -->
	<div class="w-1/2">
		<Exercise url="https://stackblitz.com/edit/dd10-exercises?embed=1&file=hello-world%2Fhello-world.html" />
	</div>
</div>
<Comments />