import Movements from "./movements.js";

// Declaration of a new scebe wuth Threee.js
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcce6ff);

// Camera and renderer configuration
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Setting the scene light
const ambient_light = new THREE.AmbientLight(0xbda355, 0.5);
const directional_light = new THREE.DirectionalLight(0xffffff, 1);
ambient_light.add( directional_light );
scene.add( ambient_light );

/* // Setting up flat space of Metaverse
const geometry_space = new THREE.BoxGeometry(100, 0.2, 50);
const material_scene = new THREE.MeshPhongMaterial({color: 0xe0e0eb});
const space = new THREE.Mesh(geometry_space, material_scene);
scene.add(space); */

/* // Setting up flat space of Metaverse
const geometry_space2 = new THREE.BoxGeometry(0.2, 100, 50);
const material_scene2 = new THREE.MeshPhongMaterial({color: 0xffffff});
const space2 = new THREE.Mesh(geometry_space2, material_scene2);
scene.add(space2); */

// Cube
const geometry = new THREE.BoxGeometry( 1, 1, 1,2,2,2 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

camera.position.set(10, 5, 40);

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
        // Movement to the left
    if (Movements.isPressed(37)) {
        camera.position.x -= 0.5;
    }
    // Upward movement
    if (Movements.isPressed(38)) {
        camera.position.x += 0.5;
        camera.position.y += 0.5;
    }
    // Movement to the right
    if (Movements.isPressed(39)) {
        camera.position.x += 0.5;
    }
    // Downward movement
    if (Movements.isPressed(40)) {
        camera.position.x -= 0.5;
        camera.position.y -= 0.5;
    }
	renderer.render( scene, camera );
}
animate();

