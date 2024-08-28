<script>
	import * as THREE from 'three';
    import {SVGLoader} from 'three/addons/loaders/SVGLoader.js'
    import {onMount, tick} from 'svelte';
	import { browser } from '$app/environment';
	//export const prerender = true;

	/**
	 * @param {object} svgCanvas
	 */
	let svgCanvas;

    export let svg;
    export let rotation;
    export let size;
    export let speed;

	onMount( async () => {

		const scene = new THREE.Scene();

        let perspective = window.innerWidth / window.innerHeight;
        if (window.innerWidth < 750) {
            perspective = 1.103;
        } else if(window.innerWidth > 1600) {
            perspective = 1.5;
        }

        const camera = new THREE.PerspectiveCamera( 75, perspective, 0.1, 1000 );

		//const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		const renderer = new THREE.WebGLRenderer({ antialias: true, canvas:svgCanvas });
		renderer.setSize( 320, 240 );
		renderer.setClearColor( 0xeffffe );

        let svgURL;
        let spec_svg = {svg}.svg;
        let spec_size = {size}.size;
        let spec_rotation = {rotation}.rotation;
        let spec_speed = {speed}.speed;
        let geometry;
        let exGeometry;

        if (spec_svg === 'golang') {
            svgURL = '/svg/Go_Logo_Blue.svg';
        } else if (spec_svg === 'nginx') {
            svgURL = '/svg/nginx.svg';
        } else if (spec_svg === 'mongodb') {
            svgURL = '/svg/mongodb.svg';
        } else if (spec_svg === 'csharp') {
            svgURL = '/svg/c-sharp.svg';
        } else if (spec_svg === 'java') {
            svgURL = '/svg/java-svgrepo-com.svg';
        } else if (spec_svg === 'docker') {
            svgURL = '/svg/docker.svg';
        } else if (spec_svg === 'kube') {
            svgURL = '/svg/Kubernetes.svg';
            renderer.setClearColor( 0xa0d0fe );
        } else {
            svgURL = '/svg/Postgresql_elephant.svg';
        }

        // SVG code icon loader and shaper
        //const svgGoPro = new SVGLoader().loadAsync(svgURL);
        const loader = new SVGLoader();
        const svg3D = new THREE.Group();

        let circMesh;
        let mesh_color = 0x30c0ff;

        // discworld for Go
        //const circ = new THREE.TorusKnotGeometry(100, 10.14159, 50, 10, 5);
        if (spec_svg === "golang") {
            const v1 = new THREE.Vector2(350, 450);
            const v2 = new THREE.Vector2(120, 50);
            const v3 = new THREE.Vector2(200, 300);
            const circ = new THREE.LatheGeometry([v1, v2, v3], 52, 15, 15);
            const circ_material = new THREE.MeshLambertMaterial({color: 0xe0efff, wireframe: true});
            //const circ_material = new THREE.MeshBasicMaterial( { color: 0x003f3f, wireframe: true } );
            circMesh = new THREE.Mesh(circ, circ_material);
            scene.add(circMesh);

            circMesh.position.x = 111;
            circMesh.position.y = 90;
            circMesh.position.z = -200;
            circMesh.rotation.z = -40;
            circMesh.rotation.x = -40;
        } else if (spec_svg === "kube") {
            geometry = new THREE.SphereGeometry(3);
            const wfGeometry = new THREE.WireframeGeometry(geometry);
            const material = new THREE.MeshBasicMaterial( { color: mesh_color, wireframe: true } );
            circMesh = new THREE.Mesh(wfGeometry, material);
            scene.add(circMesh);

            circMesh.scale.set(1.8, 1.8, 1.8);
            //torus.rotation.set(r_x, r_y, r_z);
            circMesh.position.set(-0.7, 0, -3);
        }

        // Meh
        let yAxis = new THREE.Vector3(0.0, 0.5, 0.0).normalize();
        let xyAxis = new THREE.Vector3(0.2, 0.5, 0.0).normalize();

        let svgColor;
       await loader.load(svgURL, function(svgGoPro) {

            const paths = svgGoPro.paths;

            for (let i = 0; i < paths.length; i++) {
                const path = paths[i];

                //console.log(path);
                if (spec_svg === "golang") {
                    svgColor = 0x0093ff;
                } else {
                    svgColor = path.color;
                }

                const material = new THREE.MeshBasicMaterial({color: svgColor, side: THREE.DoubleSide, depthWrite: false, wireframe: false});
                //const material = new THREE.MeshBasicMaterial({color: path.color, wireframe: true});

                const svgShapes = SVGLoader.createShapes(path);
                //const svgShapes = path.toShapes(true);

                for( let j = 0; j < svgShapes.length; j++) {
                    const svgShape = svgShapes[j];
                   //geometry = new THREE.ShapeGeometry( svgShape );
                    //exGeometry = new THREE.ExtrudeGeometry( svgShape, { curveSegments: 1, steps: 4, depth: 10, bevelEnabled: true, bevelThickness: 2, bevelSize: 2, bevelOffset: 1, bevelSegments: 10, amount: 10 });
                    exGeometry = new THREE.ExtrudeGeometry( svgShape, { depth: 15, bevelEnabled: true, curveSegments:10  });
                    //const svgMesh = new THREE.Mesh(geometry, material);

                    exGeometry.rotateX(Math.PI);
                    const svgMesh = new THREE.Mesh(exGeometry, material);

                    svg3D.add(svgMesh);
                }
            }

            // Properties

            if (spec_size === "" || typeof (spec_size) === 'undefined') {
                spec_size = 1.0;
            }

            if (spec_speed === "" || typeof (spec_speed) === 'undefined') {
                spec_speed = 0.05;
            }


            let r_x = 0.0;
            let r_y = 0.0;
            let r_z = 0.0;
            let p_x = 2.1;
            let p_y = 172.0;
            let p_z = 2.0;

            // SVG hack
            //svg3D.scale.y *= -1;

            scene.add(svg3D);

            if (spec_svg === "golang") {
                p_x = 2.1;
                p_y = 122.0;
                p_z = 2.0;
                //svg3D.scale.set(.4, .4, .4); // svg specifics
            } else if(spec_svg === "kube") {
                p_x = -57.1;
                p_y = 52.0;
                p_z = 12.0;
            }
           svg3D.scale.set(spec_size, spec_size, spec_size);
           //svg3D.rotation.set(r_x, r_y, r_z);
           svg3D.position.set(p_x, p_y, p_z);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff);
            directionalLight.position.set(10, 10, 20).normalize();
            scene.add(directionalLight);

            const pointLight = new THREE.PointLight(0xffffff, 5, 1);
            pointLight.position.set(10, 10, 20); // Set the position of the light
            scene.add(pointLight);

            if (spec_svg === "golang") {
                camera.position.x = 110;
                camera.position.y = 80;
                camera.position.z = 100;
            } else {
                //camera.position.x = 110;
                //camera.position.y = 80;
                camera.position.z = 5;
            }

           svg3D.position.z = -100;
           // circMesh.rotateOnAxis(yAxis, 0.01);
            let fro = false;
            renderer.setAnimationLoop(() => {

                if (spec_svg === "golang") {
                    if (circMesh.rotation.y <= 2 && circMesh.rotation.y > -7 && fro === false) {
                        circMesh.rotation.y += 0.01;
                        if (circMesh.rotation.y >= 2) {
                            fro = true;
                        }
                    } else if (fro === true) {
                        circMesh.rotateOnAxis(yAxis, 0.002);
                    }
                } else if (spec_svg === "kube") {
                    circMesh.rotation.x += 0.00;
                    circMesh.rotation.y += 0.005;
                    circMesh.position.z -= 0.15;

                }
                renderer.render(scene, camera);
            });


//            renderer.render(scene, camera);
        });

	});

</script>
<canvas bind:this={svgCanvas}></canvas>

<style>

	canvas {
		width:320px;
		height:300px;
		background-color: #eeeeee;
	}
</style>
