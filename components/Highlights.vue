<script setup>
// === IMPORT ===
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// === MOUNT ===
onMounted(() => {
  gsap.to("#title", {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#title",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
  gsap.to(".link", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".link",
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
  });
});
</script>

<template>
  <section
    id="highlights"
    class="size-full overflow-hidden bg-zinc px-5 py-20 sm:px-10 sm:py-32"
  >
    <div class="container mx-auto">
      <div class="mb-12 w-full items-end justify-between md:flex">
        <h1 id="title" class="section-heading">Get the highlights.</h1>
        <div class="flex flex-wrap items-end gap-5">
          <NuxtLink class="link group" to="/">
            <span
              class="relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-0 after:bg-current after:transition-transform group-hover:after:origin-bottom-left group-hover:after:scale-100"
              >Watch the film</span
            >
            <nuxt-icon name="watch" class="ml-2 size-6" />
          </NuxtLink>
          <NuxtLink
            class="link group"
            to="https://www.apple.com/apple-events/"
            target="_blank"
          >
            <span
              class="relative no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-0 after:bg-current after:transition-transform group-hover:after:origin-bottom-left group-hover:after:scale-100"
              >Watch the event</span
            >
            <nuxt-icon name="right" class="ml-2 size-6" />
          </NuxtLink>
        </div>
      </div>

      <VideoCarousel />
    </div>
  </section>
</template>
