// Basic Three.JS scene from documentation, importing Three.JS through a CDN 
// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene


//~~~~~~~Import Three.js (also linked to as import map in HTML)~~~~~~
import * as THREE from 'three';

// Import add-ons
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene, camera, renderer, cube, torus;

function init() {

	// ~~~~~~~~~~~~~~~~Set up~~~~~~~~~~~~~~~~
	scene = new THREE.Scene();

	const light = new THREE.DirectionalLight(0xffffff, 5);
	light.position.set(6, 10, 7);
	scene.add(light);

	// const helper = new THREE.DirectionalLightHelper(light, 5);
	// scene.add(helper);

	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);



	// ~~~~~~~~~~~~~~~~ Initiate add-ons ~~~~~~~~~~~~~~~~
	const controls = new OrbitControls(camera, renderer.domElement);
	const loader = new GLTFLoader(); // to load 3d models

	loader.load('assets/dog_shiny.gltf', function (gltf) {
		const dog = gltf.scene;
		scene.add(dog);
		dog.scale.set(3, 3, 3);
	});

	// ~~~~~~~~~~~~~~~~ Create scene here ~~~~~~~~~~~~~~~~
	// →→→→→→ Follow next steps in tutorial: 
	// // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
	const geometry = new THREE.BoxGeometry(1, 1, 1);
	// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

	const texture = new THREE.TextureLoader().load('textures/grasslight-big.jpg');
	const material = new THREE.MeshBasicMaterial({ map: texture });
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	const geometry2 = new THREE.TorusGeometry(10, 3, 16, 100);
	const material2 = new THREE.MeshBasicMaterial({ map: texture });
	torus = new THREE.Mesh(geometry2, material2);
	scene.add(torus);
	torus.scale.set(0.5, 0.5 , 0.5);

	camera.position.z = 5;

}

function animate() {
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
renderer.setAnimationLoop(animate);