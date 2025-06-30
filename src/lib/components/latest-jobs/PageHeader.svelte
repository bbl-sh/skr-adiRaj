<script>
	import { MapPin } from 'lucide-svelte';
	let { title, company, location, applyLink } = $props();
</script>

<div>
	<h1 class="text-3xl font-bold text-slate-800 md:text-4xl">{title}</h1>
	<div class="mt-2 flex items-center gap-x-4 text-slate-500">
		<span>{company}</span>
		<span class="text-slate-300">•</span>
		<div class="flex items-center gap-1">
			<MapPin size={16} />
			<span>{location}</span>
		</div>
	</div>
	<div class="mt-6 flex items-center gap-3">
		<a
			href={applyLink}
			class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
			>Apply Now</a
		>
		<button
			class="rounded-lg bg-slate-100 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-200"
			>Save Job</button
		>
	</div>
</div>
