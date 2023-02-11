<script setup>
import SingleBook from './SingleBook.vue';
import { watchEffect, ref } from 'vue';
import { instance } from '@/utils/axiosInstance'

const books = ref(null)
watchEffect(async () => {
    const resp = await instance.get('/books')
    books.value = resp.data
})
</script>

<template>
    <div class="sm:grid sm:grid-cols-2 sm:gap-3 my-6 w-full">
        <SingleBook v-for="book in books" :key="book.id" :book="book" />
    </div>
</template>
