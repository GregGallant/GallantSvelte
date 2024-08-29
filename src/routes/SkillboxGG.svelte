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
    let goanim = false;

    export let mesh;
    export let rotation;
    export let size;

	onMount( async () => {
		const loader = new GLTFLoader();
		const scene = new THREE.Scene();

        let perspective = window.innerWidth / window.innerHeight;
        if (window.innerWidth < 860) {
            perspective = 1.103;
        } else if(window.innerWidth > 1600) {
            perspective = 1.5;
        }

        const camera = new THREE.PerspectiveCamera( 75, perspective, 0.1, 1000 );

		const renderer = new THREE.WebGLRenderer({ antialias: true, canvas:aCube });
		renderer.setSize( 320, 240 );
        renderer.setAnimationLoop(); // wrap in timer or counter or something for memory
		renderer.setClearColor( 0x01061c );

		const geometry = new THREE.BoxGeometry( 2, 2, 2 );
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff90, wireframe: true } );
		const cube = new THREE.Mesh( geometry, material );

        const progressBar = document.getElementById('progressBar');

        let model1;
        let planeMesh;
        let memoryReady = false;
        let meshLoaded = false;

        let inWinLX;
        let inWinRX;
        let inWinTY;
        let inWinBY;
        let inX = true;
        let inY = true;
        let speed = .07;

        // Pointer and event
        let pointer = {
            x: -1,
            y: -1
        };

        let hwidth;
        let hheight;
        let fwidth;
        let fheight;

        aCube.addEventListener('mouseout', (event) => {
            goanim = false;
            fwidth = aCube.width;
            fheight = aCube.height;
            hwidth = aCube.width / 2;
            hheight = aCube.height / 2;
            pointer.x = -1;
            pointer.y = -1;
            if (memoryReady === false) {
                renderer.dispose();
            }
            memoryReady = false;
        });

        aCube.addEventListener('mousemove', (event) => {
            memoryReady = true;
            goanim = true;
            /*
            console.log(aCube.width);
            console.log(event.currentTarget.offsetLeft);
            console.log(event.clientX);
            console.log(window.innerWidth);
            console.log(window.scrollX);
            console.log(event.currentTarget.offsetTop);
            console.log(event.clientY);
            console.log(window.innerHeight);
            console.log(window.scrollY);
            */

            fwidth = aCube.width;
            fheight = aCube.height;
            hwidth = aCube.width / 2;
            hheight = aCube.height / 2;

            // X
            //console.log((event.clientX + window.scrollX) - event.currentTarget.offsetLeft);
            // Y
            //console.log((event.clientY + window.scrollY) - event.currentTarget.offsetTop);

            //console.log(window.innerWidth - event.currentTarget.offsetLeft);
            //console.log(window.innerWidth / event.currentTarget.offsetLeft);
            //console.log(event.currentTarget.offsetWidth);

            //console.log(window.screenX);
            //console.log(window.screenLeft);

            //console.log(event.currentTarget.clientX);
            //console.log(event.clientX - aCube.width);
            //console.log( (event.clientX / aCube.width) );
            //console.log(window.innerWidth / aCube.width);

            pointer.x = ((event.clientX + window.scrollX) - event.currentTarget.offsetLeft);
            pointer.y = ((event.clientY + window.scrollY) - event.currentTarget.offsetTop);
            //pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            //pointer.y = (event.clientY / window.innerHeight) * 2 + 1;


            if (memoryReady === true && meshLoaded === true) {

                renderer.setAnimationLoop( () => {

                    // out of bounds reset
                    if (goanim === false && pointer.x === -1 && pointer.y === -1) {
                        //console.log('x: ' + model1.position.x);
                        //console.log('y: ' + model1.position.y);
                        if (model1.position.x < -0.08) {
                            model1.position.x += speed;
                        } else if (model1.position.x > 0.08) {
                            model1.position.x -= speed;
                        } else {

                            // Standing position
                            model1.position.x = 0;
                            model1.position.z = 0;
                            //renderer.render( scene, camera );
                            //return;
                        }

                        if (model1.position.y < -0.08) {
                            model1.position.y += speed;
                        } else if (model1.position.y > 0.08) {
                            model1.position.y -= speed;
                        } else {
                            // Standing position
                            model1.position.y = 0;
                            model1.position.z = 0;
                        }

                        // Rotation
                        if (model1.rotation.y <= -.015) {
                            model1.rotation.y += .015;
                        } else {
                            model1.rotation.y = 0;
                            memoryReady = false;
                        }

                        scene.remove(planeMesh);
                        planeMesh.position.x = 0;
                        planeMesh.position.y = 0;
                        planeMesh.position.z = -5;
                        planeMesh.rotation.x = -20;

                        renderer.render( scene, camera );
                        return;

                    } else {

                        // on a plane
                        scene.add(planeMesh);

                        planeMesh.position.z += .05;
                        planeMesh.position.y -= .05;


                        // Dir. Bounds
                        inWinLX = pointer.x >= 0 && pointer.x < hwidth;
                        inWinRX = pointer.x > hwidth && pointer.x < fwidth;
                        inWinBY = pointer.y >= 0 && pointer.y < hheight;
                        inWinTY = pointer.y > hheight && pointer.y < fheight;

                        //console.log('yo: ' +hwidth);

                        // Basic Controls...
                        if (inWinLX && inY) {
                            if (model1.position.x >= -3) {
                                model1.position.x -= speed;
                            }
                        } else if (inWinRX && inY) {
                            if (model1.position.x < 3) {
                                model1.position.x += speed;
                            }
                        }

                        if (inWinTY && inX) {
                            if (model1.position.y >= -3) {
                                model1.position.y -= speed;
                            }
                        } else if (inWinBY && inX) {
                            if (model1.position.y < 3) {
                                model1.position.y += speed;
                            }
                        }

                        // Z-index and y-rotation
                        if (model1.rotation.y < -3.05) {
                            model1.position.z -= .0025;
                            model1.rotation.y += (speed - .05);
                        } else if (model1.rotation.y > -3.05) {
                            model1.position.z += .0015;
                            model1.rotation.y -= (speed - .05);
                        }
                        // Render
                        //console.log("x: " + pointer.x);
                        //console.log("mx: " + model1.position.x);
                        // console.log("y: " + pointer.y);
                        //console.log("my: " + model1.position.y);
                    }

                    renderer.render( scene, camera );

                });
            }
        });


        let murl;
        let spec_mesh = {mesh}.mesh;
        let spec_size = {size}.size;
        let spec_rotation = {rotation}.rotation;
        //console.log({mesh}.mesh);

        // Properties
        if (spec_mesh === "" || typeof(spec_mesh) === 'undefined') {
            murl = '/models/spaceshipTests/spaceship.gltf';
        } else {
            murl = '/models/'+spec_mesh+'/scene.gltf';
        }

        if (spec_size === "" || typeof(spec_size) === 'undefined') {
            spec_size = 0.7;
        }

        let r_x = 0.5;
        let r_y = 0.0;
        let r_z = 0.0;
        let p_x = 0;
        let p_y = 0;
        let p_z = 0;

        // LOADING
        const url = murl;
		await loader.load(url, function(glb) {

			model1 = glb.scene;

            meshLoaded = true;

            //progressBar.style.display = 'none';
			//const model2 = new THREE.Mesh(model1, material);
			scene.add(model1);

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

            //model1.position.x = -0.8;
            // model1.position.y = 0.0;


            const plane = new THREE.PlaneGeometry(30, 50, 25, 25);
            const plane_material = new THREE.MeshBasicMaterial( { color: 0x00ffcf, wireframe: true } );
            planeMesh = new THREE.Mesh(plane, plane_material);

            planeMesh.position.x = 0;
            planeMesh.position.y = 0;
            planeMesh.position.z = -5;
            //planeMesh.position.z = 0;
            planeMesh.rotation.x = -20;

            renderer.render( scene, camera );

		    },
            function (xhr) {
                //console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
           //     const percentComplete = (xhr.loaded / xhr.total) * 100;
            //    progressBar.value = percentComplete === Infinity ? 100 : percentComplete;
            },
			undefined, function (error) {
				console.log(error);
		});
		camera.position.z = 5;

		function animateCube() {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;

			renderer.render( scene, camera );
		}

		animateCube()
	});

</script>
<canvas bind:this={aCube}></canvas>

<style>

	canvas {
		width:320px;
		height:240px;
		background-color: #eeeeee;
	}
</style>
