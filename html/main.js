

var scene,camera,renderer,cube,plane,spotLight,axisHelper,player;

function initScene(){
	scene = new THREE.Scene();
    //camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var screenRatio=window.innerWidth /window.innerHeight;
    camera = new THREE.OrthographicCamera( 20*screenRatio/ - 2, 20*screenRatio/ 2,
                                          20 / 2, 20 / - 2,
                                          0.1, 1000 );
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth-4, window.innerHeight-4 );
	renderer.shadowMap.enabled = true;
	document.body.appendChild( renderer.domElement );

	var cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
	var cubeMaterial = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
	cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
	cube.castShadow = true;
  cube.position.z=5.0;
  cube.position.y=5.0;

	scene.add( cube );

  axisHelper=new THREE.AxesHelper();
  scene.add(axisHelper);

  var playerGeometry= new THREE.BoxGeometry(0.5,2,0.5);
  var playerMaterial= new THREE.MeshLambertMaterial({color: 0x00ff00});
  player = new THREE.Mesh(playerGeometry,playerMaterial);
  player.position.y=1.0;
  player.castShadow=true;
  scene.add(player);

	var planeGeometry = new THREE.PlaneGeometry(50, 50, 1, 1);
	var planeMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
  plane = new THREE.Mesh( planeGeometry, planeMaterial );

	plane.rotation.x = -0.5 * Math.PI;
  plane.position.z = 0;
	plane.receiveShadow = true; 
	scene.add( plane );

  camera.position.set( player.position.x+20, player.position.y+20, player.position.z+20 );
  camera.lookAt( player.position );
	
	
	spotLight = new THREE.SpotLight( 0xffffff );
	spotLight.position.set( -50, 50, 50 );
	spotLight.castShadow = true;
	scene.add( spotLight ); 
}

initScene();

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
};

document.addEventListener('keydown', function(event) {
    var cameraSpeed=0.5;
    switch (event.key) {
        case "ArrowDown":
          player.position.z+=cameraSpeed;
          player.position.x+=cameraSpeed;
          camera.position.set(player.position.x+20,player.position.y+20,player.position.z+20);
          break;
        case "ArrowUp":
          player.position.z-=cameraSpeed;
          player.position.x-=cameraSpeed;
          camera.position.set(player.position.x+20,player.position.y+20,player.position.z+20);
          break;
        case "ArrowLeft":
          player.position.z+=cameraSpeed;
          player.position.x-=cameraSpeed;
          camera.position.set(player.position.x+20,player.position.y+20,player.position.z+20);
          break;
        case "ArrowRight":
          player.position.z-=cameraSpeed;
          player.position.x+=cameraSpeed;
          camera.position.set(player.position.x+20,player.position.y+20,player.position.z+20);
          break;
        default:
          return;
      }
});

animate();
