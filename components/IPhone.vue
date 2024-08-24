<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

// === PROPS ===
const props = defineProps({
  scale: {
    type: Array,
    default: () => [1, 1, 1],
  },
  item: {
    type: Object,
    default: () => ({}),
  },
  size: {
    type: String,
    default: "",
  },
  group: {
    type: Object,
    required: true,
  },
});

// Refs
const materials = ref({});
const nodes = ref({});

// Functions
const loadModel = () => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    "/models/scene.glb",
    (gltf) => {
      // Clear existing objects
      while (props.group.children.length > 0) {
        props.group.remove(props.group.children[0]);
      }

      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.scale.set(0.01, 0.01, 0.01);
          nodes.value[child.name] = child;
          if (child.material) {
            materials.value[child.material.name] = child.material;
          }
        }
      });

      props.group.add(gltf.scene);
      gltf.scene.scale.set(...props.scale); // Apply scale
      updateMaterials();
    },
    undefined,
    (error) => {
      console.error("An error occurred while loading the model:", error);
    },
  );
};

const updateMaterials = () => {
  const textureLoader = new THREE.TextureLoader();

  console.log(materials.value);

  const texture = textureLoader.load(props.item.img);

  Object.entries(materials.value).forEach(([name, material]) => {
    if (
      name !== "zFdeDaGNRwzccye" &&
      name !== "ujsvqBWRMnqdwPx" &&
      name !== "hUlRcbieVuIiOXG" &&
      name !== "jlzuBkUzuJqgiAK" &&
      name !== "xNrofRCqOXXHVZt"
    ) {
      material.color = new THREE.Color(props.item.color[0]);
    }
    material.needsUpdate = true;
  });

  // Apply texture to specific mesh
  if (nodes.value.pIJKfZsazmcpEiU) {
    nodes.value.pIJKfZsazmcpEiU.material = new THREE.MeshStandardMaterial({
      roughness: 1,
      map: texture,
    });
  }
};

// Lifecycle hooks
onMounted(() => {
  loadModel();
});

// Watchers
watch(
  () => props.item,
  () => {
    updateMaterials();
  },
  { deep: true },
);

watch(
  () => props.scale,
  () => {
    if (props.group.children.length > 0) {
      props.group.children[0].scale.set(...props.scale); // Update scale if changed
    }
  },
);

// Cleanup
onUnmounted(() => {
  // Optional cleanup
  Object.values(materials.value).forEach((material) => material.dispose());
  Object.values(nodes.value).forEach((node) => {
    if (node.geometry) node.geometry.dispose();
  });
});
</script>

<template>
  <!-- The model will be added to the group passed via props -->
</template>
