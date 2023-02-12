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
    <div class="flex flex-col sm:flex-row flex-wrap">
        <SingleBook v-for="book in books" :key="book.id" :book="book" />
    </div>
</template>
