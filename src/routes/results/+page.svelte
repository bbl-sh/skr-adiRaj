<script>
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import ResultsTable from '$lib/components/ui/ResultsTable.svelte';

	const examResults = [
		{ name: 'Civil Service Exam', date: '2024-07-15', status: 'Released', link: '#' },
		{
			name: 'Professional Licensure Exam for Teachers',
			date: '2024-06-20',
			status: 'Released',
			link: '#'
		},
		{ name: 'Bar Examination', date: '2024-05-25', status: 'Pending', link: null },
		{ name: 'Certified Public Accountant Exam', date: '2024-04-30', status: 'Released', link: '#' },
		{
			name: 'Medical Technologist Licensure Exam',
			date: '2024-03-10',
			status: 'Released',
			link: '#'
		}
	];
</script>

<div class="container mx-auto px-4 py-12">
	<PageHeader
		title="Exam Results"
		subtitle="Stay updated with the latest exam results and announcements."
	/>
	<ResultsTable results={examResults} />
</div>
