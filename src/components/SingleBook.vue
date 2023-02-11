<script setup>
import { computed } from 'vue';

const props = defineProps({
    book: Object
})

const book = computed(() => {
    return props?.book
})
</script>

<template>
    <div class="space-y-2 group">
        <div class="flex space-x-3 text-xl cursor-pointer group">
            <div>
                <img src="https://cdn.asaha.com/assets/thumbs/ded/ded9c34e043e358016e0c7e97b719ff9.jpg"
                    class="object-fit rounded-md hover:shadow-xl group-hover:border group-hover:border-indigo-600" />
            </div>
            <div class="space-y-2">
                <h2
                    class="text-2xl sm:text-lg font-bold group-hover:underline group-hover:decoration-indigo-600 group-hover:decoration-2">
                    {{ book?.title }}
                </h2>
                <p class="text-xl sm:text-base text-gray-600">David Skuse</p>
                <p class="text-lg sm:text-sm text-indigo-500">Psychology</p>
            </div>
        </div>
        <div class="flex space-x-4">
            <button class="bg-indigo-600 text-white p-2 rounded-md w-full hidden group-hover:block">Edit</button>
            <button class="bg-red-600 text-white p-2 rounded-md w-full hidden group-hover:block">Delete</button>
        </div>
    </div>
</template>
