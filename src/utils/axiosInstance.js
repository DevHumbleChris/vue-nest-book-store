import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api-book-store.vercel.app/api',
    headers: {
        "Content-Type": "application/json"
    }
})
