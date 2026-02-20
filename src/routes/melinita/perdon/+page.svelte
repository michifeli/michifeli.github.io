<script>
	import { onMount } from 'svelte';

	// Estado para saber si ya te perdonó
	let forgiven = false;

	// Lógica del botón escurridizo
	let btnNoStyle = 'top: 60%; left: 70%; transform: translate(-50%, -50%);';
	let containerWidth;
	let containerHeight;

	function dodge() {
		if (!containerWidth || !containerHeight) return;
		const padding = 80;
		const newX = Math.floor(Math.random() * (containerWidth - padding * 2)) + padding;
		const newY = Math.floor(Math.random() * (containerHeight - padding * 2)) + padding;
		btnNoStyle = `top: ${newY}px; left: ${newX}px; transform: translate(-50%, -50%);`;
	}

	function handleForgive() {
		forgiven = true;
	}

	// Generamos 20 globitos/corazones con posiciones y retrasos aleatorios
	const balloons = Array.from({ length: 20 }, () => ({
		left: Math.random() * 100, // Posición horizontal (%)
		delay: Math.random() * 2, // Retraso de la animación (segundos)
		emoji: ['🎈', '💖', '✨', '🥺'][Math.floor(Math.random() * 4)] // Emojis al azar
	}));
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div
	class="apology-container"
	bind:clientWidth={containerWidth}
	bind:clientHeight={containerHeight}
>
	{#if !forgiven}
		<h1 class="title">melinita me perdonas</h1>

		<div class="actions">
			<button class="btn btn-yes" on:click={handleForgive}> Sí, te perdono </button>
		</div>

		<button
			class="btn btn-no"
			style={btnNoStyle}
			on:mouseenter={dodge}
			on:touchstart|preventDefault={dodge}
			on:click|preventDefault={dodge}
		>
			No, bobo
		</button>
	{:else}
		<h1 class="title success-title">grasias tqm &lt;3</h1>

		{#each balloons as balloon}
			<div class="floating-emoji" style="left: {balloon.left}%; animation-delay: {balloon.delay}s;">
				{balloon.emoji}
			</div>
		{/each}
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');

	.apology-container {
		position: relative;
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.03);
	}

	.title {
		font-family: 'Caveat', cursive;
		font-size: 4rem;
		color: #f763bf;
		margin-bottom: 3rem;
		text-align: center;
		z-index: 2;
	}

	.success-title {
		font-size: 5rem;
		animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
	}

	.btn {
		font-size: 1.2rem;
		padding: 1rem 2rem;
		border-radius: 2rem;
		border: none;
		cursor: pointer;
		font-weight: bold;
		color: #1c1c1c;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
	}

	.btn-yes {
		background: #a5d6a7;
		transition:
			transform 0.2s ease,
			background 0.2s ease;
		z-index: 10;
		position: relative;
	}

	.btn-yes:hover {
		transform: scale(1.1);
		background: #81c784;
	}

	.btn-no {
		background: #f8bbd0;
		position: absolute;
		transition:
			top 0.3s cubic-bezier(0.25, 1, 0.5, 1),
			left 0.3s cubic-bezier(0.25, 1, 0.5, 1);
		z-index: 5;
	}

	/* --- ANIMACIONES DE CELEBRACIÓN --- */

	.floating-emoji {
		position: absolute;
		bottom: -50px;
		font-size: 2.5rem;
		user-select: none;
		animation: floatUp 4s linear infinite;
		opacity: 0;
		z-index: 1;
	}

	@keyframes floatUp {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
		}
		100% {
			transform: translateY(-80vh) rotate(360deg); /* Sube hasta arriba dando vueltas */
			opacity: 0;
		}
	}

	@keyframes popIn {
		0% {
			transform: scale(0.5);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
