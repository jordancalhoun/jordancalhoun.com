<script lang="ts">
    import type { ComponentType } from "svelte";

    
    // #TODO: Create a type for the data object that is passed.
    type Data = {
        title: string;
        date: string;
        Content: ComponentType;
    }
    export let data: Data;
    const { title, date, Content } = data

</script>

<article class="prose prose-img:rounded-lg m-5 lg:prose-xl mx-auto mt-10">
    <h1>{ title }</h1>
    <p>Published: {date}</p>
    <Content />
</article>