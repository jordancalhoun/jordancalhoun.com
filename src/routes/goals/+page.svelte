<script lang="ts">
	import GoalCard from '$lib/components/GoalCard.svelte';

	let goals: Goal[] = [
		{
			title: 'Publish 12 Blog Posts',
			date: 'Dec 31, 2023',
			ontrack: true,
			completed: false
		},
		{
			title: 'Release One16 - Fraction Calculator 1.0',
			date: 'Mar 31, 2023',
			ontrack: true,
			completed: true
		},
		{
			title: 'Read 6 Books',
			date: 'Dec 31, 2023',
			ontrack: true,
			completed: true
		},
		{
			title: 'Sell 3 Pieces of Furniture',
			date: 'Dec 31, 2023',
			ontrack: false,
			completed: false
		},
		{
			title: 'Publish 24 YouTube Videos',
			date: 'Dec 31, 2023',
			ontrack: true,
			completed: false
		},
		{
			title: 'Hike 1,500 Miles',
			date: 'Dec 31, 2023',
			ontrack: true,
			completed: false
		}
	];
	goals.sort((a, b) => (a.completed === b.completed ? 1 : a.completed ? 0 : -1));
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
