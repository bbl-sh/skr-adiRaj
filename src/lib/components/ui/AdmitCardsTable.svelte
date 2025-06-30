<script>
	let { admitCards } = $props();
</script>

<div class="rounded-lg border border-gray-200 bg-white shadow-md">
	<div class="grid grid-cols-3 gap-4 rounded-t-lg border-b border-gray-200 bg-gray-50 p-4">
		<div class="font-semibold text-gray-600">Exam Name</div>
		<div class="font-semibold text-gray-600">Post Name</div>
		<div class="font-semibold text-gray-600">Download Link</div>
	</div>

	<div>
		{#each admitCards as card, i}
			<div
				class="grid grid-cols-3 items-center gap-4 p-4 {i < admitCards.length - 1
					? 'border-b border-gray-200'
					: ''}"
			>
				<div class="font-medium text-gray-800">{card.examName}</div>
				<div class="text-gray-500">{card.postName}</div>
				<div>
					<a href={card.link} class="font-medium text-blue-600 hover:underline">Download</a>
				</div>
			</div>
		{/each}
	</div>
</div>
