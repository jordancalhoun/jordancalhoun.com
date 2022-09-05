<script>
    import Header from '$lib/header/Header.svelte';

    import "../app.scss";
</script>

<!-- #TODO: Importing Inter font from remote, is this the best soltuion? -->
<svelte:head>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
</svelte:head>

<Header />

<div class="mx-auto max-w-7xl">
    <slot />
</div>