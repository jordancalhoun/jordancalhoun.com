<script lang="ts">
  import type { Post } from '$lib/utils/fetchPosts';
  import { ChevronRight } from 'svelte-heros-v2';
  export let post: Post;
</script>

<div>
  <p class="text-gray-400 font-semibold text-xs ">3 days ago</p>
  <p class="text-gray-500 text-base tex-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <a href="#{post.path}" class="text-cyan-500 hover:underline underline-offset-4">
    Read More
    <ChevronRight class="inline text-cyan-500" />
  </a>
</div>
