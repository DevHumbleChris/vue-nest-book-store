<script setup>
import { computed, ref, onBeforeMount, watchEffect, watch } from "vue";
import { useBookModalStore } from "@/stores/bookModal";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import { CheckBadgeIcon } from "@heroicons/vue/24/outline";
import { useBookStore } from "../stores/book";

const bookStore = useBookStore();
const store = useBookModalStore();
const selectedDetails = ref([]);
const detailSelected = ref("Title");

const book = computed(() => {
  return bookStore?.selectedBook;
});

const isOpen = computed(() => {
  return store.isBookEditModal;
});
watch(isOpen, (newOpenVal) => {
  if (!newOpenVal) {
    bookStore.defaultSelectedBook()
    selectedDetails.value = ['Title']
    detailSelected.value = 'Title'
  }
})

function closeModal() {
  store.openBookEditModal();
}

onBeforeMount(() => {
  selectedDetails.value.push("Title");
});

const setSelected = (selected) => {
  detailSelected.value = selected;
  const newDetailsSelected = selectedDetails.value.filter(
    (record) => record === detailSelected.value
  );
  if (newDetailsSelected <= 0) {
    selectedDetails.value.push(detailSelected.value);
  } else {
    const newDetails = selectedDetails.value.filter(
      (record) => record !== detailSelected.value
    );
    selectedDetails.value = newDetails;
  }
};

const toggleClass = (selected) => {
  const isSelected = selectedDetails.value.filter((record) => record === selected);
  return isSelected.length > 0
    ? "flex items-center space-x-2 bg-indigo-600 p-2 rounded-full text-white cursor-pointer mr-2 mb-2"
    : "flex items-center space-x-2 p-2 rounded-full cursor-pointer bg-indigo-50 mr-2 mb-2";
};

const toggleClassCheckIcon = (selected) => {
  const isSelected = selectedDetails.value.filter((record) => record === selected);
  return isSelected.length > 0 ? "w-5 block" : "w-5 hidden";
};

const bookModel = ref({
  title: book?.value?.title,
  author: book?.value?.author,
  type: book?.value?.type,
  image: book?.value?.imageURL,
})
watch(book, (newValue) => {
  if (newValue) {
    bookModel.value = {
      title: newValue?.title,
      author: newValue?.author,
      type: newValue?.type,
      image: newValue?.imageURL,
    }
  }
})

const bookUpdateData = ref(null)
watchEffect(() => {
  if (selectedDetails?.value.length > 0) {
    let newBookUpdateData = {}
    selectedDetails?.value.forEach(dtlSelected => {
      newBookUpdateData[dtlSelected.toLowerCase()] = bookModel?.value[dtlSelected.toLowerCase()]
    })
    bookUpdateData.value = newBookUpdateData
  } else {
    bookUpdateData.value = null
  }
})

const updateData = () => {
  if (!bookUpdateData.value) {
    alert('Specify Atleast One Field')
  } else {
    console.log(bookUpdateData.value)
  }
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
              class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 space-y-3">
                <p>Update Book Details</p>
              </DialogTitle>

              <div class="my-4">
                <p class="block mb-2 text-sm font-medium text-gray-900">
                  Select an option that you want to update
                </p>
                <div class="flex text-sm flex-wrap items-center">
                  <div @click="setSelected('Title')" :class="toggleClass('Title')">
                    <p>Title</p>
                    <CheckBadgeIcon :class="toggleClassCheckIcon('Title')" />
                  </div>
                  <div :class="toggleClass('Author')" @click="setSelected('Author')">
                    <p>Author</p>
                    <CheckBadgeIcon :class="toggleClassCheckIcon('Author')" />
                  </div>
                  <div :class="toggleClass('Type')" @click="setSelected('Type')">
                    <p>Type</p>
                    <CheckBadgeIcon :class="toggleClassCheckIcon('Type')" />
                  </div>
                  <div :class="toggleClass('Image')" @click="setSelected('Image')">
                    <p>Image</p>
                    <CheckBadgeIcon :class="toggleClassCheckIcon('Image')" />
                  </div>
                </div>
              </div>

              <form @submit.prevent="updateData">
                <div v-for="(bk, index) in selectedDetails" :key="index" class="space-y-2 my-2">
                  <label for="imageURL" class="block font-medium text-gray-700">{{
                    bk
                  }}</label>
                  <div v-if="bk === 'Title'">
                    <input v-model="bookModel.title" type="text" name="imageURL" id="imageURL" autocomplete="off"
                      class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none"
                      required />
                  </div>
                  <div v-if="bk === 'Author'">
                    <input v-model="bookModel.author" type="text" name="imageURL" id="imageURL" autocomplete="off"
                      class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none"
                      required />
                  </div>
                  <div v-if="bk === 'Type'">
                    <input v-model="bookModel.type" type="text" name="imageURL" id="imageURL" autocomplete="off"
                      class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none"
                      required />
                  </div>
                  <div v-if="bk === 'Image'">
                    <input v-model="bookModel.image" type="text" name="imageURL" id="imageURL" autocomplete="off"
                      class="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border outline-none"
                      required />
                  </div>
                </div>
                <div class="mt-4 flex justify-between items-center">
                  <button type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal">
                    No, Thanks!
                  </button>
                  <button type="submit"
                    class="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2">
                    Yes, Update!
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
