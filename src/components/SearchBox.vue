<script setup>
import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/outline';
import { useBookStore } from '@/stores/book'
import { ref, watch } from 'vue';

const store = useBookStore()
const searchTerm = ref(null)

const searchBooks = () => {
  store.searchBooks(searchTerm.value)
}

watch(searchTerm, () => {
  store.searchBooks(searchTerm.value)
})
</script>

<template>
    <form class="my-4">
        <div class="bg-white w-full rounded-full p-2 relative">
          <input v-model="searchTerm" type="text" class="w-full  px-6 py-3 outline-none" placeholder="search book by author, title or type">
          <MagnifyingGlassCircleIcon @click="searchBooks" class="w-10 absolute bg-primary text-indigo-600 rounded-full top-3 right-4 cursor-pointer" />
        </div>
      </form>
</template>
