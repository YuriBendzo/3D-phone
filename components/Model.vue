<script setup>
// === IMPORT ===
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import yellowImg from "/assets/images/yellow.jpg";
import blueImg from "/assets/images/blue.jpg";
import whiteImg from "/assets/images/white.jpg";
import blackImg from "/assets/images/black.jpg";

gsap.registerPlugin(ScrollTrigger);

// === VARIABLES ===
const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

const size = ref("small");
const model = ref({
  title: "iPhone 15 Pro in Natural Titanium",
  color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
  img: yellowImg,
});

// model
const model3D = ref(new THREE.Group());

//rotation
const rotation = ref(0);

// === FUNCTIONS ===
const handleModelChange = (item) => {
  model.value = item;
};

const handleSizeChange = (value) => {
  size.value = value;
};

// === MOUNT ===
onMounted(() => {
  gsap.to("#heading", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#heading",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<template>
  <section class="bg-zinc px-5 py-20 sm:px-10 sm:py-32">
    <div class="container mx-auto">
      <h1
        id="heading"
        class="mb-5 translate-y-20 text-3xl font-medium text-gray opacity-0 md:text-5xl lg:mb-0 lg:text-6xl"
      >
        Take a closer look.
      </h1>

      <div class="mt-5 flex flex-col items-center">
        <div class="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
          <ModelView
            gsap-type="view1"
            :group-ref="model3D"
            :set-rotation-state="(rotationState) => (rotation = rotationState)"
            :item="model"
            :size="size"
          />
        </div>
        <div class="mx-auto w-full">
          <p class="mb-5 text-center text-sm font-light text-white">
            {{ model.title }}
          </p>

          <div class="flex items-center justify-center">
            <ul
              class="flex items-center justify-center rounded-full bg-gray-300 px-4 py-4 backdrop-blur"
            >
              <li
                v-for="(item, i) in models"
                :key="i"
                :style="{ backgroundColor: item.color[0] }"
                class="mx-2 size-6 cursor-pointer rounded-full"
                @click="handleModelChange(item)"
              ></li>
            </ul>

            <div
              class="ml-3 flex items-center justify-center gap-1 rounded-full bg-gray-300 p-1 backdrop-blur"
            >
              <button
                v-for="screenSize in sizes"
                :key="screenSize"
                @click="handleSizeChange(screenSize.value)"
              >
                <span
                  class="flex size-10 items-center justify-center rounded-full bg-white text-sm text-black transition-all"
                  :style="{
                    backgroundColor:
                      size === screenSize.value ? 'white' : 'transparent',
                    color: size === screenSize.value ? 'black' : 'white',
                  }"
                  >{{ screenSize.label }}</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
