const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// ------------- Set renderer-------------
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
let angle = 0;

// // ---------------Light----------------
const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
pointLight.position.set(40, 80, 4);
pointLight.castShadow = true; // default false
pointLight.shadow.mapSize.width = 2048;
pointLight.shadow.mapSize.height = 2048;
scene.add(pointLight);

//0.6
const ambientLight = new THREE.AmbientLightProbe(0xffffff, 0.6);
ambientLight.position.set(40, 80, 4);
scene.add(ambientLight);



//----------------Floor------------------
const tilesTexture = new THREE.TextureLoader().load("textures/floor.png");
tilesTexture.wrapS = THREE.RepeatWrapping;
tilesTexture.wrapT = THREE.RepeatWrapping;
tilesTexture.repeat.set(15, 15);
tilesTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

let floor = new THREE.PlaneGeometry(40, 42);
const floorMaterial = new THREE.MeshStandardMaterial({
  map: tilesTexture,
});
floor = new THREE.Mesh(floor, floorMaterial);
floor.rotation.x = (-90 * Math.PI) / 180;
floor.receiveShadow = true; //default
scene.add(floor);


//--------------Book-------------------

const bookTexture = new THREE.TextureLoader().load("textures/pages.jpeg");
bookTexture.wrapS = THREE.RepeatWrapping;
bookTexture.wrapT = THREE.RepeatWrapping;
bookTexture.repeat.set(1, 1);
bookTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const bookMaterial = new THREE.MeshStandardMaterial({
  map: bookTexture,
});

let bookpage = new THREE.BoxGeometry(3, 4, 1);
bookpage = new THREE.Mesh(bookpage, bookMaterial);
bookpage.position.set(1.9, 2, 1.72);
bookpage.castShadow = true;
scene.add(bookpage);
//------------Bookpageside------------
const bookpageTexture = new THREE.TextureLoader().load("textures/page.jpg");
bookpageTexture.wrapS = THREE.RepeatWrapping;
bookpageTexture.wrapT = THREE.RepeatWrapping;
bookpageTexture.repeat.set(1, 1);
bookpageTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const bookpageMaterial = new THREE.MeshStandardMaterial({
  map: bookpageTexture,
});

let booksidepage = new THREE.BoxGeometry(0.01, 4, 1);
booksidepage = new THREE.Mesh(booksidepage, bookpageMaterial);
booksidepage.position.set(3.4, 2, 1.72);
booksidepage.castShadow = true;
scene.add(booksidepage);

//-----------------Book Back Cover------------
const bookcoverTexture = new THREE.TextureLoader().load("textures/bookcover.png");
bookcoverTexture.wrapS = THREE.RepeatWrapping;
bookcoverTexture.wrapT = THREE.RepeatWrapping;
bookcoverTexture.repeat.set(1, 1);
bookcoverTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const bookCoverMaterial = new THREE.MeshStandardMaterial({
  map: bookcoverTexture,
});

let bookcover = new THREE.BoxGeometry(3, 4, 0.1);
bookcover = new THREE.Mesh(bookcover, bookCoverMaterial);
bookcover.position.set(1.9, 2, 1.2);
bookcover.castShadow = true;
scene.add(bookcover);

//------------Cube--------------
let cubematerial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
})
let cube = new THREE.BoxGeometry(.01,.01,.01);
cube = new THREE.Mesh(cube, cubematerial);
cube.position.set(0.4, 2, 2.3);
cube.castShadow = true;
scene.add(cube);

//-----------------Book front Cover------------
const bookfrontTexture = new THREE.TextureLoader().load("textures/bookfrontcover.png");
bookfrontTexture.wrapS = THREE.RepeatWrapping;
bookfrontTexture.wrapT = THREE.RepeatWrapping;
bookfrontTexture.repeat.set(1, 1);
bookfrontTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const bookfrontMaterial = new THREE.MeshStandardMaterial({
  map: bookfrontTexture,
});

let bookfront = new THREE.BoxGeometry(3, 4, 0.1);
bookfront = new THREE.Mesh(bookfront, bookfrontMaterial);
bookfront.position.set(1.5,0,0);
bookfront.castShadow = true;
cube.add(bookfront);
// cube.rotation.y = +4;

//-----------------------Bookside--------------
const booksideTexture = new THREE.TextureLoader().load("textures/booksidecover.png");
booksideTexture.wrapS = THREE.RepeatWrapping;
booksideTexture.wrapT = THREE.RepeatWrapping;
booksideTexture.repeat.set(1, 1);
booksideTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const booksideMaterial = new THREE.MeshStandardMaterial({
  map: booksideTexture,
});

let bookside = new THREE.BoxGeometry(0.1, 4, 1.12);
bookside = new THREE.Mesh(bookside, booksideMaterial);
bookside.position.set(0.4, 2, 1.8);
bookside.castShadow = true;
scene.add(bookside);
//------------Book Pages--------------
const writtenpageTexture = new THREE.TextureLoader().load("textures/pagewrite.jpg");
writtenpageTexture.wrapS = THREE.RepeatWrapping;
writtenpageTexture.wrapT = THREE.RepeatWrapping;
writtenpageTexture.repeat.set(1, 1);
writtenpageTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
const writtenPageMaterial = new THREE.MeshStandardMaterial({
  map: writtenpageTexture,
});

let writtenPage = new THREE.BoxGeometry(3, 4, 0.1);
writtenPage = new THREE.Mesh(writtenPage, writtenPageMaterial);
writtenPage.position.set(1.9, 2, 2.22);
writtenPage.castShadow = true;
scene.add(writtenPage);

 
// -----------------Camera----------------
let cameraRotationVarX = 0.3;
let cameraRotationVarY = 0.3;
let cameraPositionX = 30;
let cameraPositionY = 50;
let cameraPositionZ = 20;

const camera = new THREE.PerspectiveCamera(
  60,
  sizes.width / sizes.height,
  8,
  130
);
camera.position.x = Math.sin(cameraRotationVarX) * cameraPositionX;
camera.position.y = Math.sin(cameraRotationVarY) * cameraPositionY;
camera.position.z = Math.cos(cameraRotationVarY) * Math.cos(cameraRotationVarX) * cameraPositionZ;
camera.lookAt(0, 5, 0);
scene.add(camera);

//Orbit controls
// const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.update();

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
renderer.setClearColor(0xffffff, 1);
renderer.clear();

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  renderer.render(scene, camera);
  
  requestAnimationFrame(loop);
};

loop();

var clock = new THREE.Clock();

function lightMove() {
  const time = clock.getElapsedTime();

  pointLight.position.x = Math.sin(time) * 80;
  pointLight.position.y = 60;
  pointLight.position.z = Math.cos(time) * 80;

  //showpiece.rotation.y += 0.01;

  requestAnimationFrame(lightMove);
}

lightMove();

function moveCamera() {
  camera.position.x = Math.sin(cameraRotationVarX) * cameraPositionX;
  if (Math.sin(cameraRotationVarY) * 50 > 1){
    camera.position.y = Math.sin(cameraRotationVarY) * cameraPositionY;
  }
  camera.position.z = Math.cos(cameraRotationVarY) * Math.cos(cameraRotationVarX) * cameraPositionZ;
  camera.lookAt(0, 5, 0);
  renderer.render(scene, camera);
}

document.onkeydown = checkKey;

function checkKey(e) {
  if (e.keyCode == "38") {
    // up key
    cameraRotationVarY += 0.03;
    
    moveCamera();
  } else if (e.keyCode == "40") {
    // down arrow
    cameraRotationVarY -= 0.03;
    
    moveCamera();
  } else if (e.keyCode == "37") {
    // left arrow
    cameraRotationVarX += 0.03;
    moveCamera();
  } else if (e.keyCode == "39") {
    // right arrow
    cameraRotationVarX -= 0.03;
    moveCamera();
  }
}
let f1 = 0;
let f2 = 0;
// --------------For changing table texture with mouseclick--------------
addEventListener("click", (event) => {
  
  if (f1 <= 7 && f2 == 0){
    cube.rotation.y -= 0.3;
    f1 += 1;
  }else{
    cube.rotation.y += 0.3;
    f1 -= 1;
  }
  if(f1 == 7){
    f2 = 1;
  }
  if(f1 == 0){
    f2 = 0;
  }

});
