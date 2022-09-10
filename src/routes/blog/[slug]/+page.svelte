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
        excerpt,
        Content
    } = data

</script>
{#if categories.length}
    <aside class="p-10 float-left text-right">
        <h2 class="dark:text-gray-500 italic">Posted in:</h2>
        <ul>
            {#each categories as category}
                    <li class="my-5">
                        <a href="/blog/category/{category}" class="
                            font-bold
                            px-4
                            py-2
                            rounded
                            dark:hover:bg-violet-500
                            dark:text-gray-50
                            dark:bg-violet-700
                        ">
                            {category}
                        </a>
                    </li>
            {/each}
        </ul>
    </aside>
{/if}

<article class="dark:prose-invert prose prose-img:rounded-lg m-5 lg:prose-xl mx-auto mt-10 px-3">
    {#if coverImage}
        <img src="/images/blog/{coverImage}" alt="Blog Cover"/>
    {/if}

    <p class="text-sm text-gray-400">Published: {date}</p>

    {#if updated}
        <p class="text-sm text-gray-400">Updated: {updated}</p>
    {/if}

    <h1>{ title }</h1>

    <Content />
</article>