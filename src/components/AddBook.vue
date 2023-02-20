<script setup>
import { CloudArrowUpIcon } from '@heroicons/vue/24/outline';
import BookModal from './BookModal.vue';
import { useBookModalStore } from '../stores/bookModal';

const store = useBookModalStore()
const openBookModal = () => {
  store.openBookModal()
}
</script>

<template>
  <div class="flex items-center justify-center space-x-2">
    <h1 class="text-2xl">Book Store</h1>
    <CloudArrowUpIcon class="w-9 cursor-pointer text-indigo-600" @click="openBookModal" />
    <div class="">
      <div class="mx-auto container max-w-[228px] px-2 py-2 bg-white rounded relative">
        <p class=" text-xs leading-none text-gray-600 pt-2 pb-2">Add New Book</p>
        <svg class="absolute z-10  left-[-10px] top-6 rotate-90" width="16" height="10" viewBox="0 0 16 10" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="white" />
        </svg>
        <BookModal />
      </div>
  </div>

</div></template>
