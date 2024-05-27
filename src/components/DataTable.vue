<script setup lang="ts">
import { ref } from 'vue';
import { useTableStore } from '@/stores/table'
import { computed } from 'vue';

const props = defineProps<{
    title: string
}>()

const search = ref('');

const headers = computed(() => useTableStore().headers)

const desserts = computed(() => useTableStore().data)

</script>

<template>
    <v-card :title="title" style="padding: 20px;" elevation="12">
        <template v-slot:text>
            <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" variant="outlined"
                hide-details single-line></v-text-field>
        </template>

        <template v-slot:append>
            <div class="d-flex flex-wrap ga-3">
                <v-btn elevation="2">Ekle</v-btn>
                <v-btn elevation="2">Sil</v-btn>
            </div>
        </template>

        <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
    </v-card>
</template>
