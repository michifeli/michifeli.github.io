<main>
	<section class="hero">
		<div class="intro">
			<div class="greeting">
				<span class="hi">Saludos, terrícola 🖖</span>
				<h1>
					Mitchel Rojas
					<span class="alias">(aunque todos me dicen <strong>michi</strong>)</span>
				</h1>
			</div>
			<p class="bio">
				Avocado a GNU/Linux y el Open Source. Estudiante de Ingeniería.
				Trato de hacer cosas simples y minimalistas.
			</p>
		</div>
	</section>

	<section class="section">
		<h2 class="section-title">Writing</h2>
		<ul class="post-list">
			<li class="post-item">
				<span class="post-date">2026</span>
				<a href="/blog/minimalismo-digital" class="post-title">Minimalismo digital en la era de la distracción</a>
				<span class="post-min">4min</span>
			</li>
		</ul>
	</section>

	<section class="section">
		<h2 class="section-title">Projects</h2>
		<ul class="post-list">
			<li class="post-item">
				<span class="post-date">2026</span>
				<a href="https://github.com/michifeli/webv2" class="post-title">webv2</a>
				<span class="post-desc">Este sitio web, hecho con SvelteKit</span>
			</li>
            <li class="post-item">
				<span class="post-date">2025</span>
				<a href="https://github.com/michifeli/chiledev" class="post-title">chiledev</a>
				<span class="post-desc">Tecnologías más demandadas en Chile</span>
			</li>

            <li class="post-item">
                <span class="post-date">2025</span>
                <a href="https://github.com/michifeli/webv1" class="post-title">webv1</a>
                <span class="post-desc">La primera versión de mi web, hecho con Astro</span>
			</li>
            <li class="post-item">
				<span class="post-date">2025</span>
				<a href="https://github.com/michifeli/michidots" class="post-title">michidots</a>
				<span class="post-desc">Dotfiles suckless sin sacrificar lo moderno</span>
			</li>
			<li class="post-item">
				<span class="post-date">2025</span>
				<a href="https://github.com/michifeli/hyprdots" class="post-title">hyprdots</a>
				<span class="post-desc">Mis dotfiles de Hyprland para Arch Linux</span>
			</li>

			<li class="post-item">
				<span class="post-date">2025</span>
				<a href="https://github.com/michifeli/miauni" class="post-title">miauni</a>
				<span class="post-desc">App Flutter para finanzas universitarias</span>
			</li>
			<li class="post-item">
				<span class="post-date">2024</span>
				<a href="https://github.com/michifeli/DEgraph" class="post-title">DEgraph</a>
				<span class="post-desc">Graficador de ecuaciones diferenciales en C++</span>
			</li>
			<li class="post-item">
				<span class="post-date">2024</span>
				<a href="https://github.com/michifeli/WSPi" class="post-title">WSPi</a>
				<span class="post-desc">Cripto tracker en Raspberry Pi</span>
			</li>
		</ul>
	</section>
</main>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 3rem;
	}

	.intro {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.greeting {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.greeting h1 {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0;
		color: var(--text, #ececec);
		display: flex;
		align-items: baseline;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.hi {
		font-size: 1rem;
		color: var(--text-muted, #a0a0a0);
		margin: 0;
		line-height: 1;
	}

	.alias {
		font-size: 0.8rem;
		font-weight: 400;
		color: var(--text-muted, #a0a0a0);
	}

	.alias strong {
		color: var(--text, #ececec);
	}

	.bio {
		margin: 0;
		color: var(--text-muted, #a0a0a0);
		font-size: 1rem;
		line-height: 1.5;
	}

	.section {
		margin-top: 3rem;
	}

	.section-title {
		font-size: 0.85rem;
		font-weight: 400;
		color: var(--text-muted, #a0a0a0);
		margin: 0 0 1rem 0;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.post-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.post-item {
		display: grid;
		grid-template-columns: 3rem 1fr auto;
		gap: 1rem;
		align-items: baseline;
	}

	.post-date {
		font-size: 0.85rem;
		color: var(--text-muted, #a0a0a0);
		font-variant-numeric: tabular-nums;
	}

	.post-title {
		color: var(--text, #ececec);
		text-decoration: none;
		transition: color 0.2s;
		border-bottom: none !important;
	}

	.post-title:hover {
		color: var(--text-muted, #a0a0a0);
		border-bottom: none !important;
	}

	.post-min {
		font-size: 0.85rem;
		color: var(--text-muted, #a0a0a0);
		font-variant-numeric: tabular-nums;
		text-align: right;
	}

	.post-desc {
		font-size: 0.85rem;
		color: var(--text-muted, #a0a0a0);
		text-align: right;
	}
</style>