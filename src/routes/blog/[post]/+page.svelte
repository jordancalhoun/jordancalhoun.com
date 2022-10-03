<script lang="ts">
  import { generateFriendlyDate } from '$lib/utils/date';
  import type { PageData } from './$types';

  export let data: PageData;

  const { title, date, updated, categories, coverImage, coverWidth, coverHeight, excerpt } =
    data.meta;

  const friendlyDate = generateFriendlyDate(date, true);
</script>

<svelte:head>
  <!-- TODO: Be sure to add your image files and un-comment the lines below, update URL -->
  <title>{title}</title>
  <meta data-key="description" name="description" content={excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta name="twitter:description" content={excerpt} />
  <meta property="og:image" content="http//localhost:5173/images/blog/{coverImage}" />
  <meta property="og:image:width" content={coverWidth} />
  <meta property="og:image:height" content={coverHeight} />
  <meta name="twitter:image" content="http//localhost:5173/images/blog/{coverImage}" />
</svelte:head>

<article class="mx-auto max-w-4xl md:my-10 md:px-10 prose prose-neutral">
  <img
    src="/images/blog/{coverImage}"
    alt=""
    style="aspect-ratio: {coverWidth} / {coverHeight};"
    class="
      md:my-9
      md:rounded-lg
      shadow-md
      md:hidden
    "
  />
  <h1 class="text-center text-gray-800 font-semibold text-4xl mb-5">{title}</h1>
  <p class="text-center">
    <span class="text-sm text-gray-400">{friendlyDate}</span>
    {#if updated}
      <p class="text-sm text-gray-400">Updated: {updated}</p>
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
      my-9
      md:rounded-lg
      shadow-md
      hidden
      md:block
    "
  />
  <div class="
    px-7
    md:px-0
    first-line:uppercase
    first-line:tracking-widest
    first-letter:text-7xl
    first-letter:font-bold
    first-letter:mr-3
    first-letter:float-left
    first-line:font-serif">
    {@html data.PostContent}
  </div>
</article>
