<script>
	import FeaturedJobs from '$lib/components/latest-jobs/FeaturedJobs.svelte';
	import { MapPin, CheckCircle2 } from 'lucide-svelte';
	let { data } = $props();
	const { pageData } = data; // Shortcut for cleaner access
</script>

<div class="container mx-auto px-4 py-12">
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
		<main class="lg:col-span-2">
			<section>
				<h1 class="text-3xl font-bold text-slate-800 md:text-4xl">
					{pageData.recruitment.recruitment_title ?? 'Recruitment Details'}
				</h1>
				{#if pageData.recruitment.header?.company_name || pageData.recruitment.header?.location}
					<div class="mt-2 flex items-center gap-x-4 text-slate-500">
						{#if pageData.recruitment.header?.company_name}
							<span>{pageData.recruitment.header.company_name}</span>
						{/if}
						{#if pageData.recruitment.header?.company_name && pageData.recruitment.header?.location}
							<span class="text-slate-300">•</span>
						{/if}
						{#if pageData.recruitment.header?.location}
							<div class="flex items-center gap-1">
								<MapPin size={16} />
								<span>{pageData.recruitment.header.location}</span>
							</div>
						{/if}
					</div>
				{/if}
				<div class="mt-6 flex items-center gap-3">
					{#if pageData.recruitment.website_links?.apply_online}
						<a
							href={pageData.recruitment.website_links.apply_online}
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white">Apply Now</a
						>
					{/if}
					<button class="rounded-lg bg-slate-100 px-6 py-3 font-semibold text-slate-700"
						>Save Job</button
					>
				</div>
			</section>

			<div class="mt-8">
				{#if pageData.recruitmentDetails.length > 0}
					<section class="border-b border-slate-200 py-6">
						<h2 class="mb-4 text-xl font-bold text-slate-800">Recruitment Details</h2>
						<div class="space-y-4">
							{#each pageData.recruitmentDetails as detail}
								<div class="flex flex-col md:flex-row">
									<div class="w-full font-semibold text-slate-600 md:w-1/3">{detail.label}</div>
									<div class="mt-1 w-full text-slate-800 md:mt-0 md:w-2/3">{detail.value}</div>
								</div>
							{/each}
						</div>
					</section>
				{/if}

				{#if pageData.eligibilityDetails.length > 0}
					<section class="border-b border-slate-200 py-6">
						<h2 class="mb-4 text-xl font-bold text-slate-800">Eligibility Criteria</h2>
						<div class="space-y-4">
							{#each pageData.eligibilityDetails as detail}
								<div class="flex flex-col md:flex-row">
									<div class="w-full font-semibold text-slate-600 md:w-1/3">{detail.label}</div>
									<div class="mt-1 w-full text-slate-800 md:mt-0 md:w-2/3">{detail.value}</div>
								</div>
							{/each}
						</div>
					</section>
				{/if}

				{#if pageData.feeDetails.length > 0}
					<section class="border-b border-slate-200 py-6">
						<h2 class="mb-4 text-xl font-bold text-slate-800">Application Fees</h2>
						<div class="space-y-4">
							{#each pageData.feeDetails as detail}
								<div class="flex flex-col md:flex-row">
									<div class="w-full font-semibold text-slate-600 md:w-1/3">{detail.label}</div>
									<div class="mt-1 w-full text-slate-800 md:mt-0 md:w-2/3">{detail.value}</div>
								</div>
							{/each}
						</div>
					</section>
				{/if}

				{#if pageData.recruitment.header?.description}
					<section class="border-b border-slate-200 py-6">
						<h2 class="mb-4 text-xl font-bold text-slate-800">Full Job Description</h2>
						<p class="leading-relaxed text-slate-600">
							{pageData.recruitment.header.description}
						</p>
					</section>
				{/if}

				{#if pageData.recruitment.steps_to_apply?.length > 0}
					<section class="border-b border-slate-200 py-6">
						<h2 class="mb-4 text-xl font-bold text-slate-800">How to Apply</h2>
						<ul class="space-y-3">
							{#each pageData.recruitment.steps_to_apply as item}
								<li class="flex items-start">
									<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
									<div class="ml-3">
										<h4 class="font-semibold text-slate-700">{item.title}</h4>
										<p class="text-slate-600">{item.description}</p>
									</div>
								</li>
							{/each}
						</ul>
					</section>
				{/if}

				<div class="mt-8 flex items-center gap-3">
					{#if pageData.recruitment.website_links?.apply_online}
						<a
							href={pageData.recruitment.website_links.apply_online}
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white">Apply Now</a
						>
					{/if}
					<button class="rounded-lg bg-slate-100 px-6 py-3 font-semibold text-slate-700"
						>Save Job</button
					>
				</div>
			</div>
		</main>

		<aside class="lg:mt-16">
			{#if pageData.featuredJobs.length > 0}
				<FeaturedJobs jobs={pageData.featuredJobs} />
			{/if}
		</aside>
	</div>
</div>
