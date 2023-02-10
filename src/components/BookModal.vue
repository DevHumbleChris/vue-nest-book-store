<script setup>
import { computed, ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { useBookModalStore } from '../stores/bookModal';

const store = useBookModalStore()
const isOpen = computed(() => {
  return store.isBookModal
})

const formDetails = ref({
  title: '',
  author: '',
  imageURL: '',
  type: ''
})

function closeModal() {
  store.openBookModal()
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
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Add New Book.
              </DialogTitle>
              <form>
                <div class="space-y-2 my-2">
                  <label for="title" class="block font-medium text-gray-700">Title</label>
                  <input v-model="formDetails.title" type="text" name="title" id="title" autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none">
                </div>

                <div class="space-y-2 my-2">
                  <label for="type" class="block font-medium text-gray-700">Type</label>
                  <input v-model="formDetails.type" type="text" name="type" id="type" autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none">
                </div>

                <div class="space-y-2 my-2">
                  <label for="author" class="block font-medium text-gray-700">Author</label>
                  <input v-model="formDetails.author" type="text" name="author" id="author" autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none">
                </div>

                <div class="space-y-2 my-2">
                  <label for="imageURL" class="block font-medium text-gray-700">Book Image URL</label>
                  <input v-model="formDetails.imageURL" type="text" name="imageURL" id="imageURL" autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none">
                </div>

                <div class="mt-4">
                  <button type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal">
                    SAVE
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
