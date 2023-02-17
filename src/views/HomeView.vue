<script setup>
import SearchBox from '@/components/SearchBox.vue';
import BooksWrapper from '@/components/BooksWrapper.vue'
import AddBook from '../components/AddBook.vue';
import { DotLoader } from "vue3-spinner";
import { useBookStore } from '@/stores/book'
import { computed } from 'vue';
import BookEdit from '../components/BookEdit.vue';
import BookDelete from '../components/BookDelete.vue';

const store = useBookStore()
const books = computed(() => {
  return store?.books
})
</script>
<template>
  <main class="mx-auto max-w-3xl my-6">
    <section class="mx-3 p-4">
      <AddBook />
      <SearchBox />
      <div v-if="books?.length <= 0" class="flex space-x-2 items-center justify-center my-12">
        <DotLoader color="#0d05b9" />
        <p class="text-2xl text-[#0d05b9] animate-pulse">No Books Found!...</p>
      </div>
      <BooksWrapper v-else />
      <BookEdit/>
      <BookDelete />
    </section>
  </main>
</template>
