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
        <CloudArrowUpIcon class="w-9 cursor-pointer text-indigo-600" @click="openBookModal"/>
        <BookModal />
      </div>
</template>
