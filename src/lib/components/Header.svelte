<script>
	import { Menu, Search } from 'lucide-svelte';
</script>

<nav class="bg-white shadow-md">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="text-2xl font-bold text-gray-800">CareerConnect</a>
				<div class="ml-10 hidden md:block">
					<div class="flex items-baseline space-x-4">
						<a
							href="/"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							>Home</a
						>
						<a
							href="/jobs"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							>Jobs</a
						>
						<a
							href="/admit-card"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							>Admit Cards</a
						>
						<a
							href="/results"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							>Results</a
						>
						<a
							href="/"
							class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-gray-900"
							>Notifications</a
						>
					</div>
				</div>
			</div>
			<div class="hidden md:block">
				<div class="ml-4 flex items-center md:ml-6">
					<div class="relative">
						<input
							type="text"
							class="h-10 rounded-full bg-gray-100 px-5 pr-10 text-sm focus:outline-none"
							placeholder="Search"
						/>
						<button type="submit" class="absolute top-0 right-0 mt-3 mr-4">
							<Search class="h-4 w-4 text-gray-500" />
						</button>
					</div>
					<a
						href="/"
						class="ml-4 rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
						>Sign Up</a
					>
					<a
						href="/"
						class="ml-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
						>Login</a
					>
				</div>
			</div>
			<div class="-mr-2 flex md:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 focus:outline-none"
					aria-controls="mobile-menu"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<Menu />
				</button>
			</div>
		</div>
	</div>
</nav>
