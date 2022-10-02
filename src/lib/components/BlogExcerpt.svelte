<script lang="ts">
  import type { Post } from '$lib/utils/fetchPosts';
  import { ChevronRight } from 'svelte-heros-v2';
  export let post: Post;
  const date = new Date(post.meta.date).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"})
  var seconds = Math.floor((new Date() - new Date(post.meta.date)) / 1000);
  const interval = seconds / 86400;
  const fancyDate = Math.floor(interval) + " days ago";
</script>

<div class="first:mb-10">
  <p class="text-gray-400 font-semibold text-xs mb-3">{fancyDate}</p>
  <h2 class="font-semibold text-xl text-gray-700 hover:underline mb-3">
    <a href="{post.path}">
      {post.meta.title}
    </a>
  </h2>
  <p class="text-gray-500 text-base tex-sm">
    {post.meta.excerpt}
  </p>
  <a href="{post.path}" class="text-cyan-500 font-medium hover:underline underline-offset-4 mt-2 inline-block text-sm">
    Read More
    <ChevronRight class="inline text-cyan-500 h-4 w-4 -ml-1" />
  </a>
</div>
