<script setup>
// === IMPORT ===
import gsap from "gsap";
import heroVideo from "/assets/videos/hero.mp4";
import smallHeroVideo from "/assets/videos/smallHero.mp4";
import heroFallbackImage from "/assets/images/hero-fallback.webp";
import smallHeroFallbackImage from "/assets/images/smallHero-fallback.webp";

// === REFS ===
const videoElement = ref(null);

// === VARIABLES ===
const videoSrc = ref(null);
const videoFallbackSrc = ref(null);
const showFallback = ref(false);

// === FUNCTIONS ===
function handleVideoSrcSet() {
  videoSrc.value = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
}

function handleVideoFallbackSrcSet() {
  videoFallbackSrc.value =
    window.innerWidth < 760 ? smallHeroFallbackImage : heroFallbackImage;
}

function handleVideoError() {
  handleVideoFallbackSrcSet();
  showFallback.value = true;
  videoElement.value.remove();
}

// === MOUNT ===
onMounted(() => {
  handleVideoSrcSet();
  window.addEventListener("resize", handleVideoSrcSet);

  gsap.to("#hero", {
    opacity: 1,
    delay: 1.5,
  });
  gsap.to("#cta", {
    opacity: 1,
    y: -50,
    delay: 1.5,
  });

  // Set up video playback with a timeout to handle autoplay issues
  const video = videoElement.value;
  if (video) {
    const playVideo = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name === "NotAllowedError") {
            handleVideoError();
          }
        });
      }
    };

    // Attempt to play the video after a delay
    setTimeout(playVideo, 1000);
  }
});

// === UNMOUNT ===
onUnmounted(() => {
  window.removeEventListener("resize", handleVideoSrcSet);
});
</script>

<template>
  <section
    class="container relative mx-auto h-[calc(100vh-68px)] w-full px-5 sm:px-10 lg:h-[calc(100vh-84px)]"
  >
    <div class="flex h-5/6 w-full flex-col items-center justify-center">
      <p
        id="hero"
        class="text-center text-3xl font-semibold text-gray-100 opacity-0 max-md:mb-10"
      >
        iPhone 15 Pro
      </p>
      <div class="w-full">
        <video
          ref="videoElement"
          class="pointer-events-none"
          aria-label="A side view of iPhone 15 Pro"
          width="100%"
          height="100%"
          :autoplay="true"
          :muted="true"
          :playsinline="true"
          :key="videoSrc"
        >
          <source :src="videoSrc" type="video/mp4" />
        </video>
        <NuxtImg
          v-if="showFallback"
          :src="videoFallbackSrc"
          class="size-full object-cover md:aspect-video"
          alt="A side view of iPhone 15 Pro"
        />
      </div>
    </div>
    <div id="cta" class="flex translate-y-20 flex-col items-center opacity-0">
      <NuxtLink
        to="#highlight"
        class="my-5 rounded-3xl border-2 border-transparent bg-blue px-5 py-2 text-xl font-medium transition-all hover:border-blue hover:bg-transparent hover:text-blue active:scale-75"
        >Buy</NuxtLink
      >
      <p class="text-xl">From $199/month or $999</p>
    </div>
  </section>
</template>
