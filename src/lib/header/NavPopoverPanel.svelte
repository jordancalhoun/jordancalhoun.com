<script lang="ts">
    import { PopoverPanel } from "@rgossiaux/svelte-headlessui";
    import { fade, slide  } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';

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

<PopoverPanel class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
    <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5" transition:slide="{{delay: 250, duration: 300, easing: quintOut }}">
        <div class="p-6">
            <div class="flex items-center justify-between">
                <a href="/">
                    <span class="font-bold text-2xl text-black">JORDAN CAHOUN</span>
                </a>
            </div>

            <ul class="font-bold text-xls text-black">
                {#each navLinks as link}
                    <a href={link.href}>
                        <li class="py-1">{link.name}</li>
                    </a>
                {/each}
            </ul>
        </div>
    </div>
</PopoverPanel>



<!-- 
enter="duration-200 ease-out"
enterFrom="opacity-0 scale-95"
enterTo="opacity-100 scale-100"
leave="duration-100 ease-in"
leaveFrom="opacity-100 scale-100"
leaveTo="opacity-0 scale-95"
 -->