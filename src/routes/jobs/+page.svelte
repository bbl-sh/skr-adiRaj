<script>
	import { DB } from '$lib/api/latestJobsList.js';
	import { slugify } from '$lib/utils.js';
	import { Users, Calendar, ArrowRight } from 'lucide-svelte';
</script>

<div class="container mx-auto px-4 py-12">
	<h1 class="mb-8 text-4xl font-bold text-slate-800">Latest Recruitments</h1>

	<div class="space-y-4">
		{#each DB.recruitment_list as recruitment (recruitment.id)}
			<a
				href="/jobs/{slugify(recruitment.recruitment_title)}"
				class="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
			>
				<h2 class="text-xl font-bold text-blue-600">{recruitment.recruitment_title}</h2>
				<p class="mt-2 text-slate-600">{recruitment.header.description}</p>

				<div
					class="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200 pt-4 text-sm text-slate-500"
				>
					<div class="flex items-center gap-1.5">
						<Users size={16} />
						<strong>Vacancies:</strong>
						<span>{recruitment.application_details.vacancies}</span>
					</div>
					<div class="flex items-center gap-1.5">
						<Calendar size={16} />
						<strong>Last Date:</strong>
						<span>{recruitment.application_details.form_closing_date}</span>
					</div>
				</div>

				<div class="mt-4 flex justify-end">
					<div
						class="flex items-center gap-1 font-semibold text-blue-600 opacity-0 transition-opacity group-hover:opacity-100"
					>
						View Details <ArrowRight size={16} />
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>
