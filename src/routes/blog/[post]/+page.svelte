<script lang="ts">
    import type { PageData } from './$types'

    export let data: PageData;

    const {
        title,
        date,
        updated,
        categories,
        coverImage,
        coverWidth,
        coverHeight,
        excerpt
    } = data.meta

</script>


<svelte:head>
	<!-- TODO: Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<meta property="og:image" content="http//localhost:5173/images/blog/{coverImage}" />
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:image" content="http//localhost:5173/images/blog/{coverImage}" />
</svelte:head>

<article class="dark:prose-invert prose prose-img:rounded-lg m-5 lg:prose-xl mx-auto mt-10 px-3">
    <img
        src="/images/blog/{coverImage}"
        alt=""
        style="aspect-ratio: {coverWidth} / {coverHeight};"
    />

    <p class="text-sm text-gray-400">Published: {date}</p>

    {#if updated}
        <p class="text-sm text-gray-400">Updated: {updated}</p>
    {/if}

    <h1>{ title }</h1>

    {@html data.PostContent}
</article>