<script lang="ts">
  import ActivePageIndicator from "$lib/components/ActivePageIndicator.svelte";
  export let href: string;
  export let currentPath: string;
  export let linkText: string;

  let parsedPath: any;
  $: parsedPath = "/" + currentPath.split("/")[1]

</script>

<a href={href}
    class="
      mx-3
      first:ml-0
      last:mr-0
      text-white
    "
>
    {linkText}
    <ActivePageIndicator active={"/" + currentPath.split("/")[1] === href} />
</a>

<style>
  a:hover {
    color: #FF3C00;
  }
</style>