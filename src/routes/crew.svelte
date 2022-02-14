<script>
	import { onMount } from 'svelte';
	import useTabs from '$lib/tabs.js'

	onMount(() => {
		const { activateTabs, deactivateTabs } = useTabs()
		activateTabs()
		return deactivateTabs
	})
</script>

<svelte:head>
	<title>Crew | Space tourism website</title>
</svelte:head>

<section class="wrapper">
	<h1><span aria-hidden="true">02</span> Meet your crew</h1>

	<ul role="tablist" class="interactive-tabs dots">
		<li>
			<button
				role="tab"
				aria-selected="true"
				aria-controls="commander-panel"
				tabindex="0"
			>
				<span class="sr-only">commander</span>
			</button>
		</li>
		<li>
			<button role="tab" aria-controls="specialist-panel" tabindex="-1">
				<span class="sr-only">specialist</span>
			</button>
		</li>
		<li>
			<button role="tab" aria-controls="pilot-panel" tabindex="-1">
				<span class="sr-only">pilot</span>
			</button>
		</li>
		<li>
			<button role="tab" aria-controls="engineer-panel" tabindex="-1">
				<span class="sr-only">engineer</span>
			</button>
		</li>
	</ul>

	<article
		id="commander-panel"
		class="flow"
		data-selected="true"
		role="tabpanel"
	>
		<header>
			<h2>Commander</h2>
			<p>Douglas Hurley</p>
		</header>
		<p>
			Douglas Gerald Hurley is an American engineer, former Marine Corps
			pilot and former NASA astronaut. He launched into space for the third
			time as commander of Crew Dragon Demo-2.
		</p>
	</article>

	<picture data-selected="true" data-id="commander-panel">
		<source
			srcset="./assets/crew/image-douglas-hurley.webp"
			type="image/webp"
		/>
		<img
			src="./assets/crew/image-douglas-hurley.png"
			alt="commander douglas hurley"
		/>
	</picture>

	<!-- ========================================== -->

	<article
		id="specialist-panel"
		class="flow"
		data-selected="false"
		role="tabpanel"
	>
		<header>
			<h2>Mission Specialist</h2>
			<p>Mark Shuttleworth</p>
		</header>
		<p>
			Mark Richard Shuttleworth is the founder and CEO of Canonical, the
			company behind the Linux-based Ubuntu operating system. Shuttleworth
			became the first South African to travel to space as a space tourist.
		</p>
	</article>

	<picture data-selected="false" data-id="specialist-panel">
		<source
			srcset="./assets/crew/image-mark-shuttleworth.webp"
			type="image/webp"
		/>
		<img
			src="./assets/crew/image-mark-shuttleworth.png"
			alt="specialist mark shuttleworth"
		/>
	</picture>

	<!-- ========================================== -->

	<article
		id="pilot-panel"
		class="flow"
		data-selected="false"
		role="tabpanel"
	>
		<header>
			<h2>Pilot</h2>
			<p>Victor Glover</p>
		</header>
		<p>
			Pilot on the first operational flight of the SpaceX Crew Dragon to the
			International Space Station. Glover is a commander in the U.S. Navy
			where he pilots an F/A-18.He was a crew member of Expedition 64, and
			served as a station systems flight engineer.
		</p>
	</article>

	<picture data-selected="false" data-id="pilot-panel">
		<source
			srcset="./assets/crew/image-victor-glover.webp"
			type="image/webp"
		/>
		<img
			src="./assets/crew/image-victor-glover.png"
			alt="pilot victor glover"
		/>
	</picture>

	<!-- ========================================== -->

	<article
		id="engineer-panel"
		class="flow"
		data-selected="false"
		role="tabpanel"
	>
		<header>
			<h2>Flight Engineer</h2>
			<p>Anousheh Ansari</p>
		</header>
		<p>
			Anousheh Ansari is an Iranian American engineer and co-founder of
			Prodea Systems. Ansari was the fourth self-funded space tourist, the
			first self-funded woman to fly to the ISS, and the first Iranian in
			space.
		</p>
	</article>

	<picture data-selected="false" data-id="engineer-panel">
		<source
			srcset="./assets/crew/image-anousheh-ansari.webp"
			type="image/webp"
		/>
		<img
			src="./assets/crew/image-anousheh-ansari.png"
			alt="engineer anousheh ansari"
		/>
	</picture>
</section>

<style>
	:global(body) {
		background-image: url('/static/assets/crew/background-crew-mobile.jpg');
		background-size: cover;
		background-position: bottom;
	}

	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'picture'
			'tablist'
			'article';
		place-items: center;
		gap: 1rem;
		text-align: center;
	}
	section h1 {
		grid-area: header;
	}
	section [role='tablist'] {
		grid-area: tablist;
	}
	section article {
		grid-area: article;
	}
	section article:not([data-selected='true']) {
		display: none;
	}
	section picture:not([data-selected='true']) {
		display: none;
	}
	section article header h2 {
		color: hsl(var(--clr-light), 0.6);
		font-size: 1.5rem;
	}
	section article header p {
		color: white;
		font-size: 2rem;
	}
	section article p {
		color: hsl(var(--clr-light));
		text-align: center;
	}
	section picture {
		position: relative;
		grid-area: picture;
		max-width: 50%;
	}
	section picture::after {
		content: '';
		position: absolute;
		top: 100%;
		width: calc(200% - 8vw);
		left: 50%;
		transform: translateX(-50%);
		border-bottom: 1px solid hsl(var(--clr-light), 0.2);
	}

	@media screen and (min-width: 720px) {
		:global(body) {
			background-image: url('/static/assets/crew/background-crew-desktop.jpg');
		}
		section {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'header picture'
				'article picture'
				'tablist picture';
			justify-items: start;
			text-align: start;
		}
		section picture {
			justify-self: center;
			align-self: end;
			max-width: 60%;
		}
		section picture::after {
			display: none;
		}
		section article p {
			text-align: start;
		}
	}
</style>