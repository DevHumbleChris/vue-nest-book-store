<script setup>
import SearchBox from '@/components/SearchBox.vue';
import BooksWrapper from '@/components/BooksWrapper.vue'
import AddBook from '../components/AddBook.vue';
import { DotLoader } from "vue3-spinner";
</script>
<template>
  <main class="mx-auto max-w-xl my-6">
    <section class="mx-3 p-4">
      <AddBook />
      <SearchBox />
      <BooksWrapper />
      <div class="flex space-x-2 items-center justify-center my-12">
        <DotLoader color="#0d05b9" class="animate-pulse" />
        <p class="text-2xl text-[#0d05b9] animate-pulse">Loading...</p>
      </div>
    </section>
  </main>
</template>
