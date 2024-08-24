<script setup>
// === IMPORT ===
import * as THREE from "three";

// === PROPS ===
const props = defineProps({
  scene: {
    type: Object,
    default: {},
  },
});

// === MOUNT ===
onMounted(() => {
  // Create a group for lights
  const lightGroup = new THREE.Group();
  lightGroup.name = "lights";

  // Diagonal spotlights
  const diagonalLight1 = new THREE.SpotLight("#ffffff", 30);
  diagonalLight1.position.set(-5, 10, 5);
  diagonalLight1.angle = 0.3;
  diagonalLight1.penumbra = 1;
  diagonalLight1.castShadow = true;
  lightGroup.add(diagonalLight1);

  const diagonalLight2 = new THREE.SpotLight("#ffffff", 30);
  diagonalLight2.position.set(5, -10, 8);
  diagonalLight2.angle = 0.3;
  diagonalLight2.penumbra = 1;
  diagonalLight2.castShadow = true;
  lightGroup.add(diagonalLight2);

  const diagonalLight3 = new THREE.SpotLight("#ffffff", 30);
  diagonalLight3.position.set(3, 12, 5);
  diagonalLight3.angle = 0.3;
  diagonalLight3.penumbra = 1;
  diagonalLight3.castShadow = true;
  lightGroup.add(diagonalLight3);

  const diagonalLight4 = new THREE.SpotLight("#ffffff", 30);
  diagonalLight4.position.set(10, 5, 5);
  diagonalLight4.angle = 0.3;
  diagonalLight4.penumbra = 1;
  diagonalLight4.castShadow = true;
  lightGroup.add(diagonalLight4);

  const diagonalLight5 = new THREE.SpotLight("#ffffff", 30);
  diagonalLight5.position.set(-10, -5, -5);
  diagonalLight5.angle = 0.3;
  diagonalLight5.penumbra = 1;
  diagonalLight5.castShadow = true;
  lightGroup.add(diagonalLight5);

  // Horizontal lights
  const horizontalLight1 = new THREE.SpotLight("#ffffff", 30);
  horizontalLight1.position.set(-8, 0, 5);
  horizontalLight1.angle = 0.3;
  horizontalLight1.penumbra = 1;
  horizontalLight1.castShadow = true;
  lightGroup.add(horizontalLight1);

  const horizontalLight2 = new THREE.SpotLight("#ffffff", 30);
  horizontalLight2.position.set(8, 0, 5);
  horizontalLight2.angle = 0.3;
  horizontalLight2.penumbra = 1;
  horizontalLight2.castShadow = true;
  lightGroup.add(horizontalLight2);

  // Vertical lights
  const verticalLight1 = new THREE.SpotLight("#ffffff", 30);
  verticalLight1.position.set(0, 12, 5);
  verticalLight1.angle = 0.3;
  verticalLight1.penumbra = 1;
  verticalLight1.castShadow = true;
  lightGroup.add(verticalLight1);

  const verticalLight2 = new THREE.SpotLight("#ffffff", 30);
  verticalLight2.position.set(0, -12, 5);
  verticalLight2.angle = 0.3;
  verticalLight2.penumbra = 1;
  verticalLight2.castShadow = true;
  lightGroup.add(verticalLight2);

  // Ambient light to soften shadows
  const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
  lightGroup.add(ambientLight);

  // Directional light for overall illumination
  const directionalLight = new THREE.DirectionalLight("#ffffff", 30);
  directionalLight.position.set(5, 10, 3);
  directionalLight.castShadow = true;
  lightGroup.add(directionalLight);

  // Front light with diagonal angle
  const frontLight = new THREE.SpotLight("#ffffff", 30);
  frontLight.position.set(3, 2, 5);
  frontLight.angle = 0.5;
  frontLight.penumbra = 1;
  frontLight.castShadow = true;
  lightGroup.add(frontLight);

  // Add the light group to the scene
  props.scene.add(lightGroup);
});
</script>

<template>
  <!-- The lights will be added directly to the scene in the setup function -->
</template>
