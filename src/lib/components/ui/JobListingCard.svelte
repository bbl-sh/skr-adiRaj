<script>
	let { job } = $props();
</script>

<div
	class="rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
>
	<h3 class="text-xl font-bold text-gray-800">{job.title}</h3>
	<p class="mt-2 text-base leading-relaxed text-gray-600">{job.description}</p>
	<div class="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
		<p class="text-sm text-gray-500">Posted on {job.postedDate}</p>
		<a
			href={job.link}
			class="inline-block rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
		>
			More Info
		</a>
	</div>
</div>
