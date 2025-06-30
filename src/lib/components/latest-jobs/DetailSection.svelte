<script>
	let { title } = $props();
</script>

<div class="border-b border-slate-200 py-6">
	<h2 class="mb-4 text-xl font-bold text-slate-800">{title}</h2>
	<div class="space-y-4">
		<slot />
	</div>
</div>
