<script>
	import PageHeader from '$lib/components/ui/PageHeader.svelte';
	import AdmitCardsTable from '$lib/components/ui/AdmitCardsTable.svelte';

	const admitCardData = [
		{ examName: 'Civil Services Exam', postName: 'Officer', link: '#' },
		{ examName: 'Banking Sector Exam', postName: 'Clerk', link: '#' },
		{ examName: 'Railway Recruitment Exam', postName: 'Technician', link: '#' },
		{ examName: 'Teaching Eligibility Test', postName: 'Teacher', link: '#' },
		{ examName: 'Defense Services Exam', postName: 'Soldier', link: '#' }
	];
</script>

<div class="container mx-auto px-4 py-12">
	<PageHeader title="Admit Cards" />
	<AdmitCardsTable admitCards={admitCardData} />
</div>
