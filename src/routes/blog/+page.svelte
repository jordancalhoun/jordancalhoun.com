<script lang="ts">
  import HorizontalBlogCard from '$lib/components/blog/HorizontalBlogCard.svelte';
  import VerticalBlogCard from '$lib/components/blog/VerticalBlogCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const featuredPosts = data.posts.slice(0, 2);
  const posts = data.posts.slice(2);
</script>

<div class="mx-auto p-10">
  <h1 class="text-center">
    <img src="images/mortise-and-code-logo.svg" alt="Mortise x Code blog logo" class="mx-auto" />
    <span class="text-neutral-500">a productivity, programming, and personal challenges blog</span>
  </h1>
</div>

<div class="m-7 hidden md:block">
  {#each featuredPosts as post}
    <HorizontalBlogCard {post} />
  {/each}
</div>

<div class="m-7 md:hidden">
  {#each featuredPosts as post}
    <VerticalBlogCard {post} />
  {/each}
</div>

<div
  class="mx-auto md:max-w-5xl lg:max-w-7xl mt-12 grid lg:grid-cols-3 md:grid-cols-2 p-5 justify-items-center"
>
  {#each posts as post}
    <VerticalBlogCard {post} />
  {/each}
</div>
