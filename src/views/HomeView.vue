<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <v-row>
    <v-col>
      <v-card elevation="4">
        <template v-slot:title>
          <h3>Müşteriler</h3>
        </template>
        <template v-slot:default>
          <div class="d-flex pa-6" style="justify-content: space-between;">
            <v-icon icon="fas fa-users" size="50"></v-icon>
            <h1>150</h1>
          </div>
        </template>
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="4">
        <template v-slot:title>
          <h3>Fırsatlar</h3>
        </template>
        <template v-slot:default>
          <div class="d-flex pa-6" style="justify-content: space-between;">
            <v-icon icon="fas fa-phone-volume" size="50"></v-icon>
            <h1>1050</h1>
          </div>
        </template>
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="4">
        <template v-slot:title>
          <h3>Şubeler</h3>
        </template>
        <template v-slot:default>
          <div class="d-flex pa-6" style="justify-content: space-between;">
            <v-icon icon="fas fa-building" size="50"></v-icon>
            <h1>30</h1>
          </div>
        </template>
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="4">
        <template v-slot:title>
          <h3>Kullanıcılar</h3>
        </template>
        <template v-slot:default>
          <div class="d-flex pa-6" style="justify-content: space-between;">
            <v-icon icon="fas fa-user" size="50"></v-icon>
            <h1>40</h1>
          </div>
        </template>
      </v-card>
    </v-col>
  </v-row>

  <!-- Charts -->
  <v-row>
    <v-col>
      <v-card elevation="4">
        <template v-slot:title>
          <h3>Tamamlanan Ödemeler</h3>
        </template>
        <template v-slot:default>
          <div class="pa-5" style="width: fit-content;margin-left: auto;margin-right: auto;">
            <Pie :data="data" :options="options" />
          </div>
        </template>
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="4">
        <template v-slot:title>
          <h3>Tamamlanan Hizmetler</h3>
        </template>
        <template v-slot:default>
          <div class="pa-5" style="width: fit-content;margin-left: auto;margin-right: auto;">
            <Pie :data="data" :options="options" />
          </div>
        </template>
      </v-card>
    </v-col>
  </v-row>
  
  
  <v-row>
    <v-col>
      <v-card elevation="4">
        <template v-slot:title>
          <h3>Kazanç</h3>
        </template>
        <template v-slot:default>
          <div class="d-flex pa-6" style="justify-content: space-between;">
            <v-icon icon="fas fa-euro-sign" size="50"></v-icon>
            <h1>8500 €</h1>
          </div>
        </template>
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="4">
        <template v-slot:title>
          <h3>Beklenen Ödemeler</h3>
        </template>
        <template v-slot:default>
          <div class="d-flex pa-6" style="justify-content: space-between;">
            <v-icon icon="fas fa-wallet" size="50"></v-icon>
            <h1>9500 €</h1>
          </div>
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>
