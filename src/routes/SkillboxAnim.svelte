<script>
	import * as THREE from 'three';
	import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
    import {onMount, tick} from 'svelte';
	import { browser } from '$app/environment';
	//export const prerender = true;

	/**
	 * @param {object} aCube
	 */
	let aCube;
    export let mesh;
    export let rotation;
    export let size;
    export let speed;

	onMount( async () => {
		const loader = new GLTFLoader();

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		const renderer = new THREE.WebGLRenderer({ antialias: true, canvas:aCube });
		//renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setSize( 320, 240 );
//		renderer.setAnimationLoop( animateCube );
		renderer.setClearColor( 0xe1e6fc );
		//document.body.appendChild( renderer.domElement );

		const geometry = new THREE.BoxGeometry( 2, 2, 2 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff90, wireframe: true } );
		const cube = new THREE.Mesh( geometry, material );

		//scene.add( cube );
		//const url = window.URL.createObjectURL(new Blob([i3model]));

        let murl;
        let spec_mesh = {mesh}.mesh;
        let spec_size = {size}.size;
        let spec_rotation = {rotation}.rotation;
        let spec_speed = {speed}.speed;

        console.log({mesh}.mesh);

        // Properties
        if (spec_mesh === "" || typeof(spec_mesh) === 'undefined') {
            murl = '/models/vehicle1/scene.gltf';
        } else {
            murl = '/models/'+spec_mesh+'/scene.gltf';
        }

        if (spec_size === "" || typeof(spec_size) === 'undefined') {
            spec_size = 0.7;
        }

        if (spec_speed === "" || typeof(spec_speed) === 'undefined') {
            spec_speed = 0.05;
        }


        let r_x = 0;
        let r_y = -0.5;
        let r_z = 0;
        let p_x = 0;
        let p_y = 0;
        let p_z = 0;

        // TODO: add params
        if (spec_mesh === "ocean") {

            r_x = 0;
            r_y = -0.5;
            r_z = 0;
            p_x = 0;
            p_y = 0;
            p_z = 0;
        } else {
            r_x = 0;
            r_y = -0.5;
            r_z = 0;
            p_x = 0;
            p_y = -2.3;
            p_z = 0;
        }
            //p_x = 2;
            //p_y = 2.3;
            //p_z = 2;

        // LOADING
        const url = murl;
		await loader.load(url, function(gltf) {

			const model1 = gltf.scene;

            let animations = [];
            animations = gltf.animations;
            const mixer = new THREE.AnimationMixer(model1);

            console.log(animations);
            let clip = THREE.AnimationClip.findByName(animations, "root_wave|root_waveAction");

            scene.add(model1);

            //const action = mixer.clipAction(animations[0]);
            //action.push(action)
            //  const clips = gltf.animations;

            animations.forEach(function(clip) {
               mixer.clipAction(clip).play();
            });

            //const action = mixer.clipAction(clip);
            //action.play();

            //model1.tick = (delta) => mixer.update(delta);

			//const model1 = new THREE.Mesh(modela, material);
			//model1.MeshBasicMaterial( {wireframe: true });
            //model1.scale.set(1.5, 1.5, 1.5); // rplayer
		    //model1.scale.set(0.7, 0.7, 0.7); // car

            model1.scale.set(spec_size, spec_size, spec_size); // car

            model1.rotation.set(r_x, r_y, r_z);

            model1.position.set(p_x, p_y, p_z);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff);
            directionalLight.position.set(10, 10, 20).normalize();
            scene.add(directionalLight);

            const pointLight = new THREE.PointLight(0xffffff, 5, 1);
            pointLight.position.set(10, 10, 20); // Set the position of the light
            scene.add(pointLight);
/*
            if (spec_rotation !== "none") {
			    renderer.setAnimationLoop( () => {
			    	model1.rotation.x += 0.00;
			    	model1.rotation.y += 0.01;
			    	renderer.render( scene, camera );
			    });
            } else {
 */
           const animateWaves = () => {
               let clock = new THREE.Clock();
               //console.log(clock.getDelta());
               mixer.update(spec_speed);
               renderer.render( scene, camera );
           };

            renderer.setAnimationLoop( () => {
                animateWaves();
            });

		},
			undefined, function (error) {
				console.log(error);
		});

		camera.position.z = 5;
/*

		function animateCube() {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;


			renderer.render( scene, camera );
		}

		animateCube()
 */
	});

</script>
<canvas bind:this={aCube}></canvas>

<style>

	canvas {
		width:320px;
		height:300px;
		background-color: #eeeeee;
	}
</style>
