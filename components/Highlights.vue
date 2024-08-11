<script setup>
// === IMPORT ===
import gsap from "gsap";

// === REFS ===
const ctx = ref(null);

// === MOUNT ===
onMounted(() => {
  ctx.value = gsap.context(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, null);
});

// === UNMOUNT ===
onUnmounted(() => {
  ctx.value.revert();
});
</script>

<template>
  <section
    id="highlights"
    class="size-full overflow-hidden bg-zinc px-5 py-20 sm:px-10 sm:py-32"
  >
    <div class="screen-max-width">
      <div class="mb-12 w-full items-end justify-between md:flex">
        <h1 id="title" class="section-heading">Get the highlights.</h1>
        <div class="flex flex-wrap items-end gap-5">
          <p class="link">
            Watch the film
            <nuxt-icon name="watch" class="ml-2 size-6" />
          </p>
          <p class="link">
            Watch the event
            <nuxt-icon name="right" class="ml-2 size-6" />
          </p>
        </div>
      </div>

      <VideoCarousel />
    </div>
  </section>
</template>
