<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home | Space tourism website</title>
</svelte:head>

<section>
	<header class="flow">
		<h1>So, you want to travel to <span>Space</span></h1>
		<p>
			Let’s face it; if you want to go to space, you might as well genuinely
			go to outer space and not hover kind of on the edge of it. Well sit
			back, and relax because we’ll give you a truly out of this world
			experience!
		</p>
	</header>
	<a href="/destination" class="explore">
		<span>Explore</span>
	</a>
</section>

<style>
	:global(body) {
		background-image: url('/static/assets/home/background-home-mobile.jpg');
		background-size: cover;
		background-position: bottom;
	}

	section {
		display: grid;
		place-items: center;
		gap: 1rem;
	}
	header {
		color: hsl(var(--clr-light));
		text-align: center;
	}
	h1 {
		text-transform: uppercase;
		font-weight: 400;
		font-size: 1rem;
	}
	h1 span {
		display: block;
		color: hsl(0, 0%, 90%);
		font-size: 4.5em;
	}

	.explore {
		display: inline-block;
		position: relative;
		align-self: start;
		color: black;
		background-color: white;
		text-transform: uppercase;
		text-decoration: none;
		letter-spacing: 0.25em;
		aspect-ratio: 1;
		padding: 0.5em 1em;
		border-radius: 50%;
	}
	.explore::before {
		content: 'Explore';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: transparent;
	}
	.explore::after {
		content: '';
		position: absolute;
		z-index: -1;
		inset: 0;
		opacity: 0;
		background-color: hsl(0, 0%, 100%, 0.5);
		border-radius: 50%;
		transition: transform 0.4s ease-in-out, opacity 0.5s ease-in-out;
	}
	.explore:hover::after,
	.explore:focus-visible::after {
		transform: scale(1.5);
		opacity: 1;
	}

	.explore span {
		clip-path: inset(50%);
		/*display: inline-block;*/
	}

	@media screen and (min-width: 720px) {
		:global(body) {
			background-image: url('/static/assets/home/background-home-desktop.jpg');
		}
		
		section {
			grid-template-columns: repeat(2, 1fr);
		}
		
		header {
			text-align: start;
		}
		
		h1 {
			font-size: 2rem;
		}

		.explore {
			padding: 1em 2em;
			align-self: center;
		}
	}
</style>