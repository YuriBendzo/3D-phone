<script setup></script>

<template>
  <nav class="flex items-center justify-between py-5 text-gray">
    <NuxtLink to="/">
      <nuxt-icon
        class="size-6 transition-colors hover:text-white lg:size-11"
        name="apple"
      />
    </NuxtLink>
    <ul class="hidden items-center gap-10 lg:flex">
      <li>
        <NuxtLink class="transition-colors hover:text-white" to="/">
          Store
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="transition-colors hover:text-white" to="/">
          Mac
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="transition-colors hover:text-white" to="/">
          iPhone
        </NuxtLink>
      </li>
      <li>
        <NuxtLink class="transition-colors hover:text-white" to="/">
          Support
        </NuxtLink>
      </li>
    </ul>
    <div class="flex items-center gap-5 md:gap-10">
      <button type="button">
        <nuxt-icon
          class="size-5 transition-colors hover:text-white lg:size-6"
          name="search"
        />
      </button>
      <button type="button">
        <nuxt-icon
          class="size-5 transition-colors hover:text-white lg:size-6"
          name="bag"
        />
      </button>
      <ButtonsHamburger />
    </div>
  </nav>
</template>
