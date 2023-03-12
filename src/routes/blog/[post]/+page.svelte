<script lang="ts">
	import CoverPhotoCredit from './CoverPhotoCredit.svelte';

	import { generateFriendlyDate } from '$lib/utils/date';
	import type { PageData } from './$types';
	import Newsletter from '$lib/components/Newsletter.svelte';

	export let data: PageData;

	const {
		title,
		date,
		updated,
		categories,
		coverImage,
		coverWidth,
		coverHeight,
		excerpt,
		coverPhotoCredited
	} = data.meta;

	const { coverAuthor, coverAuthorSource, coverSource } = data.meta;

	const friendlyDate = generateFriendlyDate(date);
	const friendlyUpdate = updated && generateFriendlyDate(updated);
</script>

<svelte:head>
	<title>{title} by Jordan Calhoun</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content="https://jordancalhoun.com/images/blog/{coverImage}" />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:image" content="https://jordancalhoun.com/images/blog/{coverImage}" />
</svelte:head>

<!-- TODO: Implement Share Actions -->
<article class="mx-auto max-w-4xl md:my-10 md:px-10 prose prose-neutral">
	<img
		src="/images/blog/{coverImage}"
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		class="
      shadow-md
      md:hidden
      mb-0
    "
	/>
	<div class="md:hidden mb-5 pl-1">
		{#if coverPhotoCredited}
			<CoverPhotoCredit
				author={coverAuthor}
				authorSource={coverAuthorSource}
				source={coverSource}
			/>
		{/if}
	</div>

	<h1 class="text-center text-neutral-800 font-semibold text-4xl mb-5 p-2">{title}</h1>
	<p class="text-center">
		<span class="text-sm text-neutral-400">Posted: {friendlyDate}</span>
		{#if friendlyUpdate}
			<span class="text-sm text-neutral-400"> - Last updated: {friendlyUpdate}</span>
		{/if}
		{#each categories as category}
			<a
				href="/blog/category/{category}"
				class="
              px-2
              py-1
              mx-2
              bg-neutral-100
              rounded
              text-neutral-500
              no-underline
              text-xs
              font-bold
              hover:bg-neutral-300
              hover:text-neutral-700"
			>
				{category.toUpperCase()}
			</a>
		{/each}
	</p>
	<img
		src="/images/blog/{coverImage}"
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		class="
      mt-9
      md:rounded-lg
      shadow-md
      hidden
      md:block
      border
      border-neutral-100
      mb-0
    "
	/>
	<div class="hidden md:block">
		{#if coverPhotoCredited}
			<CoverPhotoCredit
				author={coverAuthor}
				authorSource={coverAuthorSource}
				source={coverSource}
			/>
		{/if}
	</div>

	<div
		class="
    px-7
    md:px-0
    prose-img:rounded-lg
    first-line:uppercase
    first-line:tracking-widest
    first-letter:text-7xl
    first-letter:font-bold
    first-letter:mr-3
    first-letter:float-left
    first-line:font-serif"
	>
		{@html data.PostContent}
	</div>
	<div class="md:p-10 mx-auto max-w-4xl">
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
</article>
