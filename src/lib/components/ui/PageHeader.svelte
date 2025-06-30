<script>
	let { title, subtitle } = $props();
</script>

<div class="mb-8">
	<h1 class="text-4xl font-bold text-gray-800">{title}</h1>
	{#if subtitle}
		<p class="mt-2 text-lg text-gray-500">{subtitle}</p>
	{/if}
</div>
