<script lang="ts">
  import GoalCard from '$lib/components/GoalCard.svelte';

  let goals = [
    {
      title: 'Publish 12 Blog Posts',
      date: 'Dec 31, 2023',
      ontrack: true,
    },
    {
      title: 'Release Fractionally 1.0',
      date: 'Mar 31, 2023',
      ontrack: true,
    },
    {
      title: 'Read 6 Books',
      date: 'Dec 31, 2023',
      ontrack: true,
    },
    {
      title: 'Sell 3 Pieces of Furniture',
      date: 'Dec 31, 2023',
      ontrack: false,
    },
    {
      title: 'Publish 24 YouTube Videos',
      date: 'Dec 31, 2023',
      ontrack: true,
    },
    {
      title: 'Bike 1,500 Miles',
      date: 'Dec 31, 2023',
      ontrack: false,
    },
  ];
</script>

<svelte:head>
  <title>Active Goals of Jordan Calhoun</title>
</svelte:head>

<h1 class="text-center text-neutral-800 font-semibold text-4xl my-5 p-2">Active Goals</h1>

<div class="px-2 md:px-7 my-2 md:my-7 mx-auto max-w-4xl">
  {#each goals as goal}
    <GoalCard {goal} />
  {/each}
</div>
