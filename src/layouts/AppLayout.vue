<template>
  <v-layout class="rounded rounded-md">
    <AppBar/>
    <Sidebar/>

    <v-main class="d-flex" style="min-height: 300px;width: 100%;">
      <div style="padding: 2rem;width: 100%;">
        <RouterView/>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppBar from '@/components/layout-components/AppBar.vue'
import Sidebar from '@/components/layout-components/sidebar/Sidebar.vue'
</script>
