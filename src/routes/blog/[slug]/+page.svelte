<script>

    export let data;
    const { title, date, Content, categories } = data

</script>
{#if categories.length}
    <aside>
        <h2>Posted in:</h2>
        <ul>
            {#each categories as category}
                <a href="/blog/category/{category}" class="hover:text-violet-500 font-bold">
                    <li>{category}</li>
                </a>
            {/each}
        </ul>
    </aside>
{/if}

<article class="prose prose-img:rounded-lg m-5 lg:prose-xl mx-auto mt-10 px-3">
    
    <h1>{ title }</h1>
    <p>Published: {date}</p>
    <Content />
</article>


<style type="scss">
    :where(h2, h3, h4, h5, h6) {
        .icon-link {
            position: relative;
            
            &::before {
                content: '#';
                position: absolute;
                left: -1ch;
                top: 0;
                line-height: 1;
                opacity: 1;
                text-decoration: underline;
            }
        }

        &:hover .icon-link::before {
            opacity: 1;
        }
    }
</style>