<script>
	import Poster from '$lib/components/Poster.svelte';
	import JobCard from '$lib/components/JobCard.svelte';
	import ExamCard from '$lib/components/ExamCard.svelte';
	import NotificationCard from '$lib/components/NotificationCard.svelte';

	// Icons for Job Cards
	import { Briefcase, Building, Users, FileText, Globe } from 'lucide-svelte';

	const governmentJobs = [
		{ title: 'State Job A', department: 'State Department 1', icon: Briefcase },
		{ title: 'State Job B', department: 'State Department 2', icon: Building },
		{ title: 'State Job C', department: 'State Department 3', icon: Users },
		{ title: 'State Job D', department: 'State Department 4', icon: FileText },
		{ title: 'State Job E', department: 'State Department 5', icon: Globe },
		{ title: 'State Job F', department: 'State Department 6', icon: Briefcase }
	];

	const exams = [
		{
			title: 'Exam A',
			body: 'Exam Body 1',
			image:
				'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop'
		},
		{
			title: 'Exam B',
			body: 'Exam Body 2',
			image:
				'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop'
		},
		{
			title: 'Exam C',
			body: 'Exam Body 3',
			image:
				'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&auto=format&fit=crop'
		},
		{
			title: 'Exam D',
			body: 'Exam Body 4',
			image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=500&auto=format&fit=crop'
		},
		{
			title: 'Exam E',
			body: 'Exam Body 5',
			image:
				'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop'
		},
		{
			title: 'Exam F',
			body: 'Exam Body 6',
			image:
				'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop'
		}
	];

	const notifications = [
		{
			title: 'Notification 1',
			details: 'Notification Details 1',
			image:
				'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&auto=format&fit=crop'
		},
		{
			title: 'Notification 2',
			details: 'Notification Details 2',
			image:
				'https://images.unsplash.com/photo-1517842645767-c6f90415aaa1?w=500&auto=format&fit=crop'
		},
		{
			title: 'Notification 3',
			details: 'Notification Details 3',
			image:
				'https://images.unsplash.com/photo-1606147202139-e1376ba51919?w=500&auto=format&fit=crop'
		}
	];
</script>

<Poster />

<div class="bg-white py-12">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-3xl font-bold text-gray-800">Government Jobs</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each governmentJobs as job}
				<JobCard title={job.title} department={job.department} icon={job.icon} />
			{/each}
		</div>
		<div class="mt-8 text-center">
			<button
				class="rounded-lg bg-gray-200 px-6 py-2 font-semibold text-gray-700 transition-colors hover:bg-gray-300"
			>
				View All Government Jobs
			</button>
		</div>
	</div>
</div>

<div class="bg-gray-50 py-12">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-3xl font-bold text-gray-800">University & Other Exams</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each exams as exam}
				<ExamCard title={exam.title} body={exam.body} image={exam.image} />
			{/each}
		</div>
	</div>
</div>

<div class="bg-white py-12">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="mb-8 text-3xl font-bold text-gray-800">Notifications</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each notifications as notification}
				<NotificationCard
					title={notification.title}
					details={notification.details}
					image={notification.image}
				/>
			{/each}
		</div>
	</div>
</div>
