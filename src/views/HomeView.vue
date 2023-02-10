<script setup>
import { MagnifyingGlassCircleIcon, CloudArrowUpIcon } from '@heroicons/vue/24/outline'
import BookModal from '@/components/BookModal.vue'
import { useBookModalStore } from '../stores/bookModal';

const store = useBookModalStore()
const openBookModal = () => {
  store.openBookModal()
}
</script>
<template>
  <main class="mx-auto max-w-xl my-6">
    <section class="mx-3 p-4">
      <div class="flex items-center justify-center space-x-2">
        <h1 class="text-2xl">Book Store</h1>
        <CloudArrowUpIcon class="w-9 cursor-pointer text-indigo-600" @click="openBookModal"/>
      </div>
      <BookModal />
      <form class="my-4">
        <div class="bg-white w-full rounded-full p-2 relative">
          <input type="text" class="w-full  px-6 py-3 outline-none" placeholder="search book id, author or title">
          <MagnifyingGlassCircleIcon class="w-10 absolute bg-primary text-indigo-600 rounded-full top-3 right-4" />
        </div>
      </form>
      <div class="sm:grid sm:grid-cols-2 sm:gap-3 my-6 w-full">
        <div class="flex space-x-3 text-xl cursor-pointer group">
          <div>
            <img src="https://cdn.asaha.com/assets/thumbs/ded/ded9c34e043e358016e0c7e97b719ff9.jpg"
              class="object-fit rounded-md hover:shadow-xl group-hover:border group-hover:border-indigo-600" />
          </div>
          <div class="space-y-2">
            <h2 class="text-2xl sm:text-lg font-bold group-hover:underline group-hover:decoration-indigo-600 group-hover:decoration-2">Child Psychology and Psychiatry</h2>
            <p class="text-xl sm:text-base text-gray-600">David Skuse</p>
            <p class="text-lg sm:text-sm text-indigo-500">Psychology</p>
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
