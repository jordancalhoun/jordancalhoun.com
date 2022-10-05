<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/header/Header.svelte';
  import { fade } from 'svelte/transition';
  import '../app.scss';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<!-- #TODO: Importing Inter font from remote, is this the best solution? -->
<svelte:head>
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<Header />

{#key data.currentRoute}
  <main
    in:fade={{ duration: 150, delay: 150 }}
    out:fade={{ duration: 150 }}
    class="mx-auto selection:bg-pink-300 selection:text-pink-900"
  >
    <slot />
  </main>
{/key}

<Footer />
