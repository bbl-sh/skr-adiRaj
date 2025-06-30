<script>
	// Svelte 5: Define props with the $props rune.
	let { title, body, image } = $props();
</script>

<div
	class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1"
>
	<img class="h-32 w-full object-cover" src={image} alt={title} />
	<div class="p-4">
		<h3 class="text-md font-semibold text-gray-800">{title}</h3>
		<p class="text-sm text-gray-500">{body}</p>
	</div>
</div>
