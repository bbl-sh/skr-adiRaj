<script>
	let { label, value } = $props();
</script>

<div class="flex flex-col md:flex-row">
	<div class="w-full font-semibold text-slate-600 md:w-1/3">{label}</div>
	<div class="mt-1 w-full text-slate-800 md:mt-0 md:w-2/3">{value}</div>
</div>
