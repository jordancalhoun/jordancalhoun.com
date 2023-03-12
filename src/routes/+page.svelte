<script lang="ts">
  import AboutMe from '$lib/components/AboutMe.svelte';
  import BlogExcerpt from '$lib/components/BlogExcerpt.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  const title = 'Jordan Calhoun';
</script>

<svelte:head>
  <!-- TODO: Be sure to add your image files and un-comment the lines below, update URL -->
  <title>{title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<AboutMe />

<div class="p-7 lg:flex md:px-20 mx-auto max-w-7xl">
  <div class="lg:mt-16 lg:mr-20">
    {#each data.posts as post}
      <BlogExcerpt {post} />
    {/each}
  </div>
  <div>
    <div class="mt-20 lg:mr-20 lg:w-96">
      <h3 class="text-neutral-800 text-lg font-semibold">Recommendation of the Month</h3>
      <iframe
        title="Album of the Month"
        style="border-radius:12px"
        src="https://open.spotify.com/embed/album/5rJqKtbGfVUH8glGRtPVic?utm_source=generator"
        width="100%"
        height="180px"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />

      <!-- <h3 class="text-neutral-800 text-lg font-semibold mt-5">Featured Playlist</h3>
      <iframe
        title="Spotify Playlist"
        style="border-radius:8px"
        src="https://open.spotify.com/embed/playlist/1JpPlCCsbTwsgYL0asdsWG?utm_source=generator"
        width="100%"
        height="180px"
        frameBorder="0"
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      /> -->
      <h3 class="text-neutral-800 text-lg font-semibold mt-5">Join the Newsletter</h3>
      <script
        async
        data-uid="7518f1ca76"
        src="https://exciting-author-7209.ck.page/7518f1ca76/index.js"
      ></script>
    </div>
  </div>
</div>
