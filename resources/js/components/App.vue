<script setup>

</script>

<template>
    <div class="h-70 flex items-center justify-center gap-20 test">
        <div>
            <div class="text-center text-gray-500 border-2 border-gray-50 bg-clip-content p-1 border-dashed bg-gray-50 float-left">
                <div class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-1xl font-extrabold text-transparent pt-1 pb-4">Laravel 12</div>
                <img src="/images/laravel-logo.svg" alt="" class="w-32 h-32 object-contain m-3">
            </div>
            <div class="float-left text-sm text-white ml-2">
                <a href="https://laravel.com/docs/12.x/installation" class="rounded-md px-3 py-2 hover:text-gray-200" target="_blank">Docs</a>
            </div>
        </div>

        <div>
            <div class="text-center text-gray-500 border-2 border-gray-50 bg-clip-content p-1 border-dashed bg-gray-50 float-left">
                <div class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-1xl font-extrabold text-transparent pt-1 pb-4">Tailwind CSS 4</div>
                <img src="/images/tailwindcss-logo.svg" alt="" class="w-32 h-32 object-contain m-3">
            </div>
            <div class="float-left text-sm text-white ml-2">
                <a href="https://tailwindcss.com/docs/installation" class="rounded-md px-3 py-2 hover:text-gray-200" target="_blank">Docs</a>
            </div>
        </div>

        <div>
            <div class="text-center text-gray-500 border-2 border-gray-50 bg-clip-content p-1 border-dashed bg-gray-50 float-left">
                <div class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-1xl font-extrabold text-transparent pt-1 pb-4">Vue.js 3</div>
                <img src="/images/vuejs-logo.svg" alt="" class="w-32 h-32 object-contain m-3">
            </div>
            <div class="float-left text-sm text-white ml-2">
                <RouterLink to="/demo/storage" class="rounded-md px-3 hover:text-gray-200">Storage</RouterLink>
                <br>
                <RouterLink to="/demo/locale" class="rounded-md px-3 hover:text-gray-200">Locale</RouterLink>
            </div>
        </div>

        <div>
            <div class="text-center text-gray-500 border-2 border-gray-50 bg-clip-content p-1 border-dashed bg-gray-50 float-left">
                <div class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-1xl font-extrabold text-transparent pt-1 pb-4">PrimeVue 4</div>
                <img src="/images/primevue-logo.svg" alt="" class="w-32 h-32 object-contain m-3">
            </div>
            <div class="float-left text-sm text-white ml-2">
                <RouterLink to="/demo/components" class="rounded-md px-3 py-2 hover:text-gray-200">Components</RouterLink>
            </div>
        </div>
    </div>

    <router-view></router-view>

    <Toast />
</template>

<style scoped>

</style>
