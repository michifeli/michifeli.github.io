<script lang="ts">
	import { onMount } from 'svelte';
	import { animate, stagger } from 'animejs';

	interface Branch {
		id: number;
		path: string;
		strokeWidth: number;
	}

	interface Petal {
		id: number;
		cx: number;
		cy: number;
		size: number;
		fallDelay: number;
	}

	let leftBranches: Branch[] = $state([]);
	let rightBranches: Branch[] = $state([]);
	let leftPetals: Petal[] = $state([]);
	let rightPetals: Petal[] = $state([]);
	let leftSvg: SVGSVGElement;
	let rightSvg: SVGSVGElement;

	// Genera un árbol sakura recursivo
	function generateSakura(
		x: number,
		y: number,
		angle: number,
		length: number,
		depth: number,
		maxDepth: number,
		id: { value: number },
		branches: Branch[],
		petals: Petal[]
	) {
		if (depth > maxDepth || length < 8) return;

		const rad = (angle * Math.PI) / 180;
		const endX = x + Math.cos(rad) * length;
		const endY = y + Math.sin(rad) * length;

		// Curva bezier para rama orgánica
		const ctrlX = x + Math.cos(rad) * length * 0.5 + (Math.random() - 0.5) * 20;
		const ctrlY = y + Math.sin(rad) * length * 0.5 + (Math.random() - 0.5) * 10;

		branches.push({
			id: id.value++,
			path: `M ${x} ${y} Q ${ctrlX} ${ctrlY} ${endX} ${endY}`,
			strokeWidth: Math.max(0.5, 3 - depth * 0.5)
		});

		// Pétalos solo en las puntas finales de las ramas (reducido para performance)
		if (depth >= 4 && Math.random() > 0.4) {
			const petalCount = 2 + Math.floor(Math.random() * 2);
			for (let i = 0; i < petalCount; i++) {
				const angle = (i / petalCount) * Math.PI * 2;
				const dist = 2 + Math.random() * 3;
				petals.push({
					id: id.value++,
					cx: endX + Math.cos(angle) * dist,
					cy: endY + Math.sin(angle) * dist,
					size: 2 + Math.random() * 3,
					fallDelay: Math.random() * 2
				});
			}
		}

		// Sub-ramas
		const branchCount = depth < 2 ? 3 : 2;
		for (let i = 0; i < branchCount; i++) {
			const spread = 25 + Math.random() * 20;
			const newAngle = angle + (i - (branchCount - 1) / 2) * spread + (Math.random() - 0.5) * 20;
			const newLength = length * (0.65 + Math.random() * 0.2);
			generateSakura(endX, endY, newAngle, newLength, depth + 1, maxDepth, id, branches, petals);
		}
	}

	function animateSvg(svg: SVGSVGElement) {
		const branches = svg.querySelectorAll('.branch');
		const petals = svg.querySelectorAll('.petal');

		// Configurar dasharray para cada rama
		branches.forEach((branch) => {
			const length = (branch as SVGPathElement).getTotalLength();
			(branch as SVGPathElement).style.strokeDasharray = String(length);
			(branch as SVGPathElement).style.strokeDashoffset = String(length);
		});

		// Animar ramas - construcción rápida (~2 segundos total)
		animate(branches, {
			strokeDashoffset: 0,
			ease: 'outSine',
			duration: 400,
			delay: stagger(15)
		});

		// Animar pétalos - aparecen rápido después de las ramas
		animate(petals, {
			opacity: [0, 0.85],
			ease: 'outQuad',
			duration: 300,
			delay: stagger(8, { start: 400 })
		});

		// Calcular cuándo termina la construcción del árbol
		const totalBuildTime = 400 + branches.length * 15 + 300 + petals.length * 8;

		// Caída de pétalos - usar CSS classes para mejor rendimiento
		setTimeout(() => {
			svg.classList.add('falling');
		}, totalBuildTime + 3000);
	}

	function startSakuraCycle() {
		const idCounter = { value: 0 };
		const tempLeftBranches: Branch[] = [];
		const tempRightBranches: Branch[] = [];
		const tempLeftPetals: Petal[] = [];
		const tempRightPetals: Petal[] = [];

		// Sakura izquierdo - crece desde arriba hacia abajo (más profundidad y largo)
		generateSakura(
			0,
			0,
			70 + Math.random() * 15,
			70 + Math.random() * 20,
			0,
			7,
			idCounter,
			tempLeftBranches,
			tempLeftPetals
		);

		// Sakura derecho - crece desde arriba hacia abajo (más profundidad y largo)
		generateSakura(
			350,
			0,
			95 + Math.random() * 15,
			70 + Math.random() * 20,
			0,
			7,
			idCounter,
			tempRightBranches,
			tempRightPetals
		);

		leftBranches = tempLeftBranches;
		rightBranches = tempRightBranches;
		leftPetals = tempLeftPetals;
		rightPetals = tempRightPetals;

		// Quitar la clase de caída si existe
		if (leftSvg) leftSvg.classList.remove('falling');
		if (rightSvg) rightSvg.classList.remove('falling');

		// Esperar a que el DOM se actualice
		requestAnimationFrame(() => {
			if (leftSvg) animateSvg(leftSvg);
			if (rightSvg) animateSvg(rightSvg);
		});

		// Calcular el tiempo total de animación
		const buildTime = 400 + tempLeftBranches.length * 15 + 300 + tempLeftPetals.length * 8;
		const fallTime = 2000; // 2s de caída
		const waitAfterFall = 10000; // 10s pelado

		// Cuando termina la caída, reiniciar el ciclo
		setTimeout(
			() => {
				if (leftSvg) leftSvg.classList.remove('falling');
				if (rightSvg) rightSvg.classList.remove('falling');
				// Limpiar ramas y pétalos para que quede pelado
				leftPetals = [];
				rightPetals = [];
				// Esperar 10s y volver a generar
				setTimeout(() => {
					startSakuraCycle();
				}, waitAfterFall);
			},
			buildTime + 3000 + fallTime
		);
	}

	onMount(() => {
		startSakuraCycle();
	});
</script>

<div class="sakura-container" aria-hidden="true">
	<svg
		bind:this={leftSvg}
		class="sakura left"
		viewBox="-50 -20 400 700"
		preserveAspectRatio="xMinYMin slice"
	>
		{#each leftBranches as branch (branch.id)}
			<path
				d={branch.path}
				stroke="#8B5A2B"
				stroke-width={branch.strokeWidth}
				stroke-linecap="round"
				fill="none"
				class="branch"
			/>
		{/each}
		{#each leftPetals as petal (petal.id)}
			<circle
				cx={petal.cx}
				cy={petal.cy}
				r={petal.size}
				fill="#F763BF"
				class="petal"
				opacity="0"
				style="--fall-delay: {petal.fallDelay}s; --fall-x: {(Math.random() - 0.5) * 100}px"
			/>
		{/each}
	</svg>

	<svg
		bind:this={rightSvg}
		class="sakura right"
		viewBox="-50 -20 400 700"
		preserveAspectRatio="xMaxYMin slice"
	>
		{#each rightBranches as branch (branch.id)}
			<path
				d={branch.path}
				stroke="#8B5A2B"
				stroke-width={branch.strokeWidth}
				stroke-linecap="round"
				fill="none"
				class="branch"
			/>
		{/each}
		{#each rightPetals as petal (petal.id)}
			<circle
				cx={petal.cx}
				cy={petal.cy}
				r={petal.size}
				fill="#F763BF"
				class="petal"
				opacity="0"
				style="--fall-delay: {petal.fallDelay}s; --fall-x: {(Math.random() - 0.5) * 100}px"
			/>
		{/each}
	</svg>
</div>

<style>
	.sakura-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		z-index: 0;
		overflow: visible;
	}

	.sakura {
		position: absolute;
		top: 0;
		height: 100%;
		width: calc((100vw - 720px) / 2);
		min-width: 150px;
		overflow: visible;
	}

	.sakura.left {
		left: 0;
	}

	.sakura.right {
		right: 0;
	}

	.branch {
		opacity: 0.8;
	}

	.petal {
		transform-origin: center;
	}

	@keyframes fall {
		to {
			transform: translateY(500px) translateX(var(--fall-x, 0));
			opacity: 0;
		}
	}

	:global(.sakura.falling) .petal {
		animation: fall 2s ease-in forwards;
		animation-delay: var(--fall-delay, 0s);
	}

	@media (max-width: 900px) {
		.sakura-container {
			display: none;
		}
	}
</style>
