<script>
	// Svelte 5: The component now receives 'jobs' as a prop.
	// It is now free of any hardcoded data.
	let { jobs } = $props();
</script>

<div class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
	<h3 class="mb-4 text-lg font-bold text-slate-800">Featured Government Jobs</h3>
	<div class="space-y-4">
		{#each jobs as job}
			<a href={job.link || '#'} class="group flex items-center gap-4">
				<img src={job.image} alt={job.title} class="h-16 w-16 rounded-lg object-cover" />
				<div>
					<h4 class="font-semibold text-slate-700 group-hover:text-blue-600">{job.title}</h4>
					<p class="text-sm text-slate-500">{job.location}</p>
				</div>
			</a>
		{/each}
	</div>
	<button
		class="mt-6 w-full rounded-lg bg-slate-100 py-2 font-semibold text-slate-700 transition-colors hover:bg-slate-200"
	>
		View All Government Jobs
	</button>
</div>
