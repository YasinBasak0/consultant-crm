<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleSubmit = () => {
    // Giriş işlemleri burada gerçekleştirilebilir
    console.log('Kullanıcı adı:', username.value);
    console.log('Şifre:', password.value);
};
</script>

<template>
    <div class="mx-15">
        <v-card elevation="8" class="pa-5" >
            <v-card-title class="text-center">Giriş Yap</v-card-title>
            <v-card-text class="px-auto">
                <v-form @submit="handleSubmit">
                    <v-text-field v-model="username" label="Kullanıcı Adı" outlined></v-text-field>
                    <v-text-field v-model="password" label="Şifre" outlined type="password"></v-text-field>
                    <v-btn type="submit" color="primary" to="/">Giriş Yap</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>
