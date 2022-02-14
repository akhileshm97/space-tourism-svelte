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
	<title>Destination | Space tourism website</title>
</svelte:head>

<section class="wrapper">
	<h1><span>01</span> Pick your destination</h1>

	<ul role="tablist" class="interactive-tabs">
		<li>
			<button
				role="tab"
				aria-selected="true"
				aria-controls="moon-panel"
				tabindex="0"
			>
				Moon
			</button>
		</li>
		<li>
			<button role="tab" aria-controls="mars-panel" tabindex="-1">
				Mars
			</button>
		</li>
		<li>
			<button role="tab" aria-controls="europa-panel" tabindex="-1">
				Europa
			</button>
		</li>
		<li>
			<button role="tab" aria-controls="titan-panel" tabindex="-1">
				Titan
			</button>
		</li>
	</ul>

	<article role="tabpanel" id="moon-panel" data-selected="true">
		<picture>
			<source
				srcset="./assets/destination/image-moon.webp"
				type="image/webp"
			/>
			<img src="./assets/destination/image-moon.png" alt="moon" />
		</picture>
		<div class="flow">
			<h2>Moon</h2>
			<p>
				See our planet as you’ve never seen it before. A perfect relaxing
				trip away to help regain perspective and come back refreshed. While
				you’re there, take in some history by visiting the Luna 2 and Apollo
				11 landing sites.
			</p>

			<hr />

			<dl>
				<div>
					<dt>Avg. distance</dt>
					<dd>384,400 km</dd>
				</div>
				<div>
					<dt>Est. travel time</dt>
					<dd>3 days</dd>
				</div>
			</dl>
		</div>
	</article>

	<article role="tabpanel" id="mars-panel">
		<picture>
			<source
				srcset="./assets/destination/image-mars.webp"
				type="image/webp"
			/>
			<img src="./assets/destination/image-mars.png" alt="mars" />
		</picture>
		<div class="flow">
			<h2>Mars</h2>
			<p>
				Don’t forget to pack your hiking boots. You’ll need them to tackle
				Olympus Mons, the tallest planetary mountain in our solar system.
				It’s two and a half times the size of Everest!
			</p>

			<hr />

			<dl>
				<div>
					<dt>Avg. distance</dt>
					<dd>225 mil. km</dd>
				</div>
				<div>
					<dt>Est. travel time</dt>
					<dd>9 months</dd>
				</div>
			</dl>
		</div>
	</article>

	<article role="tabpanel" id="europa-panel">
		<picture>
			<source
				srcset="./assets/destination/image-europa.webp"
				type="image/webp"
			/>
			<img src="./assets/destination/image-europa.png" alt="europa" />
		</picture>
		<div class="flow">
			<h2>Europa</h2>
			<p>
				The smallest of the four Galilean moons orbiting Jupiter, Europa is
				a winter lover’s dream. With an icy surface, it’s perfect for a bit
				of ice skating, curling, hockey, or simple relaxation in your snug
				wintery cabin.
			</p>

			<hr />

			<dl>
				<div>
					<dt>Avg. distance</dt>
					<dd>628 mil. km</dd>
				</div>
				<div>
					<dt>Est. travel time</dt>
					<dd>3 years</dd>
				</div>
			</dl>
		</div>
	</article>

	<article role="tabpanel" id="titan-panel">
		<picture>
			<source
				srcset="./assets/destination/image-titan.webp"
				type="image/webp"
			/>
			<img src="./assets/destination/image-titan.png" alt="titan" />
		</picture>
		<div class="flow">
			<h2>Titan</h2>
			<p>
				The only moon known to have a dense atmosphere other than Earth,
				Titan is a home away from home (just a few hundred degrees colder!).
				As a bonus, you get striking views of the Rings of Saturn.
			</p>

			<hr />

			<dl>
				<div>
					<dt>Avg. distance</dt>
					<dd>1.6 bil. km</dd>
				</div>
				<div>
					<dt>Est. travel time</dt>
					<dd>7 years</dd>
				</div>
			</dl>
		</div>
	</article>
</section>

<style>
	:global(body) {
		background-image: url('/static/assets/destination/background-destination-mobile.jpg');
		background-size: cover;
		background-position: center;
	}

	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas:
			'header'
			'tablist'
			'article';
		/*place-content: center;*/
		place-items: center;
		gap: 1rem;
	}
	section h1 {
		grid-area: header;
		margin: 1rem 0 2rem;
	}
	section article {
		--flow-space: 2rem;
		grid-area: article;
		display: grid;
		grid-template-columns: 1fr;
		place-items: center;
		gap: 2rem;
		text-align: center;
		width: 100%;
		animation: load-article 0.7s;
	}
	section article:not([data-selected='true']) {
		display: none;
	}
	section [role='tablist'] {
		position: sticky;
		top: 0;
		grid-area: tablist;
	}

	picture {
		display: inline-block;
		margin: 0 auto;
	}

	h2 {
		color: white;
		font-size: 3rem;
		text-align: center;
	}

	p {
		line-height: 1.8;
		color: hsl(var(--clr-light));
		margin-inline: auto;
	}

	hr {
		color: hsl(var(--clr-light), 0.2);
		margin: auto;
		height: 1px;
	}

	dl {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		text-transform: uppercase;
	}

	dl dt {
		color: hsl(var(--clr-light));
	}

	dl dd {
		color: white;
		font-size: 2rem;
	}

	@media screen and (min-width: 720px) {
		:global(body) {
			background-image: url('/static/assets/destination/background-destination-desktop.jpg');
		}

		section {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'header header'
				'. tablist'
				'article article';
			place-items: start;
			/*text-align: start;*/
		}

		section article {
			grid-template-columns: 1fr 1fr;
			place-items: start;
			text-align: start;
		}

		h2 {
			text-align: start;
		}

		p {
			margin-inline: revert;
		}

		dl {
			flex-direction: row;
		}
	}
</style>