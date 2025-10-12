<script setup>
import LocaleSwitcher from "@/demo/components/LocaleSwitcher.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
    <div class="bg-surface-0 dark:bg-surface-950 md:px-12 lg:px-20">
        <div class="text-surface-700 dark:text-surface-100 text-center flex flex-col items-center gap-4">
            <div class="font-bold text-4xl leading-tight">Locale</div>
            <div>{{ t('Demonstration of changing the application locale') }}</div>
        </div>
    </div>

    <LocaleSwitcher />
</template>

<style scoped>

</style>
