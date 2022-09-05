<script>
    import { Popover, PopoverButton, PopoverGroup } from "@rgossiaux/svelte-headlessui";
    import { Bars3 } from 'svelte-heros-v2';
    import NavPopoverPanel from "./NavPopoverPanel.svelte";
    
</script>

<Popover class="relative bg-black">
    <div class="mx-auto max-w-7xl px-4 sm:px-6"> 
        <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <!-- Logo Div -->
            <div class="flex justify-start lg:w-0 lg:flex-1">
                    <a href="/">
                        <span class="text-white font-bold text-3xl block pt-1 hover:text-pink-600">JORDAN CALHOUN</span>
                      </a>
            </div>
            
            <!-- Mobile navigation toggle-->
            <div class="md:hidden">
                <PopoverButton class="
                inline-flex items-center justify-center rounded-sm bg-indigo-600 p-2 text-white hover:bg-indigo-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
                ">
                    <span class="sr-only">Open menu</span>
                    <Bars3 class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
            </div>

            <NavPopoverPanel />
            
        </div>
    </div>
</Popover>