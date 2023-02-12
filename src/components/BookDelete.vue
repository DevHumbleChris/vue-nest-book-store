<script setup>
import { computed } from 'vue'
import { useBookModalStore } from '@/stores/bookModal'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { useBookStore } from '../stores/book';

const store = useBookModalStore()
const bookStore = useBookStore()

const isOpen = computed(() => {
    return store.isBookDeleteModal
})

const book = computed(() => {
    return bookStore?.selectedBook
})

function closeModal() {
    store.openBookDeleteModal()
}

const deleteBook = () => {
    bookStore.deleteBook(book.value)
    store.openBookDeleteModal()
}
</script>

<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 space-y-2">
                                <p class="font-bold">Do You Want To Delete Book?</p>
                            </DialogTitle>
                            <div class="mt-2 text-gray-500">
                                <p><span class="font-semibold">Title: </span>{{ book?.title }}.</p>
                                <p><span class="font-semibold">By: </span>{{ book?.author}}.</p>
                            </div>

                            <div class="mt-4 flex justify-between items-center">
                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    No, Thanks!
                                </button>
                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2" @click="deleteBook">
                                    Yes, Delete!
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
