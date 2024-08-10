<script setup>
// === IMPORT ===
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
} from "@headlessui/vue";

// === VARIABLES ===
const isOpen = ref(false);
</script>

<template>
  <label
    class="hamburger relative z-50 block cursor-pointer lg:hidden"
    @change="isOpen = !isOpen"
  >
    <input class="peer hidden" type="checkbox" />
    <svg
      class="h-7 stroke-gray stroke-2 peer-checked:-rotate-45"
      viewBox="0 0 32 32"
    >
      <path
        class="line-top-bottom"
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      ></path>
      <path class="line" d="M7 16 27 16"></path>
    </svg>
  </label>

  <Teleport to="body">
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 -translate-y-96"
          enter-to="opacity-100 translate-y-0"
          leave="duration-200 ease-in"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-100 -translate-y-96"
        >
          <DialogPanel
            ref="main"
            class="absolute bottom-0 h-screen w-screen transform overflow-hidden bg-zinc p-6 pt-[68px] text-left shadow-xl transition-all"
          >
            <ul class="flex flex-col gap-2 text-3xl font-semibold">
              <li>
                <NuxtLink class="linked" to="/"> Store </NuxtLink>
              </li>
              <li>
                <NuxtLink class="linked" to="/"> Mac </NuxtLink>
              </li>
              <li>
                <NuxtLink class="linked" to="/"> iPhone </NuxtLink>
              </li>
              <li>
                <NuxtLink class="linked" to="/"> Support </NuxtLink>
              </li>
            </ul>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </Teleport>
</template>
