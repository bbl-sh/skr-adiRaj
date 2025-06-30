<script>
	import { Search } from 'lucide-svelte';
</script>

<div
	class="relative h-96 bg-cover bg-center"
	style="background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');"
>
	<div class="bg-opacity-60 absolute inset-0 bg-gray-900"></div>
	<div
		class="relative container mx-auto flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8"
	>
		<h1 class="mb-4 text-4xl leading-tight font-extrabold text-white sm:text-5xl">
			Find Your Dream Job Today
		</h1>
		<p class="mb-8 max-w-2xl text-lg text-gray-200">
			Explore thousands of job opportunities across various categories and locations. Your next
			career move starts here.
		</p>
		<div class="w-full max-w-lg">
			<div class="flex items-center rounded-full bg-white shadow-xl">
				<div class="p-4">
					<Search class="h-6 w-6 text-gray-400" />
				</div>
				<input
					class="w-full rounded-l-full px-6 py-4 leading-tight text-gray-700 focus:outline-none"
					id="search"
					type="text"
					placeholder="Search for Jobs"
				/>
				<div class="p-2">
					<button
						class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 p-3 text-white hover:bg-blue-700 focus:outline-none"
					>
						<Search class="h-6 w-6" />
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
