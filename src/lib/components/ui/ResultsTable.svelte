<script>
	let { results } = $props();
</script>

<div class="rounded-lg border border-gray-200 bg-white shadow-md">
	<div class="grid grid-cols-4 gap-4 rounded-t-lg border-b border-gray-200 bg-gray-50 p-4">
		<div class="font-semibold text-gray-600">Exam Name</div>
		<div class="font-semibold text-gray-600">Result Date</div>
		<div class="font-semibold text-gray-600">Status</div>
		<div class="font-semibold text-gray-600">Download</div>
	</div>

	<div>
		{#each results as result, i}
			<div
				class="grid grid-cols-4 items-center gap-4 p-4 {i < results.length - 1
					? 'border-b border-gray-200'
					: ''}"
			>
				<div class="font-medium text-gray-800">{result.name}</div>
				<div class="text-gray-500">{result.date}</div>
				<div>
					{#if result.status === 'Released'}
						<span
							class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
						>
							Released
						</span>
					{:else if result.status === 'Pending'}
						<span
							class="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
						>
							Pending
						</span>
					{/if}
				</div>
				<div>
					{#if result.link}
						<a href={result.link} class="font-medium text-blue-600 hover:underline">View Result</a>
					{:else}
						<span class="text-gray-400">N/A</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
