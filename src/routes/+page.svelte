<script lang="ts">
	import AboutMe from '$lib/components/AboutMe.svelte';
	import BlogExcerpt from '$lib/components/BlogExcerpt.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const title = 'Jordan Calhoun';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<AboutMe />

<div class="p-7 lg:flex md:px-20 mx-auto max-w-7xl">
	<div class="lg:mt-16 lg:mr-20">
		{#each data.posts as post}
			<BlogExcerpt {post} />
		{/each}
		<hr class="m-10" />
		<h3 class="text-neutral-800 text-lg font-semibold mt-5 mx-auto text-center">
			Join the Newsletter
		</h3>
		<div class="mx-auto">
			<script
				async
				data-uid="7518f1ca76"
				src="https://exciting-author-7209.ck.page/7518f1ca76/index.js"
			></script>
		</div>
	</div>
	<div>
		<div class="mt-0 lg:mr-20 lg:w-96">
			<a
				href="http://codecarton.com/one16"
				target="_blank"
				rel="noreferrer"
				class="mt-10 inline-block"
			>
				<img src="/images/One16.png" alt="One16 - Fraction Calculator now on the app store" />
			</a>
			<h3 class="text-neutral-800 text-lg font-semibold mb-3">Recommendation of the Month</h3>

			<iframe
				allow="autoplay *; encrypted-media *;"
				frameborder="0"
				height="450"
				title="Apple Music Recommendation of the Month"
				style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
				src="https://embed.music.apple.com/us/album/i-i/1470962625"
			/>
		</div>
	</div>
</div>

<div class="md:p-10 mx-auto max-w-4xl" />
