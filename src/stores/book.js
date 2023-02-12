import { defineStore } from "pinia";
import { ref } from "vue";
import { instance } from "@/utils/axiosInstance";

export const useBookStore = defineStore("book", () => {
  const selectedBook = ref(null);
  const loadBooks = ref(false);
  const books = ref(null);

  const getSelectedBook = (payload) => {
    selectedBook.value = payload
  }

  const fnLoadBooks = () => {
    loadBooks.value = !loadBooks.value;
  };

  const getBooks = async () => {
    const resp = await instance.get("/books");
    if (resp.data) {
      books.value = resp.data;
    }
  };

  const searchBooks = async (payload) => {
    const resp = await instance.get(`/books?search=${payload}`);
    if (resp.data) {
      books.value = resp.data;
    }
  };

  const deleteBook = async (payload) => {
    try {
      const resp = await instance.delete(`/book/${payload.id}/delete`);
      if (resp.data) {
        getBooks()
        selectedBook.value = null
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return {
    fnLoadBooks,
    loadBooks,
    selectedBook,
    getBooks,
    books,
    searchBooks,
    getSelectedBook,
    deleteBook
  };
});
