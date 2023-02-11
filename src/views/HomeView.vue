<script setup>
import SearchBox from '@/components/SearchBox.vue';
import BooksWrapper from '@/components/BooksWrapper.vue'
import AddBook from '../components/AddBook.vue';
import { DotLoader } from "vue3-spinner";
import { useBookStore } from '@/stores/book'
import { computed } from 'vue';

const store = useBookStore()

const loadBooks = computed(() => {
  return store.loadBooks
})
</script>
<template>
  <main class="mx-auto max-w-3xl my-6">
    <section class="mx-3 p-4">
      <AddBook />
      <SearchBox />
      <div v-if="loadBooks" class="flex space-x-2 items-center justify-center my-12">
        <DotLoader color="#0d05b9" class="animate-pulse" />
        <p class="text-2xl text-[#0d05b9] animate-pulse">Loading...</p>
      </div>
      <BooksWrapper v-else />
    </section>
  </main>
</template>
