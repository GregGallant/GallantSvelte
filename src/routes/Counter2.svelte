<script>
	import { spring } from 'svelte/motion';
	import {onMount} from 'svelte';
	import * as THREE from 'three';
	import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
	import { browser } from '$app/environment';

	export const prerender = true;

	let count = 0;

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	/**
	 * @param {number} n
	 * @param {number} m
	 */
	function modulo(n, m) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}

	/**
	 * @param {object} aCube
	 */
	let aCube;

	onMount( () => {

		const loader = new GLTFLoader();

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		const renderer = new THREE.WebGLRenderer({ antialias: true, canvas:aCube });
		//renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setSize( 640, 480 );
		renderer.setAnimationLoop( animateCube );
		renderer.setClearColor( 0xe9f3fc );
		//document.body.appendChild( renderer.domElement );

		const geometry = new THREE.BoxGeometry( 2, 2, 2 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff90, wireframe: true } );
		const cube = new THREE.Mesh( geometry, material );

		//scene.add( cube );

		//const url = window.URL.createObjectURL(new Blob([i3model]));

		//const url = '/models/recordplayer/scene.gltf';
		//const url = '/models/earth2.glb';
		const url = '/models/vehicle1/scene.gltf';

		loader.load(url, function(glb) {

			const model1 = glb.scene;
			//const model2 = new THREE.Mesh(model1, material);
			scene.add(model1);

			//const model1 = new THREE.Mesh(modela, material);
			//model1.MeshBasicMaterial( {wireframe: true });
			//set({wireframe: true});
//			model1.scale.set(1.5, 1.5, 1.5); // rplayer
			model1.scale.set(0.7, 0.7, 0.7); // car
			model1.rotation.set(0.5, 0.2, 0.0);
			model1.position.set(-0.8, 0, 0);
			model1.material = material; // check...
			renderer.setAnimationLoop( () => {
				model1.rotation.x += 0.00;
				model1.rotation.y += 0.01;
				renderer.render( scene, camera );
			});

		},
			undefined, function (error) {
				console.log(error);
		});

		const light = new THREE.DirectionalLight( 0xf0f0f0, 0.5 );
		//light.position.set(10.5, 10.2, 0.5);
		//light.scale.set(5, 5, 5);
		scene.add( light );

		camera.position.z = 5;


		function animateLoadedMesh(eglb) {
			eglb.rotation.x += 0.01;
			eglb.rotation.y += 0.01;
			renderer.render( scene, camera );
		}

		function animateCube() {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render( scene, camera );
		}

		animateCube()
	});

</script>
<canvas bind:this={aCube}></canvas>
<div class="counter">
	<button on:click={() => (count -= 1)} aria-label="Decrease the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5" />
		</svg>
	</button>

	<div class="counter-viewport">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong>{Math.floor($displayed_count)}</strong>
		</div>
	</div>

	<button on:click={() => (count += 1)} aria-label="Increase the counter by one">
		<svg aria-hidden="true" viewBox="0 0 1 1">
			<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
		</svg>
	</button>
</div>

<style>
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}

	canvas {
		width:640px;
		height:480px;
		background-color: #000030;
	}
</style>
