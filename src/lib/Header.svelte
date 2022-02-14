<script>
import { onMount } from "svelte";
import { page } from '$app/stores';

onMount(() => {
	const menuToggle = document.getElementById('menu-toggle');
	const primaryNav = document.getElementById('primary-navigation');
	const links = primaryNav.querySelectorAll('a')

	links.forEach(link => link.addEventListener('click', closeMenu))
	menuToggle.addEventListener('click', toggleMenu);

	function openMenu() {
		menuToggle.setAttribute('data-open', 'true');
		primaryNav.setAttribute('aria-expanded', 'true');	
	}

	function closeMenu() {
		menuToggle.setAttribute('data-open', 'false');
		primaryNav.setAttribute('aria-expanded', 'false');	
	}

	function toggleMenu() {
		const isOpen = menuToggle.getAttribute('data-open');
		if (isOpen === 'false') openMenu()
		else closeMenu()
	}
})
</script>

<header id="primary-header">
	<div class="logo">
		<a href="/">
			<img src="./assets/shared/logo.svg" alt="logo" />
		</a>
	</div>

	<button
		type="button"
		aria-controls="primary-navigation"
		id="menu-toggle"
		data-open="false"
	>
		<span class="sr-only" aria-expanded="false">Menu</span>
		<img
			src="./assets/shared/icon-hamburger.svg"
			aria-hidden="true"
			class="hamburger-icon"
			alt="hamburger icon"
		/>
		<img
			src="./assets/shared/icon-close.svg"
			aria-hidden="true"
			class="close-icon"
			alt="close icon"
		/>
	</button>

	<nav id="primary-navigation" aria-expanded="false">
		<ul role="list">
			<li>
				<a href="/" class="nav-item" class:active={$page.url.pathname === '/'}>
					<span aria-hidden="true">00</span>Home
				</a>
			</li>
			<li>
				<a href="/destination" class="nav-item" class:active={$page.url.pathname === '/destination'}>
					<span aria-hidden="true">01</span>Destination
				</a>
			</li>
			<li>
				<a href="/crew" class="nav-item" class:active={$page.url.pathname === '/crew'}>
					<span aria-hidden="true">02</span>Crew
				</a>
			</li>
			<li>
				<a href="/technology" class="nav-item" class:active={$page.url.pathname === '/technology'}>
					<span aria-hidden="true">03</span>Technology
				</a>
			</li>
		</ul>
	</nav>
</header>
