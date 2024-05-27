<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { RouterView } from 'vue-router';

const isShowLeftPanel = ref<boolean>(true)

onMounted(() => {
  window.addEventListener('resize', handleResize)
  if(window.screen.width >768){
    isShowLeftPanel.value = true
  }else{
    isShowLeftPanel.value = false
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const handleResize = () => {
  if(window.screen.width < 768) {
    isShowLeftPanel.value = false
  }else{
    isShowLeftPanel.value = true
  }
}

</script>

<template>
    <v-layout style="height: 100vh;">
        <v-col style="background-color: #002E5B;height: 100%;display:flex;align-items: center;justify-content: center;" v-show="isShowLeftPanel">
            <img src="../assets/logoo.png" alt="" style="width: 25rem;">
        </v-col>
        <v-col style="height: 100%;display:flex;align-items: center;">
                <v-main>
                    <RouterView />
                </v-main>
        </v-col>
    </v-layout>
</template>