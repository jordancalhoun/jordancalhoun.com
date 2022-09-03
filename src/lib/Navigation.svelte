<script lang="ts">
    export let isShowing: boolean;

</script>
{#if isShowing}
    <div class="bg-white rounded-lg shadow-lg m-2 p-2">
        <ul class="font-bold text-xl">
            <li>Blog</li>
            <li>Mortise & Co.</li>
            <li>Code Carton</li>
            <li>Contact</li>
        </ul>
    </div>
{/if}
