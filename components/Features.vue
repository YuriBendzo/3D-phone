<script setup>
// === IMPORT ===
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// === REFS ===
const videoRef = ref(null);

// === MOUNT ===
onMounted(() => {
  gsap.to("#exploreVideo", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#exploreVideo",
      start: "-10% bottom",
      toggleActions: "play pause reverse restart",
    },
    onComplete: () => {
      videoRef.value.play();
    },
  });

  gsap.to("#features_title", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#features_title",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.to(".g_grow", {
    opacity: 1,
    scale: 1,
    ease: "power1",
    scrollTrigger: {
      trigger: ".g_grow",
      start: "top 90%",
      scrub: 5.5,
      toggleActions: "play none none reverse",
    },
  });
  gsap.to(".g_text", {
    opacity: 1,
    y: 0,
    ease: "power2.inOut",
    duration: 1,
    scrollTrigger: {
      trigger: ".g_text",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<template>
  <section
    class="relative h-full overflow-hidden bg-zinc px-5 py-20 sm:px-10 sm:py-32"
  >
    <div class="mb-12 w-full">
      <h1 id="features_title" class="section-heading">
        Explore the full story.
      </h1>
    </div>
    <div class="flex flex-col items-center justify-center overflow-hidden">
      <div class="mb-24 mt-32 pl-24">
        <h2 class="text-5xl font-semibold lg:text-7xl">iPhone.</h2>
        <h2 class="text-5xl font-semibold lg:text-7xl">Forged in titanium.</h2>
      </div>

      <div class="flex flex-col items-center justify-center sm:px-10">
        <div class="relative flex h-[50vh] w-full items-center">
          <video
            id="exploreVideo"
            ref="videoRef"
            class="size-full object-cover object-center"
            playsinline
            preload="none"
            muted
            autoplay
          >
            <source src="/assets/videos/explore.mp4" type="video/mp4" />
          </video>
        </div>

        <div class="relative flex w-full flex-col">
          <div class="feature-video-container">
            <div class="h-[50vh] flex-1 overflow-hidden">
              <NuxtImg
                src="/assets/images/explore1.jpg"
                alt="titanium"
                class="feature-video g_grow"
              />
            </div>
            <div class="h-[50vh] flex-1 overflow-hidden">
              <NuxtImg
                src="/assets/images/explore2.jpg"
                alt="titanium"
                class="feature-video g_grow"
              />
            </div>
          </div>

          <div class="feature-text-container">
            <div class="flex flex-1 items-center justify-center">
              <p class="feature-text g_text">
                iPhone 15 Pro is {{ "" }}
                <span class="text-white"
                  >the first iPhone to feature an aerospace-grade titanium
                  design</span
                >, using the same alloy that spacecrafts use for missions to
                Mars.
              </p>
            </div>

            <div class="flex flex-1 items-center justify-center">
              <p class="feature-text g_text">
                Titanium has one of the best strength-to-weight ratios of any
                metal, making these our {{ "" }}
                <span class="text-white">lightest Pro models ever.</span>
                You'll notice the difference the moment you pick one up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
