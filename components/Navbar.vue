<script setup></script>

<template>
  <nav class="flex items-center justify-between py-5 text-gray">
    <nuxt-icon
      class="size-6 cursor-pointer transition-colors hover:text-white lg:size-11"
      name="apple"
    />

    <ul class="hidden items-center gap-10 lg:flex">
      <li>
        <p class="cursor-pointer transition-colors hover:text-white">Store</p>
      </li>
      <li>
        <p class="cursor-pointer transition-colors hover:text-white">Mac</p>
      </li>
      <li>
        <p class="cursor-pointer transition-colors hover:text-white">iPhone</p>
      </li>
      <li>
        <p class="cursor-pointer transition-colors hover:text-white">Support</p>
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
