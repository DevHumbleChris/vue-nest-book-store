<script setup>
import SingleBook from './SingleBook.vue';
import { watchEffect, computed } from 'vue';
import { useBookStore } from '@/stores/book'

const store = useBookStore()

const fetchBooks = async () => {
    store.getBooks()
}
const books = computed(() => {
    return store.books
})
watchEffect(() => {
    fetchBooks()
})

</script>

<template>
    <div class="sm:grid sm:grid-cols-2 sm:gap-3 my-6 w-full">
        <SingleBook v-for="book in books" :key="book.id" :book="book" />
    </div>
</template>
