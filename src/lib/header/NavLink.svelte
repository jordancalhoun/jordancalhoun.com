<script lang="ts">
  import ActivePageIndicator from '$lib/components/ActivePageIndicator.svelte';
  export let href: string;
  export let currentPath: string;
  export let linkText: string;

  let parsedPath: any;
  $: parsedPath = '/' + currentPath.split('/')[1];
</script>

<a
  {href}
  class="
      mx-3
      first:ml-0
      last:mr-0
      text-white
      hover:text-pink-500
    "
>
  {linkText}
  <ActivePageIndicator active={parsedPath === href} />
</a>
