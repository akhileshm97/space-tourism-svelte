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
	<title>Technology | Space tourism website</title>
</svelte:head>

<section>
	<h1><span aria-hidden="true">03</span> Space launch 101</h1>

	<ul role="tablist" class="interactive-tabs nums">
		<li>
			<button
				role="tab"
				aria-selected="true"
				aria-controls="launch-vehicle-panel"
				tabindex="0"
				aria-label="launch vehicle"
			>
				<span aria-hidden="true">1</span>
			</button>
		</li>
		<li>
			<button
				role="tab"
				aria-controls="spaceport-panel"
				tabindex="-1"
				aria-label="spaceport"
			>
				<span aria-hidden="true">2</span>
			</button>
		</li>
		<li>
			<button
				role="tab"
				aria-controls="space-capsule-panel"
				tabindex="-1"
				aria-label="space capsule"
			>
				<span aria-hidden="true">3</span>
			</button>
		</li>
	</ul>

	<article
		id="launch-vehicle-panel"
		class="flow"
		data-selected="true"
		role="tabpanel"
	>
		<header>
			<span>The terminology...</span>
			<h2>Launch vehicle</h2>
		</header>
		<p>
			A launch vehicle or carrier rocket is a rocket-propelled vehicle used
			to carry a payload from Earth's surface to space, usually to Earth
			orbit or beyond. Our WEB-X carrier rocket is the most powerful in
			operation. Standing 150 metres tall, it's quite an awe-inspiring sight
			on the launch pad!
		</p>
	</article>

	<picture data-selected="true" data-id="launch-vehicle-panel">
		<source
			srcset="./assets/technology/image-launch-vehicle-portrait.jpg"
			type="image/jpg"
			media="(min-width: 720px)"
		/>
		<img
			src="./assets/technology/image-launch-vehicle-landscape.jpg"
			alt="launch vehicle"
		/>
	</picture>

	<!-- ========================================== -->

	<article
		id="spaceport-panel"
		class="flow"
		data-selected="false"
		role="tabpanel"
	>
		<header>
			<span>The terminology...</span>
			<h2>Spaceport</h2>
		</header>
		<p>
			A spaceport or cosmodrome is a site for launching (or receiving)
			spacecraft, by analogy to the seaport for ships or airport for
			aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
			situated to take advantage of the Earth’s rotation for launch.
		</p>
	</article>

	<picture data-selected="false" data-id="spaceport-panel">
		<source
			srcset="./assets/technology/image-spaceport-portrait.jpg"
			type="image/jpg"
			media="(min-width: 720px)"
		/>
		<img
			src="./assets/technology/image-spaceport-landscape.jpg"
			alt="launch vehicle"
		/>
	</picture>

	<!-- ========================================== -->

	<article
		id="space-capsule-panel"
		class="flow"
		data-selected="false"
		role="tabpanel"
	>
		<header>
			<span>The terminology...</span>
			<h2>Space capsule</h2>
		</header>
		<p>
			A space capsule is an often-crewed spacecraft that uses a blunt-body
			reentry capsule to reenter the Earth's atmosphere without wings. Our
			capsule is where you'll spend your time during the flight. It includes
			a space gym, cinema, and plenty of other activities to keep you
			entertained.
		</p>
	</article>

	<picture data-selected="false" data-id="space-capsule-panel">
		<source
			srcset="./assets/technology/image-space-capsule-portrait.jpg"
			type="image/jpg"
			media="(min-width: 720px)"
		/>
		<img
			src="./assets/technology/image-space-capsule-landscape.jpg"
			alt="launch vehicle"
		/>
	</picture>
</section>

<style>
	:global(body) {
		background-image: url('/static/assets/technology/background-technology-mobile.jpg');
		background-size: cover;
		background-position: bottom;
	}
	section {
		display: grid;
		grid-template-areas:
			'header'
			'picture'
			'tablist'
			'article';
		place-items: center;
		gap: 2rem;
		color: hsl(var(--clr-light));
		padding-inline: 0;
		text-align: center;
	}

	section h1 {
		grid-area: header;
		color: white;
	}
	section [role='tablist'] {
		grid-area: tablist;
	}
	section picture {
		position: relative;
		grid-area: picture;
		animation: load-article 0.7s;
	}
	section article {
		grid-area: article;
		padding-inline: 4vw;
		animation: load-article 0.7s;
		padding-bottom: 1rem;
	}

	section article:not([data-selected='true']) {
		display: none;
	}
	section picture:not([data-selected='true']) {
		display: none;
	}

	section article header {
		color: white;
		text-transform: uppercase;
	}
	section article header span {
		color: hsl(var(--clr-light));
	}

	@media screen and (min-width: 720px) {
		:global(body) {
			background-image: url('/static/assets/technology/background-technology-desktop.jpg');
		}
		section {
			grid-template-columns: 1fr 1fr 4fr 4fr;
			grid-template-areas:
				'. header header header'
				'. tablist article picture';
			justify-items: start;
			align-items: center;
			row-gap: 0;
			column-gap: 1rem;
			text-align: start;
		}
		section [role='tablist'] {
			flex-direction: column;
		}
		section picture {
			justify-self: end;
			max-width: 90%;
		}
		section article {
			padding-inline: 0;
		}
	}
</style>