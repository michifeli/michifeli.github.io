<svelte:head>
	<title>Para ti</title>
</svelte:head>

<div class="container">
	<svg viewBox="0 0 100 100" class="rose-svg">
		<path class="draw-line" d="M50,90 Q45,70 50,50" />
		<path class="draw-line" d="M50,70 Q65,65 60,55 Q45,60 50,70" />
		<path class="draw-line" d="M50,50 Q30,30 50,15 Q70,30 50,50" />
		<path class="draw-line" d="M50,50 Q20,40 35,25 Q50,40 50,50" />
		<path class="draw-line" d="M50,50 Q80,40 65,25 Q50,40 50,50" />
	</svg>
	<p class="fade-in-text">Para melinita</p>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		background-color: #111;
		color: white;
		font-family: 'Caveat', cursive, sans-serif;
	}

	.rose-svg {
		width: 200px;
		height: 200px;
		fill: none;
		stroke: #f763bf; /* Color rosado */
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.draw-line {
		stroke-dasharray: 200;
		stroke-dashoffset: 200;
		animation: draw 4s ease-in-out forwards;
	}

	/* Retrasamos algunas partes para que parezca que se dibuja en orden */
	.draw-line:nth-child(1) {
		animation-delay: 0s;
	}
	.draw-line:nth-child(2) {
		animation-delay: 1.5s;
	}
	.draw-line:nth-child(3) {
		animation-delay: 3s;
	}
	.draw-line:nth-child(4) {
		animation-delay: 4.5s;
	}
	.draw-line:nth-child(5) {
		animation-delay: 4.5s;
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	.fade-in-text {
		opacity: 0;
		font-size: 2rem;
		margin-top: 2rem;
		animation: fadeIn 2s ease-in forwards;
		animation-delay: 6s; /* Aparece después de que la rosa termina */
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
</style>
