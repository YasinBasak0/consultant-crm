<template>
  <v-app-bar style="padding-left: 6px;">
    <div @click="globalStore.toggleSidebar(!isSidebarVisible)" v-show="isNavButton">
      <v-app-bar-nav-icon>
        <v-icon icon="fas fa-bars"></v-icon>
      </v-app-bar-nav-icon>
    </div>
    <v-app-bar-title>Oturum.de CRM</v-app-bar-title>
    <div style="justify-content: end;margin-right: 2rem;">
      <v-btn to="/auth/login" >
        <v-icon icon="fas fa-right-from-bracket"></v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/global';
import { computed, watch, ref, onMounted, onBeforeUnmount } from 'vue';

const globalStore = useGlobalStore()

const isSidebarVisible = computed(() => globalStore.isSidebarVisible)

const isNavButton = ref<boolean>(false)

onMounted(() => {
  window.addEventListener('resize', handleResize)
  if(window.screen.width < 1180) {
    isNavButton.value = true
    globalStore.toggleSidebar(false)
  }else{
    isNavButton.value = false
    globalStore.toggleSidebar(true)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const handleResize = () => {
  if(window.screen.width < 1180) {
    isNavButton.value = true
    globalStore.toggleSidebar(false)
  }else{
    isNavButton.value = false
    globalStore.toggleSidebar(true)
  }
}

</script>
