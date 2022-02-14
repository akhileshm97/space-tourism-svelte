<script>
	import Header from '$lib/Header.svelte';

	import '../styles/modern-css-reset.min.css';
	import '../styles/base.css';
	import '../styles/utilities.css';
	import '../styles/common.css';
</script>

<Header />

<main>
	<slot />
</main>
