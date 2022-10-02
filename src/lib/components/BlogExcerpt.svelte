<script lang="ts">
  import { generateFriendlyDate } from '$lib/utils/date';
  import type { Post } from '$lib/utils/fetchPosts';
  export let post: Post;
  const date = generateFriendlyDate(post.meta.date);

</script>

<div class="first:mb-10">
  <p class="text-neutral-400 font-semibold text-xs mb-3">{date}</p>
  <h2 class="font-semibold text-xl text-neutral-700 hover:text-neutral-900 mb-3">
    <a href="{post.path}">
      {post.meta.title}
    </a>
  </h2>
  <p class="text-neutral-500 text-base tex-sm">
    {post.meta.excerpt}
  </p>
  <a href="{post.path}" class="
    text-pink-600
    font-medium
    mt-2
    inline-block
    text-sm
    after:content-['_&#8250;']
    hover:text-pink-900
    "
  >
    Read More
  </a>
</div>
