<script setup>
import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <main class="mx-auto max-w-xl my-6">
    <section class="mx-3 p-4">
      <h1 class="text-center text-2xl">Book Store</h1>
      <form class="my-4">
        <div class="bg-white w-full rounded-full p-2 relative">
          <input type="text" class="w-full  px-6 py-3 outline-none" placeholder="search book id, author or title">
          <MagnifyingGlassCircleIcon class="w-10 absolute bg-primary text-indigo-600 rounded-full top-3 right-4" />
        </div>
      </form>
      <div class="sm:grid sm:grid-cols-2 sm:gap-3 my-6 w-full">
        <div class="flex space-x-3 text-xl">
          <img src="https://cdn.asaha.com/assets/thumbs/ded/ded9c34e043e358016e0c7e97b719ff9.jpg" class="object-fit w-36 rounded-md" />
          <div class="space-y-2">
            <h2 class="text-2xl">Child Psychology and Psychiatry</h2>
            <p class="text-lg text-gray-600">David Skuse</p>
            <p class="text-base text-indigo-500">Psychology</p>
            <div class="space-x-4 hidden hover:block">
              <button class="bg-indigo-600 text-white p-2 rounded-md">Edit</button>
              <button class="bg-red-600 text-white p-2 rounded-md">Delete</button>
            </div>
          </div>
        </div>
        <div class="flex space-x-3 text-xl">
          <img src="https://cdn.asaha.com/assets/thumbs/ded/ded9c34e043e358016e0c7e97b719ff9.jpg" class="object-fit w-36 rounded-md" />
          <div class="space-y-2">
            <h2 class="text-2xl">Child Psychology and Psychiatry</h2>
            <p class="text-lg text-gray-600">David Skuse</p>
            <p class="text-base text-indigo-500">Psychology</p>
            <div class="space-x-4 hidden hover:block">
              <button class="bg-indigo-600 text-white p-2 rounded-md">Edit</button>
              <button class="bg-red-600 text-white p-2 rounded-md">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
