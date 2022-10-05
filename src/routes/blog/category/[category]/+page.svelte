<script lang="ts">
  import type { PageData } from './$types';
  import VerticalBlogCard from '$lib/components/blog/VerticalBlogCard.svelte';
  import { XCircle } from 'svelte-heros-v2';
  export let data: PageData;
</script>

<!-- TODO: Move this into its own component -->
<div class="mx-auto p-10">
  <h1 class="text-center">
    <img src="/images/mortise-and-code-logo.svg" alt="Mortise x Code blog logo" class="mx-auto" />
    <span class="text-neutral-500">a productivity, programming, and personal challenges blog</span>
  </h1>
</div>

<div class="text-center text-sm text-neutral-400">
  Filtering by:
  <a
    href="/blog"
    alt="Blog Index"
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
    hover:text-neutral-700
    uppercase"
  >
    {data.category} &#x2715
  </a>
</div>

<div
  class="
    mx-auto
    md:max-w-5xl
    lg:max-w-7xl
    grid
    lg:grid-cols-3
    md:grid-cols-2
    p-5
    justify-items-center"
>
  {#each data.posts as post}
    <VerticalBlogCard {post} />
  {/each}
</div>
