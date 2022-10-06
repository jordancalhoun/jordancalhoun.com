<script lang="ts">
  import { generateFriendlyDate } from '$lib/utils/date';
  export let post: Post;
</script>

<div
  class="mx-auto md:max-w-5xl lg:max-w-7xl py-12 grid grid-cols-[350px_minmax(0px,_1fr)_0px] border-b"
>
  <div class="self-center">
    <a href={post.postPath} alt="{post.meta.title} article">
      <img
        src="images/blog/{post.meta.coverImage}"
        alt="{post.meta.title} Cover"
        width="350px"
        style="aspect-ratio: {post.meta.coverWidth} / {post.meta.coverHeight};transition: .2s;"
        class="rounded-lg border border-neutral-200 hover:scale-95 transition-all hover:shadow"
      />
    </a>
  </div>
  <div class="text-left pl-6">
    <p class="text-neutral-400 font-semibold text-xs mb-3">
      {generateFriendlyDate(post.meta.date)}
    </p>

    <a href={post.postPath} alt="{post.meta.title} article">
      <h2 class="text-neutral-800 font-semibold text-xl mb-3 hover:text-pink-600">
        {post.meta.title}
      </h2>
    </a>

    <p class="text-base text-neutral-500 leading-relaxed">{post.meta.excerpt}</p>

    <a
      href={post.postPath}
      class="
        text-pink-600
        font-medium
        mt-3
        inline-block
        text-sm
        hover:text-pink-900
        "
      alt="{post.meta.title} article"
    >
      Read More &#8250;
    </a>
  </div>
</div>
