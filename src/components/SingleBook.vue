<script setup>
import { computed } from 'vue';
import { useBookModalStore } from '@/stores/bookModal';
import { useBookStore } from '@/stores/book';

const props = defineProps({
    book: Object
})
const store = useBookModalStore()
const bookStore = useBookStore()

const book = computed(() => {
    return props?.book
})

const editBook = () => {
    store.openBookEditModal()
    bookStore.getSelectedBook(book.value)
}

const deleteBook = () => {
    store.openBookDeleteModal()
    bookStore.getSelectedBook(book.value)
}
</script>

<template>
    <div class="space-y-2 group flex-shrink-0 hover:my-3 max-w-xs mr-2">
        <div class="flex space-x-3 text-xl cursor-pointer group">
            <div>
                <img :src="book.imageURL"
                    class="object-fit rounded-md hover:shadow-xl group-hover:border group-hover:border-indigo-600 max-w-[142px] max-h-[192px] shrink-0" />
            </div>
            <div class="space-y-2">
                <h2 class="font-bold group-hover:underline group-hover:decoration-indigo-600 group-hover:decoration-2">
                    {{ book?.title }}
                </h2>
                <p class="text-xl sm:text-base text-gray-600">{{ book.author }}</p>
                <p class="text-lg sm:text-sm text-indigo-500">{{ book.type }}</p>
            </div>
        </div>
        <div class="flex space-x-4">
            <button @click="editBook"
                class="bg-indigo-600 text-white p-2 rounded-md w-full hidden group-hover:block">Edit</button>
            <button @click="deleteBook"
                class="bg-red-600 text-white p-2 rounded-md w-full hidden group-hover:block">Delete</button>
        </div>
    </div>
</template>
