<script lang="ts">
    import { Popover, PopoverButton, PopoverGroup } from "@rgossiaux/svelte-headlessui";
    import { Bars3 } from 'svelte-heros-v2';
    import NavPopoverPanel from "./NavPopoverPanel.svelte";
    import { page } from '$app/stores'
    import NavLink from "./NavLink.svelte";

    const navLinks: navLink[] = [
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Projects",
            href: "/projects"
        },
        {
            name: "Playlists",
            href: "/playlists"
        },
        {
            name: "Contact",
            href: "/contact"
        },
    ]

    let path: string;
    $: path = $page.url.pathname;

</script>

<Popover class="relative bg-neutral-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <!-- Logo Div -->
            <div class="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span class="text-white font-bold text-3xl block pt-1 hover:text-pink-600 dark:text-gray-100">JORDAN CALHOUN</span>
                </a>
            </div>

            <!-- Mobile navigation toggle-->
            <div class="md:hidden">
                <PopoverButton class="
                    inline-flex
                    items-center
                    justify-end
                    rounded-sm
                    bg-indigo-600 p-2
                    text-white
                    hover:bg-indigo-700
                    hover:text-gray-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                ">
                    <span class="sr-only">Open menu</span>
                    <Bars3 class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
            </div>

            <!-- Mobile Navigation Popover -->
            <NavPopoverPanel />
            <div class="md:flex hidden font-lg">
                {#each navLinks as link}
                    <NavLink currentPath={path} href="{link.href}" linkText={link.name} />
                {/each}

            </div>
        </div>
    </div>
</Popover>

