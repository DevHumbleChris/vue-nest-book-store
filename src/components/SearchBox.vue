<script setup>
import { MagnifyingGlassCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
    <form class="my-4">
        <div class="bg-white w-full rounded-full p-2 relative">
          <input type="text" class="w-full  px-6 py-3 outline-none" placeholder="search book id, author or title">
          <MagnifyingGlassCircleIcon class="w-10 absolute bg-primary text-indigo-600 rounded-full top-3 right-4" />
        </div>
      </form>
</template>
