<script setup></script>

<template>
  <div>
    <header class="container mx-auto px-5 sm:px-10">
      <Navbar />
    </header>
    <main>
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
    <footer class="container mx-auto px-5 py-5 sm:px-10">
      <div>
        <p class="text-xs font-semibold text-gray">
          More ways to shop:
          <span class="text-blue underline"> Find an Apple Store </span>
          or
          <span class="text-blue underline"> other retailer </span>
          near you.
        </p>
        <p class="text-xs font-semibold text-gray">Or call 080800-040-9166</p>
      </div>

      <div class="my-5 h-px w-full bg-neutral-700" />

      <div class="flex flex-col justify-between md:flex-row md:items-center">
        <p class="text-xs font-semibold text-gray">
          Copyright @ {{ new Date().getFullYear() }} Apple Inc. All rights
          reserved.
        </p>

        <ul class="flex gap-2">
          <li class="flex items-center text-gray">
            <p class="mr-2 text-xs font-semibold">Privacy Policy</p>
            <span>|</span>
          </li>
          <li class="flex items-center text-gray">
            <p class="mr-2 text-xs font-semibold">Terms of Use</p>
            <span>|</span>
          </li>
          <li class="flex items-center text-gray">
            <p class="mr-2 text-xs font-semibold">Sales Policy</p>
            <span>|</span>
          </li>
          <li class="flex items-center text-gray">
            <p class="mr-2 text-xs font-semibold">Legal</p>
            <span>|</span>
          </li>
          <li class="flex items-center text-gray">
            <p class="text-xs font-semibold text-gray">Site Map</p>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
