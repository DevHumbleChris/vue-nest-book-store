<script setup>
import SearchBox from '@/components/SearchBox.vue';
import BookModal from '@/components/BookModal.vue'
import { useBookModalStore } from '../stores/bookModal';
import { CloudArrowUpIcon } from '@heroicons/vue/24/outline';
import BooksWrapper from '@/components/BooksWrapper.vue'

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
      <SearchBox />
      <BooksWrapper />
    </section>
  </main>
</template>
