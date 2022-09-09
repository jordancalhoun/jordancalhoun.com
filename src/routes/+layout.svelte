<script>
    import Header from '$lib/header/Header.svelte';
    import { fade } from 'svelte/transition'
    import "../app.scss";

    export let data;
</script>

<!-- #TODO: Importing Inter font from remote, is this the best soltuion? -->
<svelte:head>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
</svelte:head>

<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }} class="mx-auto max-w-7xl">
    <slot />
  </main>
{/key}