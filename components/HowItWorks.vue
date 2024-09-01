<script setup>
// === IMPORT ===
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// === REFS ===
const videoRef = ref(null);

// === MOUNT ===
onMounted(() => {
  gsap.from("#chip", {
    opacity: 0,
    scale: 2,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "#chip",
      start: "20% bottom",
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(".g_fadeIn", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".g_fadeIn",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<template>
  <section class="container mx-auto px-5 py-20 sm:px-10 sm:py-32">
    <div id="chip" class="my-20 flex w-full items-center justify-center">
      <NuxtImg
        class="size-44 object-cover"
        src="/assets/images/chip.jpeg"
        alt="chip"
      />
    </div>

    <div class="flex flex-col items-center">
      <h2 class="text-center text-4xl font-semibold md:text-7xl">
        A17 Pro chip.
        <br />
        A monster win for gaming.
      </h2>
      <p class="py-10 text-center text-xl font-semibold text-gray md:text-2xl">
        It's here. The biggest redesign in the history of Apple GPUs.
      </p>
    </div>

    <div
      class="relative mx-auto mt-10 flex h-full items-center justify-center md:mt-20"
    >
      <div class="overflow-hidden">
        <NuxtImg
          src="/assets/images/frame.png"
          alt="frame"
          class="relative z-10 bg-transparent"
        />
      </div>

      <video
        ref="videoRef"
        class="pointer-events-none absolute aspect-video size-full max-w-[680px] overflow-hidden rounded-[30px] px-1.5 sm:rounded-[56px] sm:px-2.5"
        playsinline="true"
        preload="none"
        muted
        autoplay
      >
        <source src="/assets/videos/frame.mp4" type="video/mp4" />
      </video>
    </div>

    <p class="mb-14 mt-3 text-center font-semibold text-gray">
      Honkai: Star Rail
    </p>

    <div class="flex flex-col items-start justify-between gap-24 md:flex-row">
      <div class="flex flex-1 flex-col justify-center">
        <p
          class="g_fadeIn translate-y-[100px] text-xl font-normal text-gray opacity-0 md:font-semibold"
        >
          A17 Pro is an entirely new class of iPhone chip that delivers out
          <span class="text-white"> best graphic performance by far</span>.
        </p>

        <p
          class="g_fadeIn mt-3 translate-y-[100px] text-xl font-normal text-gray opacity-0 md:font-semibold"
        >
          Mobile
          <span class="text-white"> games will look and feel so immersive</span>
          with incredibly detailed enviroments and characters.
        </p>
      </div>

      <div
        class="g_fadeIn flex flex-1 translate-y-[100px] flex-col justify-center opacity-0"
      >
        <p class="text-xl font-normal text-gray md:font-semibold">New</p>
        <p
          class="my-2 text-3xl font-normal text-white md:text-5xl md:font-semibold"
        >
          Pro-class GPU
        </p>
        <p class="text-xl font-normal text-gray md:font-semibold">
          with 6 cores
        </p>
      </div>
    </div>
  </section>
</template>
