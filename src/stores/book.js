import { defineStore } from "pinia";
import { ref } from "vue";
import { instance } from "@/utils/axiosInstance";

export const useBookStore = defineStore("book", () => {
  const editedBook = ref(null);
  const loadBooks = ref(false);
  const books = ref(null);

  const fnLoadBooks = () => {
    loadBooks.value = !loadBooks.value;
  };

  const getBooks = async () => {
    const resp = await instance.get("/books");
    if (resp.data) {
        books.value = resp.data;
    }
  };

  return {
    fnLoadBooks,
    loadBooks,
    editedBook,
    getBooks,
    books,
  };
});
