<script lang="ts">
  import AboutMe from '$lib/components/AboutMe.svelte';
  import BlogExcerpt from '$lib/components/BlogExcerpt.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<AboutMe />

<div class="flex">
  {#each data.posts as post}
    <BlogExcerpt {post} />
  {/each}
</div>
