<script>
    import { Bars2 } from 'svelte-heros-v2';
    import Navigation from '$lib/Navigation.svelte'

    let showNav = false;
    const showHideNavigtion = () => {
        showNav = !showNav
    }
</script>

<header>
    <div class="p-3 bg-black text-white font-bold">
        <span class="text-3xl">
            JORDAN CALHOUN
        </span>
        
        <button class="float-right h-9 w-auto bg-violet-600 p-2 hover:bg-violet-800" on:click={showHideNavigtion}>
            <Bars2 class="text-white w-full h-full"/>
        </button>
    </div>
    <Navigation isShowing={showNav} />

 
        
</header>
