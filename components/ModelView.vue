<script setup>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Lights from "./Lights.vue";
import IPhone from "./IPhone.vue";
import gsap from "gsap";

// === PROPS ===
const props = defineProps({
  gsapType: {
    type: String,
    default: "view1",
  },
  index: {
    type: Number,
    default: 1,
  },
  groupRef: {
    type: Object,
    default: {},
  },
  controlRef: {
    type: Object,
    default: {},
  },
  setRotationState: {
    type: Function,
    default: () => {},
  },
  item: {
    type: Object,
    default: {},
  },
  size: {
    type: String,
    default: "small",
  },
});

// === REFS ===
const container = ref(null);
const canvas = ref(null);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = ref(null);
const controls = ref(null);
const modelGroup = new THREE.Group();

// === MOUNT ===
onMounted(() => {
  nextTick(() => {
    const width = container.value.clientWidth;
    const height = container.value.clientHeight;

    // Initialize the renderer
    renderer.value = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvas.value,
    });
    renderer.value.setSize(width, height);

    // Setup camera
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    camera.position.set(0, 0, 4);

    // Setup controls
    controls.value = new OrbitControls(camera, renderer.value.domElement);
    controls.value.enableZoom = false;
    controls.value.enablePan = false;
    controls.value.rotateSpeed = 0.4;
    controls.value.target.set(0, 0, 0);

    // Update rotation state when controls change
    controls.value.addEventListener("end", () => {
      props.setRotationState(controls.value.getAzimuthalAngle());
    });

    // Add model group to scene
    scene.add(modelGroup);
    scene.background = new THREE.Color("#101010");

    // Apply the initial scale
    updateModelScale(props.size);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.value.update(); // Update controls on each frame
      renderer.value.render(scene, camera);
    };
    animate();
  });
});

// === WATCHERS ===
watch(
  () => props.size,
  (newSize) => {
    animateScaleTransition(newSize);
  },
);

// === FUNCTIONS ===
const updateModelScale = (size) => {
  const scale = size === "large" ? 24 : 21;
  modelGroup.scale.set(scale, scale, scale);
};

const animateScaleTransition = (size) => {
  const newScale = size === "large" ? 24 : 21;
  gsap.to(modelGroup.scale, {
    duration: 1,
    x: newScale,
    y: newScale,
    z: newScale,
    ease: "power1.inOut",
  });
};
</script>

<template>
  <div
    ref="container"
    :id="props.gsapType"
    class="absolute size-full"
    :class="{ '-right-full': props.index === 2 }"
  >
    <!-- Lights -->
    <Lights :scene="scene" />

    <!-- Canvas for rendering the scene -->
    <canvas ref="canvas" class="size-full"></canvas>

    <!-- iPhone Model -->
    <IPhone
      :scale="modelScale"
      :item="props.item"
      :size="props.size"
      :group="modelGroup"
    />
  </div>
</template>
