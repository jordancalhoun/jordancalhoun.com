<script lang="ts">
  import { generateFriendlyDate } from '$lib/utils/date';
  import type { PageData } from './$types';
  export let data: PageData;
  const featuredPosts = data.posts.slice(0, 2);
  const posts = data.posts.slice(2);
</script>

<div class="mx-auto max-w-5xl p-10">
  <h1 class="text-center">
    <img src="images/mortise-and-code-logo.svg" alt="Mortise x Code blog logo" class="mx-auto" />
    <span class="text-neutral-500">a productivity, programming, and personal challenges blog</span>
  </h1>
</div>

{#each featuredPosts as fp}
  <div class="mx-auto max-w-5xl py-12 grid grid-cols-[350px_minmax(0px,_1fr)_0px] border-b">
    <div class="self-center">
      <a href={fp.postPath} alt="{fp.meta.title} article">
        <img
          src="images/blog/{fp.meta.coverImage}"
          alt="{fp.meta.title} Cover"
          width="350px"
          style="aspect-ratio: {fp.meta.coverWidth} / {fp.meta.coverHeight};"
          class="rounded-lg border border-neutral-200"
        />
      </a>
    </div>
    <div class="text-left pl-6">
      <p class="text-neutral-400 font-semibold text-xs mb-3">
        {generateFriendlyDate(fp.meta.date)}
      </p>

      <a href={fp.postPath} alt="{fp.meta.title} article">
        <h2 class="text-neutral-800 font-semibold text-xl mb-3 hover:text-pink-600">
          {fp.meta.title}
        </h2>
      </a>

      <p class="text-base text-neutral-500 leading-relaxed">{fp.meta.excerpt}</p>

      <a
        href={fp.postPath}
        class="
        text-pink-600
        font-medium
        mt-3
        inline-block
        text-sm
        hover:text-pink-900
        "
        alt="{fp.meta.title} article"
      >
        Read More &#8250;
      </a>
    </div>
  </div>
{/each}

<!-- Temp display -->
<div class="mx-auto max-w-5xl p-10">
  <ul>
    {#each posts as p}
      <li class="p-5 font-bold ">
        <h2 class="text-2xl">
          <a href={p.postPath} class="hover:text-violet-600">
            {p.meta.title}
          </a>
        </h2>
        <span class="text-gray-400">Published {p.meta.date}</span>
      </li>
    {/each}
  </ul>
</div>
