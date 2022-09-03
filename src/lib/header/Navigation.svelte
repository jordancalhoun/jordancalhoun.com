<script lang="ts">
    export let isShowing: boolean;

    type navLink = {
        name: string;
        href: string;
    }

    const navLinks: navLink[] = [
        {
            name: "Blog",
            href: "#"
        },
        {
            name: "Mortise & Co.",
            href: "#"
        },
        {
            name: "Code Carton",
            href: "#"
        },
        {
            name: "Contact",
            href: "#"
        },
    ]
</script>
{#if isShowing}
    <div class="bg-white rounded-lg shadow-lg m-2 p-2">
        <ul class="font-bold text-xl pl-3">
            {#each navLinks as link}
                <a href={link.href}>
                    <li class="py-1">{link.name}</li>
                </a>
            {/each}
        </ul>
    </div>
{/if}
