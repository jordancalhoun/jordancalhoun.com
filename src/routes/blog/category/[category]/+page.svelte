<script lang="ts">
  import type { PageData } from './$types';
  import VerticalBlogCard from '$lib/components/blog/VerticalBlogCard.svelte';
  import MortiseCode from '$lib/components/blog/MortiseCode.svelte';
  export let data: PageData;
</script>

<MortiseCode />

<div class="text-center text-sm text-neutral-400 my-5">
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
