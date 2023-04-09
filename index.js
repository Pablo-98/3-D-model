//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scne = new THREE.Scene();

// to render any kind of 3d element we are always gonna need 3 things:
//we always need a screen object, a camera , and a renderer

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);

let object;

let controls;

let objToRender = 'girl';

const loader = new GLTFLoader;

loader.load(
    `girl/${objToRender}/scene.gltf`,
    function(gltf) {
        object = gltf.scene;
        scene.add(object);
    },
    function(xhr) {
        console.log((xhr.loaded / xhr.total + 100) + '% loaded');
    },
    function (error) {
        console.log(error);
    }
);

const renderer = new THREE.webGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container#D)").appendChild(renderer.domElement);

camera.position.z = objToRender === "girl" ? 25: 500;

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500,500,500)
topLight.castShadow = true;
scene.add(topLight);

const ambienLight = new THREE.AmbientLight(0x333333, objToRender === "girl" ? 5: 1);
scene.add(ambientLight);

if (objToRender === "girl") {
    controls = new OrbitControls(camera, renderer.domElement);

}

function animate() {
    requestAnimationFrame(animate);

}
    //Add a listener to the window, so we can resize the window and the camera
    window.addEventListener("resize", function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    //add mouse position listener, so we can make the eye move
    document.onmousemove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    
    //Start the 3D rendering
    animate();
