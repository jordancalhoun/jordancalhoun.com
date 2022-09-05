<script lang="ts" >
    import { ArrowRightCircle } from "svelte-heros-v2";
    import { fade  } from 'svelte/transition';
    import { quintIn } from "svelte/easing";

</script>
<a href="/">
    <!-- TODO: Why isn't this transition working? -->
    <div transition:fade class="
        bg-gray-100
        rounded
        overflow-hidden
        pb-3
        shadow-none
        hover:shadow-2xl
        "
        style="transition: box-shadow .2s"
        >
        <img src="/images/temp/blog-post-header.png" alt="Place holder for blog posts"/>
        <div class="mt-8 mx-3">
            <h2 class="text-3xl font-bold">Sveltekit vs Next.js</h2>
            <span class="
                px-2 py-1 
                bg-yellow-200 
                rounded-full 
                text-yellow-500 
                font-bold 
                text-xs">
                PROGRAMING
            </span>
            <!-- <span class="
                px-2 py-1 
                bg-orange-200 
                rounded-full 
                text-orange-500 
                font-bold 
                text-xs">
                SVELTE
            </span> -->

            <p class="text-gray-700 text-lg my-8">
                Within the past few years, the usage of the SaaS paradigm, which is the business model typically used by open source technologies...
            </p>

            <div class="flex items-center justify-between">
                <span class="justify-start text-sm text-gray-400">3 days ago.</span>

                <span class="
                    px-2 py-1 
                    bg-gray-200 
                    rounded-full 
                    text-gray-500 
                    font-bold 
                    text-xs">
                    6 MIN READ
                </span>
            </div>
        </div>
    </div>
</a>