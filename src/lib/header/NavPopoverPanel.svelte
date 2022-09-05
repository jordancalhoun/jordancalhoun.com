<script lang="ts">
    import { PopoverPanel, PopoverButton } from "@rgossiaux/svelte-headlessui";
    import { slide  } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { Link, XMark } from 'svelte-heros-v2';


    type navLink = {
        name: string;
        href: string;
        src?: string;
    }

    const navLinks: navLink[] = [
        {
            name: "Blog",
            href: "/"
        },
        {
            name: "Mortise & Co.",
            href: "/"
        },
        {
            name: "Code Carton",
            href: "/"
        },
        {
            name: "Contact",
            href: "/"
        },
    ]

    const socialLinks: navLink[] = [
        {
            name: "Github",
            href:"https://github.com/jordancalhoun",
            src: "/images/social-icons/Github.svg"
        },
        {
            name: "Twitter",
            href:"https://twitter.com/jordancalhoun",
            src: "/images/social-icons/Twitter.svg"
        },
        {
            name: "Spotify",
            href:"https://open.spotify.com/user/jordancalhoun?si=6d2a862877bd4334",
            src: "/images/social-icons/Spotify.svg"
        },
        {
            name: "YouTube",
            href:"https://www.youtube.com/channel/UChHHysDsAnjZ_rnzXbwI59A",
            src: "/images/social-icons/YouTube.svg"
        },
        {
            name: "Instagram",
            href:"https://instagram.com/mortiseco",
            src: "/images/social-icons/Instagram.svg"
        },
    ]
</script>

<PopoverPanel class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
    <div class="divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-black ring-opacity-5" transition:slide="{{delay: 100, duration: 300, easing: quintOut }}">
        <div class="px-6 pt-4 pb-5">
            <div class="flex items-center justify-between">
                <a href="/">
                    <span class="font-bold text-md text-black">JORDAN CALHOUN</span>
                </a>
                <div class="-mr-2">
                    <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span class="sr-only">Close menu</span>
                        <XMark class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                </div>
            </div>
           

            <ul class="font-bold text-xls text-black py-5">
                {#each navLinks as link}
                    <a href={link.href} class="hover:text-violet-600 bg-slate-100">
                        <li class="p-2 rounded my-1 text-2xl hover:bg-gray-50">{link.name}</li>
                    </a>
                {/each}
            </ul>
            <div class="border-t-2 border-t-slate-200 pt-5">
                <ul >
                    {#each socialLinks as link}
                    <a href={link.href}>
                        <li class="w-auto h-auto inline-block p-3 rounded hover:bg-gray-100">
                            <!-- TODO: Update links to be svg componenents with hover state -->
                            <img src={link.src} />
                        </li>
                    </a>
                    {/each}
                </ul>
            </div>
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