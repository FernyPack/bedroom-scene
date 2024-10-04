// Sscene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB); // Light blue background

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Floor
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xD2B48C });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Bed and mattress
const bedGeometry = new THREE.BoxGeometry(1.5, 0.2, 2);
const bedMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
bed.position.set(0, 0.5, -1);
scene.add(bed);

const mattressGeometry = new THREE.BoxGeometry(1.4, 0.1, 1.8);
const mattressMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
const mattress = new THREE.Mesh(mattressGeometry, mattressMaterial);
mattress.position.set(0, 0.7, -1);
scene.add(mattress);

// Pillows
const pillowGeometry = new THREE.BoxGeometry(0.5, 0.1, 0.5);
const pillowMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });

const pillow1 = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow1.position.set(-0.35, 0.9, -1);
scene.add(pillow1);

const pillow2 = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow2.position.set(0.35, 0.9, -1);
scene.add(pillow2);

// Walls
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xA9A9A9 });

const frontWallGeometry = new THREE.PlaneGeometry(10, 3);
const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
frontWall.position.set(0, 1.5, -5);
scene.add(frontWall);

const backWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
backWall.position.set(0, 1.5, 5);
backWall.rotation.y = Math.PI;
scene.add(backWall);

const leftWallGeometry = new THREE.PlaneGeometry(10, 3);
const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWall.position.set(-5, 1.5, 0);
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

const rightWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
rightWall.position.set(5, 1.5, 0);
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

// Window frames and panes
const frameThickness = 1;
const windowFrameGeometry = new THREE.BoxGeometry(1.6, 1.1, frameThickness);
const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });

const leftWindowFrame = new THREE.Mesh(windowFrameGeometry, frameMaterial);
leftWindowFrame.position.set(-5.4, 1.5, -1);
leftWindowFrame.rotation.y = Math.PI / 2;
scene.add(leftWindowFrame);

const paneThickness = 0.05;
const windowPaneGeometry = new THREE.BoxGeometry(paneThickness, 1, 1.4);
const paneMaterial = new THREE.MeshStandardMaterial({ color: 0x87CEEB, transparent: true, opacity: 0.5 });

const leftPane = new THREE.Mesh(windowPaneGeometry, paneMaterial);
leftPane.position.set(-4.8 - (paneThickness / 2), 1.5, -0.9);
scene.add(leftPane);

const rightWindowFrame = new THREE.Mesh(windowFrameGeometry, frameMaterial);
rightWindowFrame.position.set(5.4, 1.5, -1);
rightWindowFrame.rotation.y = -Math.PI / 2;
scene.add(rightWindowFrame);

const rightPane = new THREE.Mesh(windowPaneGeometry, paneMaterial);
rightPane.position.set(4.8 + (paneThickness / 2), 1.5, -0.9);
scene.add(rightPane);

// Ceiling
const ceilingGeometry = new THREE.PlaneGeometry(10, 10);
const ceilingMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFDD0 });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.rotation.x = Math.PI / 2;
ceiling.position.set(0, 3, 0);
scene.add(ceiling);

// Lamp and light
const lampGroup = new THREE.Group();

const lampGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const lampMaterial = new THREE.MeshStandardMaterial({ color: 0xFFD700 });
const lamp = new THREE.Mesh(lampGeometry, lampMaterial);
lampGroup.add(lamp);

const lampLight = new THREE.PointLight(0xFFFFFF, 1, 15);
lampLight.position.set(0, -1, 0);
lampGroup.add(lampLight);

lampGroup.position.set(0, 3.1, 0);
scene.add(lampGroup);

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Furniture group (table and chair)
const furnitureGroup = new THREE.Group();

// Table
const tableGeometry = new THREE.BoxGeometry(2, 0.1, 1.5);
const tableMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
const table = new THREE.Mesh(tableGeometry, tableMaterial);
table.position.set(-4, 0.05, -1);
furnitureGroup.add(table);

// Computer
const computerBodyGeometry = new THREE.BoxGeometry(1, 0.5, 0.1 / 2);
const computerBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const computerBody = new THREE.Mesh(computerBodyGeometry, computerBodyMaterial);
computerBody.position.set(-4.2, 0.3, -1);
furnitureGroup.add(computerBody);

const monitorGeometry = new THREE.BoxGeometry(1, 0.1 / 2, 0.5);
const monitorMaterial = new THREE.MeshStandardMaterial({ color: 0x1E1E1E });
const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
monitor.position.set(-4.2, 0.1, -1.25);
furnitureGroup.add(monitor);

// Table legs
const legGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.1);
const legMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });

const leg1 = new THREE.Mesh(legGeometry, legMaterial);
leg1.position.set(-4.65, -0.25, -1);
furnitureGroup.add(leg1);

const leg2 = new THREE.Mesh(legGeometry, legMaterial);
leg2.position.set(-4.65, -0.25, -0.5);
furnitureGroup.add(leg2);

const leg3 = new THREE.Mesh(legGeometry, legMaterial);
leg3.position.set(-3.35, -0.25, -1);
furnitureGroup.add(leg3);

const leg4 = new THREE.Mesh(legGeometry, legMaterial);
leg4.position.set(-3.35, -0.25, -0.5);
furnitureGroup.add(leg4);

// Chair
const chair = new THREE.Group();

const chairSeatGeometry = new THREE.BoxGeometry(0.6, 0.1, 0.6);
const chairSeatMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
const chairSeat = new THREE.Mesh(chairSeatGeometry, chairSeatMaterial);
chairSeat.position.set(-4.6, 0.05, -2);
chair.add(chairSeat);

const chairLeg1 = new THREE.Mesh(legGeometry, legMaterial);
chairLeg1.position.set(-4.85, -0.25, -2);
chair.add(chairLeg1);

const chairLeg2 = new THREE.Mesh(legGeometry, legMaterial);
chairLeg2.position.set(-4.85, -0.25, -1.4);
chair.add(chairLeg2);

const chairLeg3 = new THREE.Mesh(legGeometry, legMaterial);
chairLeg3.position.set(-4.35, -0.25, -2);
chair.add(chairLeg3);

const chairLeg4 = new THREE.Mesh(legGeometry, legMaterial);
chairLeg4.position.set(-4.35, -0.25, -1.4);
chair.add(chairLeg4);

const backrestGeometry = new THREE.BoxGeometry(0.6, 0.5, 0.1);
const backrestMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
backrest.position.set(-4.6, 0.25, -2.2);
chair.add(backrest);

furnitureGroup.add(chair);
chair.position.set(0.5, 0, 0);

// Add furniture group
scene.add(furnitureGroup);
furnitureGroup.position.set(0.5, .5, 0);

// Create a group for the electric fan
const eFan = new THREE.Group();
const bladeFan = new THREE.Group();

// Create the base of the fan
const baseGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.02, 32); // Base size
const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black color for the base
const base = new THREE.Mesh(baseGeometry, baseMaterial);
base.position.set(-3.8, 0.01, -1); // Position next to the table
eFan.add(base); // Add the base to the fan group

// Create the pole of the fan
const poleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.5, 32); // Pole size
const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 }); // Black color for the pole
const pole = new THREE.Mesh(poleGeometry, poleMaterial);
pole.position.set(-3.8, 0.25, -1); // Position above the base
eFan.add(pole); // Add the pole to the fan group

// Create the head of the fan
const headGeometry = new THREE.SphereGeometry(0.1, 32, 32); // Fan head size
const headMaterial = new THREE.MeshStandardMaterial({ color: 0x1E1E1E }); // Dark gray color for the fan head
const head = new THREE.Mesh(headGeometry, headMaterial);
head.position.set(-3.8, 0.5, -1); // Position above the pole
eFan.add(head); // Add the head to the fan group

// Create fan blades
const bladeGeometry = new THREE.BoxGeometry(0.1, 0.01, 0.3); // Blade size
const bladeMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF }); // White color for the blades

// Create three fan blades
const blade1 = new THREE.Mesh(bladeGeometry, bladeMaterial);
blade1.position.set(0, 0, 0.15); // Center the blade at the fan hub
blade1.rotation.z = Math.PI / 2; // Adjust to make blade face outward
bladeFan.add(blade1); // Add first blade to the fan group

const blade2 = new THREE.Mesh(bladeGeometry, bladeMaterial);
blade2.position.set(0, 0, 0.15); // Same center
blade2.rotation.z = Math.PI / 2; // Adjust to match first blade
blade2.rotation.y = (2 * Math.PI) / 3; // Rotate 120 degrees around Y-axis
bladeFan.add(blade2); // Add second blade to the fan group

const blade3 = new THREE.Mesh(bladeGeometry, bladeMaterial);
blade3.position.set(0, 0, 0.15); // Same center
blade3.rotation.z = Math.PI / 2; // Adjust to match first blade
blade3.rotation.y = -(2 * Math.PI) / 3; // Rotate -120 degrees around Y-axis
bladeFan.add(blade3); // Add third blade to the fan group

// Position for blades
bladeFan.rotation.x = Math.PI / 2;
bladeFan.position.set(-3.8, 0.65, -0.9);

// Add blade group to the fan
eFan.add(bladeFan);

// Position eFan
eFan.position.set(2, 0, -1);

// Add the eFan group to the scene
scene.add(eFan);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Adjust camera position
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);
