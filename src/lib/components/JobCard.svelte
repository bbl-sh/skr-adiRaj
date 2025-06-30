<script>
	// Svelte 5: Use the $props rune to declare component properties.
	let { title, department, icon } = $props();
</script>

<div
	class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1"
>
	<div class="flex items-center p-4">
		<div class="mr-4 rounded-lg bg-blue-100 p-3">
			{@render icon({ class: 'h-6 w-6 text-blue-600' })}
		</div>
		<div>
			<h3 class="text-md font-semibold text-gray-800">{title}</h3>
			<p class="text-sm text-gray-500">{department}</p>
		</div>
	</div>
</div>
