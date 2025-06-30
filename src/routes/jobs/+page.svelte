<script>
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import JobListingCard from '$lib/components/ui/JobListingCard.svelte';

	const jobData = [
		{
			title: 'Frontend Developer',
			company: 'Google LLC',
			location: 'Bengaluru, KA',
			type: 'Full-time',
			salary: '₹15-25 LPA',
			postedDate: '2024-06-28',
			link: '#'
		},
		{
			title: 'SvelteKit Engineer',
			company: 'Vercel',
			location: 'Remote',
			type: 'Full-time',
			salary: '₹20-30 LPA',
			postedDate: '2024-06-27',
			link: '#'
		},
		{
			title: 'UI/UX Designer',
			company: 'Microsoft',
			location: 'Hyderabad, TS',
			type: 'Contract',
			postedDate: '2024-06-25',
			link: '#'
		},
		{
			title: 'Backend Developer (Node.js)',
			company: 'Amazon',
			location: 'Pune, MH',
			type: 'Full-time',
			salary: '₹18-28 LPA',
			postedDate: '2024-06-24',
			link: '#'
		}
	];
</script>

<div class="container mx-auto px-4 py-12">
	<PageHeader
		title="Find Your Next Job"
		subtitle="Explore thousands of open positions in tech and beyond."
	/>
	<div class="space-y-4">
		{#each jobData as job}
			<JobListingCard {job} />
		{/each}
	</div>
</div>
