<script lang="ts">
  import AboutMe from '$lib/components/AboutMe.svelte';
  import BlogExcerpt from '$lib/components/BlogExcerpt.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<AboutMe />

<div class="flex px-20 mx-auto max-w-7xl">
  <div class="mt-16 mr-20">
    {#each data.posts as post}
      <BlogExcerpt {post} />
    {/each}
  </div>
  <div>
    <div class="mt-20 mr-20 w-96">
      <h3 class="text-neutral-800 text-lg font-semibold">Recommendation of the Month</h3>
      <iframe
        title="Album of the Month Spotify"
        style="border-radius:8px"
        src="https://open.spotify.com/embed/album/6f7bWTe84LiTIlUNkRimVG?utm_source=generator"
        width="100%"
        height="80"
        frameBorder="0"
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>

      <h3 class="text-neutral-800 text-lg font-semibold mt-5">My Playlist</h3>
      <iframe
        title="Spotify Playlist"
        style="border-radius:8px"
        src="https://open.spotify.com/embed/playlist/7Bt8uzRoIt0rfMbysXaCQs"
        width="100%"
        height="380px"
        frameBorder="0"
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
    </div>
  </div>
</div>
