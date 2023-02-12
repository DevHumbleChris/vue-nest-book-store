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
import { CheckBadgeIcon } from '@heroicons/vue/24/outline';

const store = useBookModalStore()

const isOpen = computed(() => {
    return store.isBookEditModal
})

function closeModal() {
    store.openBookEditModal()
}
</script>

<template>
    <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto ">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 space-y-3">
                                <p>
                                    Update Book Details
                                </p>
                            </DialogTitle>

                            <div class="my-4">
                                <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                                    option that you want to update</p>
                                    <div class="flex space-x-3 text-sm">
                                        <div class="flex items-center space-x-2 bg-indigo-600 p-2 rounded-full text-white cursor-pointer">
                                            <p>Title</p>
                                            <CheckBadgeIcon class="w-5" />
                                        </div>
                                        <div class="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded-full hover:text-white cursor-pointer bg-indigo-50">
                                            <p>Author</p>
                                            <CheckBadgeIcon class="w-5" />
                                        </div>
                                        <div class="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded-full hover:text-white cursor-pointer bg-indigo-50">
                                            <p>Type</p>
                                            <CheckBadgeIcon class="w-5" />
                                        </div>
                                        <div class="flex items-center space-x-2 hover:bg-indigo-600 p-2 rounded-full hover:text-white cursor-pointer bg-indigo-50">
                                            <p>Image</p>
                                            <CheckBadgeIcon class="w-5" />
                                        </div>
                                    </div>
                            </div>

                            <div class="space-y-2 my-2">
                                <label for="imageURL" class="block font-medium text-gray-700">Title</label>
                                <input type="text" name="imageURL" id="imageURL" autocomplete="off"
                                  class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none"
                                  required>
                            </div>

                            <div class="mt-4 flex justify-between items-center">
                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    @click="closeModal">
                                    No, Thanks!
                                </button>
                                <button type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
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
