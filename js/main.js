//  Event Listener for Loading Page
window.addEventListener("load", function() {
  const loader = document.querySelector(".loadingBar");
  loader.className += " hidden";
});

// variable to attach scene to
const container = document.querySelector('.sceneContainer');

/****** GLOBAL VARIABLES ******/

const scene = new THREE.Scene(); // variable for the scene itself
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  // variable for perspective within the scene
const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true}); // canvas element to display the scene
const domEvents = new THREEx.DomEvents(camera, renderer.domElement);

/****** 3D Landing ******/

// sets size of the scene
renderer.setSize(window.innerWidth,window.innerHeight);

// sets the color of the scene
renderer.setClearColor(0x262626, 0.5);

// attach scene to the DOM
container.appendChild(renderer.domElement);

// event listener/response to resizing of window
window.addEventListener('resize', function() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// 3D controls
controls = new THREE.OrbitControls(camera, renderer.domElement);

// create the shape
var geometry = new THREE.BoxGeometry(20, 20, 20);

// Sets the images as the faces of the cube
const aboutCubeMaterial =
  [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/about.jpg'), side: THREE.DoubleSide}), // Right Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/about.jpg'), side: THREE.DoubleSide}), // Left Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/about.jpg'), side: THREE.DoubleSide}), // Top Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/about.jpg'), side: THREE.DoubleSide}), // Bottom Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/about.jpg'), side: THREE.DoubleSide}), // Front Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/about.jpg'), side: THREE.DoubleSide}) // Back Side
  ];

const servicesCubeMaterial =
  [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/services.jpg'), side: THREE.DoubleSide}), // Right Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/services.jpg'), side: THREE.DoubleSide}), // Left Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/services.jpg'), side: THREE.DoubleSide}), // Top side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/services.jpg'), side: THREE.DoubleSide}), // Bottom Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/services.jpg'), side: THREE.DoubleSide}), //Front Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/services.jpg'), side: THREE.DoubleSide}) // Back Side
  ];

const pricingCubeMaterial =
  [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/pricing.jpg'), side: THREE.DoubleSide}), // Right Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/pricing.jpg'), side: THREE.DoubleSide}), // Left Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/pricing.jpg'), side: THREE.DoubleSide}), // Top side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/pricing.jpg'), side: THREE.DoubleSide}), // Bottom Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/pricing.jpg'), side: THREE.DoubleSide}), //Front Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/pricing.jpg'), side: THREE.DoubleSide}) // Back Side
  ];

const contactCubeMaterial =
  [
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/contact.jpg'), side: THREE.DoubleSide}), // Right Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/contact.jpg'), side: THREE.DoubleSide}), // Left Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/contact.jpg'), side: THREE.DoubleSide}), // Top side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/contact.jpg'), side: THREE.DoubleSide}), // Bottom Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/contact.jpg'), side: THREE.DoubleSide}), //Front Side
    new THREE.MeshBasicMaterial({map: new THREE.TextureLoader().load('img/contact.jpg'), side: THREE.DoubleSide}) // Back Side
  ];

// create a material, color or image texture
const aboutMaterial = new THREE.MeshFaceMaterial( aboutCubeMaterial);
const servicesMaterial = new THREE.MeshFaceMaterial(servicesCubeMaterial);
const pricingMaterial = new THREE.MeshFaceMaterial(pricingCubeMaterial);
const contactMaterial = new THREE.MeshFaceMaterial(contactCubeMaterial);

// variables for each cube
const aboutCube = new THREE.Mesh(geometry, aboutMaterial);
const servicesCube = new THREE.Mesh(geometry, servicesMaterial);
const pricingCube = new THREE.Mesh(geometry, pricingMaterial);
const contactCube = new THREE.Mesh(geometry, contactMaterial);

// set position of cubes within scene
aboutCube.position.x = -60;
servicesCube.position.x = -20;
pricingCube.position.x = 20;
contactCube.position.x = 60;

// animate scrolling, event listeners for cubes and nav links
domEvents.addEventListener(aboutCube, 'touchstart', function() {
  const about = $('#aboutSection').position().top;

  $('html, body').animate(
    {
      scrollTop: about
    },
    2500
  );
});

domEvents.addEventListener(aboutCube, 'click', function() {
  const about = $('#aboutSection').position().top;

  $('html, body').animate(
    {
      scrollTop: about
    },
    2500
  );
});

domEvents.addEventListener(servicesCube, 'click', function() {
  const services = $('#servicesSection').position().top;

  $('html, body').animate(
    {
      scrollTop: services
    },
    2500
  );
});

domEvents.addEventListener(servicesCube, 'touchstart', function() {
  const services = $('#servicesSection').position().top;

  $('html, body').animate(
    {
      scrollTop: services
    },
    2500
  );
});

domEvents.addEventListener(pricingCube, 'click', function() {
  const pricing = $('#pricingSection').position().top;

  $('html, body').animate(
    {
      scrollTop: pricing
    },
    3000
  );
});

domEvents.addEventListener(pricingCube, 'touchstart', function() {
  const pricing = $('#pricingSection').position().top;

  $('html, body').animate(
    {
      scrollTop: pricing
    },
    3000
  );
});

domEvents.addEventListener(contactCube, 'click', function() {
  const contact = $('footer').position().top;

  $('html, body').animate(
    {
      scrollTop: contact
    },
    3500
  );
});

domEvents.addEventListener(contactCube, 'touchstart', function() {
  const contact = $('footer').position().top;

  $('html, body').animate(
    {
      scrollTop: contact
    },
    3500
  );
});

// add the cube to the scene
scene.add(aboutCube);
scene.add(servicesCube);
scene.add(pricingCube);
scene.add(contactCube);

// set camera position
camera.position.z = 70;

// game logic
var update = function() {

};

// draw scene
var render = function () {
  renderer.render(scene, camera);
};

// run game loop (update, render, repeat)
var GameLoop = function() {
  requestAnimationFrame(GameLoop);
  update();
  render();
};

// initializes the scene
GameLoop();

$(function() {
  $('.carousel').carousel({
    interval: 5000
  })
});
