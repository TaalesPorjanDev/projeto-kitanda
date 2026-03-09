<template>
  <v-app-bar color="white" elevation="0" height="100">
    <v-container class="d-flex align-center" style="max-width: 1280px">
      <v-toolbar-title>
        <router-link to="/">
          <img :src="logo" alt="Logo Carla" height="70" />
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon size="x-large">
        <v-badge :content="carrinho.totalItens" color="red" overlap>
          <router-link class="carrinho-link" to="/carrinho">
            <v-icon size="35">mdi-cart</v-icon>
          </router-link>
        </v-badge>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import logo from '@/assets/logokitanda.png';
import { useCarrinhoStore } from '@/stores/carrinho';

const carrinho = useCarrinhoStore();
</script>

<style scoped>
img {
  object-fit: contain;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Se quiser só para o ícone do carrinho */
.carrinho-link {
  color: inherit;
  text-decoration: none;
}

.carrinho-link:hover {
  color: inherit; /* mantém a cor original ao passar o mouse */
}
</style>
