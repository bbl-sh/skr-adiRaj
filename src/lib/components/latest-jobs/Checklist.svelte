<script>
	import { CheckCircle2 } from 'lucide-svelte';
	let { items, isNested = false } = $props();
</script>

<ul class="space-y-3">
	{#each items as item}
		<li class="flex items-start">
			<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
			<div class="ml-3">
				{#if isNested}
					<h4 class="font-semibold text-slate-700">{item.title}</h4>
					<p class="text-slate-600">{item.description}</p>
				{:else}
					<span class="text-slate-600">{item}</span>
				{/if}
			</div>
		</li>
	{/each}
</ul>
