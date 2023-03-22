<script lang="ts">
	export let goal: Goal;
</script>

<div
	class="goal items-center md:flex md:justify-between rounded-md border-gray-200 border-2 p-8 my-7"
>
	<div>
		<span class="text-neutral-400 font-semibold text-xs mb-3">{goal.date}</span>
		<h3 class="font-semibold text-xl text-neutral-700 hover:text-neutral-900 mb-3">
			{goal.title}
		</h3>
	</div>
	<div>
		{#if goal.ontrack === true && goal.completed === false}
			<div
				class="
            uppercase
            px-7
            py-2
            rounded-full
            text-md
            font-bold
            text-green-400
            bg-green-50
            shadow-green-800
            ring-green-400
            transition-all
            w-full
            "
			>
				On Track
			</div>
		{:else if goal.completed === true}
			<div
				class="
        uppercase
        px-7
        py-2
        rounded-full
        text-md
        font-bold
        text-green-400
        bg-green-50
        shadow-green-800
        ring-green-400
        transition-all
        w-full
        "
			>
				Completed
			</div>
		{:else}
			<div
				class="
          uppercase
          px-7
          py-2
          rounded-full
          text-md
          font-bold
          text-yellow-400
          bg-yellow-50
          shadow-yellow-800
          ring-yellow-400
          transition-all
          w-full
          "
			>
				Delayed
			</div>
		{/if}
	</div>
</div>
