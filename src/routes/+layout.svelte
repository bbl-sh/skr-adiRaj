<script>
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Adi-Raj</title>
</svelte:head>
<div class="flex min-h-screen flex-col bg-gray-50">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
