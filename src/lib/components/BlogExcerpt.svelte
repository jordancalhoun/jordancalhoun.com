<script lang="ts">
  import { generateFriendlyDate } from '$lib/utils/date';
  export let post: Post;
  const date = generateFriendlyDate(post.meta.date);
</script>

<div class="first:mb-10">
  <p class="text-neutral-400 font-semibold text-xs mb-3">{date}</p>
  <h2 class="font-semibold text-xl text-neutral-700 hover:text-neutral-900 mb-3">
    <a href={post.postPath}>
      {post.meta.title}
    </a>
  </h2>
  <p class="text-neutral-500 text-base tex-sm">
    {post.meta.excerpt}
  </p>
  <a
    href={post.postPath}
    class="
    text-pink-600
    font-medium
    mt-2
    inline-block
    text-sm
    hover:text-pink-900
    "
  >
    Read More &#8250;
  </a>
</div>
