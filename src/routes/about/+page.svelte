<script lang="ts">
	const avatarUrl = 'https://avatars.githubusercontent.com/u/108637663?v=4';
</script>

<svelte:head>
	<title>About - Mitchel Rojas</title>
	<meta name="description" content="Sobre Mitchel Rojas - Desarrollador y entusiasta de Linux" />
</svelte:head>

<section class="about">
	<h1>About</h1>

	<a href="https://github.com/michifeli" target="_blank" rel="noopener noreferrer">
		<img src={avatarUrl} alt="Mitchel Rojas" class="avatar" />
	</a>

	<p>
		Soy un desarrollador entusiasta y técnico electrónico basado en 
		<a href="https://es.wikipedia.org/wiki/Chile" target="_blank" rel="noopener noreferrer">Chile 🇨🇱</a>, 
		apasionado por crear cosas útiles para el mundo y compartir mi conocimiento con los demás.
	</p>

	<p>
		Cuando era más niño, me pasaba mis tardes en el internet viendo videos en Youtube, 
		hasta que un día descubrí un video que hablaba sobre 
		<a href="https://ssd.eff.org/es" target="_blank" rel="noopener noreferrer">privacidad de datos y anonimato en internet</a>. 
		Desde entonces, me interesé en la cultura hacker como una manera de salvaguardar mi privacidad e identidad digital.
	</p>

	<p>
		Como no sabía nada le pedí a un técnico que instalara Linux, me cobró algo de 20 dólares 
		(no sabía que era tan simple como bootear un USB). Elegí 
		<a href="https://www.kali.org/" target="_blank" rel="noopener noreferrer">Kali Linux</a> como 
		primera distribución, porque era Hacker y ¿quién no quiere ser hacker a tus 16 años?
	</p>

	<p>
		Actualmente estudio Ingeniería Civil Telemática en la Universidad Técnica 
		Federico Santa María, donde trato de pasar los ramos de plan común y cuando tengo tiempo 
		complemento mi formación con proyectos bacanes de código abierto.
	</p>

	<p>
		En mis veranos trabajo como Técnico Electrónico que es una de mis otras habilidades, que estudié en el liceo de mi comuna. Realmente no me gusta tanto, a no ser que sean temas de IoT, pero me ayuda a estar más en contacto con lo físico y lo tangible.
	</p>

	<p>
		Cofundé <a href="https://lyoss.org" target="_blank" rel="noopener noreferrer">Lyoss USM</a>, 
		una comunidad dedicada a promover Linux y a realizar proyectos open source para el bien 
		común en la universidad.
	</p>
</section>

<section class="experience">
	<h2>Experiencia</h2>

	<ul>
		<li>
			Ayudante de Cátedra en Proyecto Inicial, ayudando a estudiantes de telemática y plan común 
			en sus primeros pasos en ingeniería, impulsando proyectos innovadores.
		</li>
		<li>
			Trabajé como Documentador IA en 
			<a href="http://axiovista.com/" target="_blank" rel="noopener noreferrer">Axiovista</a>, 
			donde realicé documentación técnica que sirve de entrenamiento para modelos de 
			Inteligencia Artificial.
		</li>
		<li>
			Colaborador y desarrollador de sistemas de telemetría e IoT para 
			monitoreo hídrico rural en <a href="https://prommra.cl" target="_blank" rel="noopener noreferrer">PROMMRA</a> (Universidad de la Serena). 
			Reparación, mantención e instalación de equipos electrónicos.
		</li>
		<li>
			Soporte TI en la Ilustre Municipalidad de Ovalle, 
			brindando soporte al usuario final, mantención de hardware y software 
			en dependencias municipales.
		</li>
	</ul>
</section>

<style>
	.about {
		margin-top: 3rem;
	}

	.about h1 {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 0 0.25rem 0;
		color: var(--text, #ececec);
	}

	.avatar {
		float: right;
		width: 12rem;
		height: 12rem;
		border-radius: 50%;
		object-fit: cover;
		object-position: bottom;
		margin-top: 0.5rem;
		margin-left: 1.25rem;
		margin-bottom: 1.25rem;
		background: var(--border, #3a3a3a);
	}

	.about p {
		margin: 1.25rem 0;
		color: var(--text-muted, #a0a0a0);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.about a,
	.experience a {
		color: #F763BF;
		border-bottom: 1px solid #F763BF50;
		text-decoration: none;
		transition: border-color 0.2s;
	}

	.about a:hover,
	.experience a:hover {
		border-color: #F763BF;
	}

	.experience {
		margin-top: 2rem;
	}

	.experience h2 {
		font-size: 1.25rem;
		font-weight: 700;
		margin: 2rem 0 1rem 0;
		color: var(--text, #ececec);
	}

	.experience ul {
		list-style: none;
		padding: 0;
		margin: 1.25rem 0;
	}

	.experience li {
		position: relative;
		padding-left: 1rem;
		margin: 0.5rem 0;
		color: var(--text-muted, #a0a0a0);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.experience li::before {
		content: '–';
		position: absolute;
		left: 0;
		color: var(--text-muted, #a0a0a0);
	}

	@media (max-width: 640px) {
		.avatar {
			float: none;
			display: block;
			width: 12rem;
			height: 12rem;
			margin: 0.5rem auto 1.25rem auto;
		}
	}
</style>