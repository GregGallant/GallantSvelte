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

        const scene = new THREE.Scene();

        // Perspective Logging
        //console.log(window.innerWidth);
        //console.log(window.innerWidth / window.innerHeight);

        let perspective = window.innerWidth / window.innerHeight;

        if (window.innerWidth < 860) {
            perspective = 1.103;
        } else if (window.innerWidth > 1600) {
            perspective = 1.5;
        }

        const camera = new THREE.PerspectiveCamera(75, perspective, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({antialias: true, canvas: aCube});
        renderer.setSize(320, 240);
        renderer.setClearColor(0x31364c);


        let spec_mesh = {mesh}.mesh;
        let spec_size = {size}.size;
        let spec_rotation = {rotation}.rotation;
        let spec_speed = {speed}.speed;
        let geometry;
        let material;

        let memoryReady;
        let meshLoaded;

        let mesh_color = 0x00ff90;

        // CUSTOM MESHES
        if (spec_mesh === "torus") {
            geometry = new THREE.TorusKnotGeometry(3, 1, 100, 20, 6, 9);
        } else if (spec_mesh === "cylinder") {
            //geometry = new THREE.CylinderGeometry(2, 2, 3.2, 120, 40, false);
            geometry = new THREE.CylinderGeometry(2, 2, 3.2, 80);
            //renderer.setClearColor( 0x20304f );
            renderer.setClearColor(0xd0f0ff);
        } else if (spec_mesh === "tube") {
            let vec1 = new THREE.Vector3(3, 4, 15);
            let vec2 = new THREE.Vector3(10, 29, 25);
            let vec3 = new THREE.Vector3(40, 49, 55);
            let qbc = new THREE.QuadraticBezierCurve3(vec1, vec2, vec3);
            geometry = new THREE.TubeGeometry(qbc, 18, 20, 30);
        } else if (spec_mesh === "icos") {
            geometry = new THREE.IcosahedronGeometry(2.4, 10);
            //mesh_color = 0x30f0ff;
            mesh_color = 0x30a9cf;
            renderer.setClearColor(0xffebc6);
        } else {
            geometry = new THREE.SphereGeometry(3);
            mesh_color = 0x30f0cf;
        }

        const wfGeometry = new THREE.WireframeGeometry(geometry);

        if (spec_mesh === "cylinder") {
            material = new THREE.MeshPhongMaterial({color: 0xf0f0ff, wireframe: true});
        } else {
            material = new THREE.MeshBasicMaterial({color: mesh_color, wireframe: true});
        }

        const torus = new THREE.Mesh(wfGeometry, material);

        // Properties

        if (spec_size === "" || typeof (spec_size) === 'undefined') {
            spec_size = 0.7;
        }

        if (spec_speed === "" || typeof (spec_speed) === 'undefined') {
            spec_speed = 0.05;
        }

        let r_x = .08;
        let r_y = 0.8;
        let r_z = 0;
        let p_x = 0;
        let p_y = 0;
        let p_z = 0;


        scene.add(torus);

        meshLoaded = true;

        torus.scale.set(spec_size, spec_size, spec_size); // car
        torus.rotation.set(r_x, r_y, r_z);
        torus.position.set(p_x, p_y, p_z);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0x9f3fff);
        directionalLight.position.set(10, 10, 20).normalize();
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 5, 1);
        pointLight.position.set(10, 10, 20); // Set the position of the light
        scene.add(pointLight);

        camera.position.z = 5;
        //camera.position.z = 20;

        let aniFrame;
        let rspeed = .004;

        aCube.addEventListener('mouseout', (event) => {
            memoryReady = false;
            const sphereTimeout = setTimeout( () => {
                renderer.dispose();
                if (typeof (sphereTimeout) != 'undefined') {
                    clearTimeout(sphereTimeout);
                    rspeed = .004;
                }
            }, 5000);

            if (rspeed > 0) {
                rspeed = rspeed - .0005;
            } else {
                rspeed = rspeed + .0005;
            }
        });

            aCube.addEventListener('touchend', (event) => {
                memoryReady = false;
                const sphereTimeout = setTimeout( () => {
                    renderer.dispose();
                    if (typeof (sphereTimeout) != 'undefined') {
                        clearTimeout(sphereTimeout);
                        rspeed = .004;
                    }
                }, 5000);

                if (rspeed > 0) {
                    rspeed = rspeed - .0005;
                } else {
                    rspeed = rspeed + .0005;
                }
            });

        aCube.addEventListener('mousemove', (event) => {

            memoryReady = true;

                if (memoryReady === true && meshLoaded === true) {
                    aniFrame = renderer.setAnimationLoop(() => {
                        torus.rotation.x += 0.00;
                        if (rspeed > .004) {
                            rspeed = rspeed - .0001;
                        } else if (rspeed >= -.04 && rspeed < 0) {
                            rspeed = rspeed + .0001;
                        }

                        torus.rotation.y += rspeed;
                        renderer.render(scene, camera);
                    });
                }
        });

            aCube.addEventListener('touchmove', (event) => {

                memoryReady = true;

                if (memoryReady === true && meshLoaded === true) {
                    aniFrame = renderer.setAnimationLoop(() => {
                        torus.rotation.x += 0.00;
                        if (rspeed > .004) {
                            rspeed = rspeed - .0001;
                        } else if (rspeed >= -.04 && rspeed < 0) {
                            rspeed = rspeed + .0001;
                        }

                        torus.rotation.y += rspeed;
                        renderer.render(scene, camera);
                    });
                }
            });


            aCube.addEventListener('click', (event) => {
                memoryReady = true;

                if (rspeed === .004) {
                    rspeed = .04;
                } else if (rspeed === .04) {
                    rspeed = -.01;
                } else if (rspeed === -.01) {
                    rspeed = .004;
                } else {
                    rspeed = -.04;
                }

            });

        renderer.render(scene, camera);

    },
        function (xhr) {
      //      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            //     const percentComplete = (xhr.loaded / xhr.total) * 100;
            //    progressBar.value = percentComplete === Infinity ? 100 : percentComplete;
        },
        undefined, function (error) {
        console.log(error);
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
