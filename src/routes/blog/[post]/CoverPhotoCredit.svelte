<script lang="ts">
  export let source: string, author: string, authorSource: string;
</script>

<span class="text-neutral-400 text-sm">
  <a
    href={source}
    rel="noreferrer"
    target="_blank"
    class="text-neutral-400 font-semibold no-underline hover:text-neutral-600">Photo</a
  >
  by
  <a
    href={authorSource}
    rel="noreferrer"
    target="_blank"
    class="text-neutral-400 font-semibold no-underline hover:text-neutral-600">{author}</a
  ></span
>
