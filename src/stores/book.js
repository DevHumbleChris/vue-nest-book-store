import { defineStore } from "pinia";
import { ref } from "vue";
import { instance } from "@/utils/axiosInstance";
import { toast } from 'vue3-toastify';

export const useBookStore = defineStore("book", () => {
  const selectedBook = ref(null);
  const loadBooks = ref(false);
  const books = ref(null);

  const getSelectedBook = (payload) => {
    selectedBook.value = payload
  }

  const defaultSelectedBook = () => {
    selectedBook.value = null
  }

  const fnLoadBooks = () => {
    loadBooks.value = !loadBooks.value;
  };

  const getBooks = async () => {
    try {
      const resp = await instance.get("/books");
      if (resp.data) {
        books.value = resp.data;
      }
    } catch (error) {
      toast(error.message, {
        type: 'error',
        theme: 'colored'
      })
    }

  };

  const searchBooks = async (payload) => {
    try {
      const resp = await instance.get(`/books?search=${payload}`);
      if (resp.data) {
        books.value = resp.data;
      }
    } catch(error) {
      toast(error.message, {
        type: 'error',
        theme: 'colored'
      })
    }

  };

  const updateBook = async (payload) => {
    try {
      const resp = await instance.put(`/book/${payload.id}/update`, payload);
      if (resp.data) {
        getBooks()
        selectedBook.value = null
        toast('Book Updated Successfully!', {
          type: 'error',
          theme: 'colored'
        })
      }
    } catch (error) {
      toast(error.message, {
        type: 'error',
        theme: 'colored'
      })
    }
  }

  const deleteBook = async (payload) => {
    try {
      const resp = await instance.delete(`/book/${payload.id}/delete`);
      if (resp.data) {
        getBooks()
        selectedBook.value = null
        toast('Book Deleted Successfully!', {
          type: 'error',
          theme: 'colored'
        })
      }
    } catch (error) {
      toast(error.message, {
        type: 'error',
        theme: 'colored'
      })
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
    deleteBook,
    defaultSelectedBook,
    updateBook
  };
});
