var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMapEnabled = true;
document.body.appendChild( renderer.domElement );

var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
var cubeMaterial = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
var cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
cube.castShadow = true;
scene.add( cube );


var planeGeometry = new THREE.PlaneGeometry(50, 50, 1, 1);
var planeMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
var plane = new THREE.Mesh( planeGeometry, planeMaterial );

plane.rotation.x = -0.4 * Math.PI;
plane.position.z = -5;
plane.receiveShadow = true; 
scene.add( plane );

camera.position.z = 5;


var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( -50, 50, 50 );
spotLight.castShadow = true;
scene.add( spotLight ); 


var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();
