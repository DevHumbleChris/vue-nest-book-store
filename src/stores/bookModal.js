import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookModalStore = defineStore('bookModal', () => {
    const isBookModal = ref(false)
    const isBookEditModal = ref(false)
    const isBookDeleteModal = ref(false)

    const openBookModal = () => {
        isBookModal.value = !isBookModal.value
    }

    const openBookEditModal = () => {
        isBookEditModal.value = !isBookEditModal.value
    }

    const openBookDeleteModal = () => {
        isBookDeleteModal.value = !isBookDeleteModal.value
    }

    return { isBookModal, openBookModal, isBookEditModal, openBookEditModal, isBookDeleteModal, openBookDeleteModal }
})
