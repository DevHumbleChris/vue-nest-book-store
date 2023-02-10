import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookModalStore = defineStore('bookModal', () => {
    const isBookModal = ref(false)

    const openBookModal = () => {
        isBookModal.value = !isBookModal.value
    }

    return { isBookModal, openBookModal }
})
