<template>
    <v-navigation-drawer v-model="isSidebarVisible" elevation="8">
    <v-list density="compact" nav v-for="item in NavigationRoutes">
        <v-list-item :prepend-icon="item.icon" :title="item.title" :active="isActive(item.to)" :to="item.to"></v-list-item>
    </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global'
import { computed } from 'vue';
import { NavigationRoutes } from './NavigationRoutes'
import { useRoute } from 'vue-router';

const globalStore = useGlobalStore()
const isSidebarVisible = computed(() => globalStore.isSidebarVisible)

function isActive(to: string): boolean {
  const route = useRoute().fullPath
  if (route === to) {
    return true
  }

  return false
}

</script>