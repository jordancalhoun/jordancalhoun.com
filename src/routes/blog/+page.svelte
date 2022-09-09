<script lang="ts">
    export let data: any;
</script>
<div class="mx-auto max-w-5xl p-10">        
    <ul class="mt-10">
        {#each data.posts as post}
        <li class="p-5 font-bold ">
            <h2 class="text-2xl">
            <a href={post.path} class="hover:text-violet-600">
                {post.meta.title}
            </a>
        </h2>
        <span class="text-gray-400">Published {post.meta.date}</span>
    </li>
    {/each}
    </ul>
</div>