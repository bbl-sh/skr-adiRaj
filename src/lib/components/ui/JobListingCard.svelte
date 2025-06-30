<script>
	let { job } = $props();
</script>

<div
	class="flex flex-col items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg sm:flex-row sm:items-center"
>
	<div class="flex-grow">
		<h3 class="text-xl font-bold text-gray-800">{job.title}</h3>
		<div class="mt-2 flex items-center gap-x-4 text-sm text-gray-500">
			<span>{job.company}</span>
			<span class="hidden sm:inline">•</span>
			<span>{job.location}</span>
		</div>
		<div class="mt-3 flex items-center gap-x-2">
			<span
				class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
			>
				{job.type}
			</span>
			{#if job.salary}
				<span
					class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
				>
					{job.salary}
				</span>
			{/if}
		</div>
	</div>
	<div class="mt-4 w-full sm:mt-0 sm:w-auto">
		<a
			href={job.link}
			class="inline-block w-full rounded-lg bg-blue-600 px-6 py-2 text-center font-semibold text-white transition-colors hover:bg-blue-700 sm:w-auto"
		>
			Apply Now
		</a>
		<p class="mt-2 text-center text-xs text-gray-400 sm:text-right">Posted on {job.postedDate}</p>
	</div>
</div>
