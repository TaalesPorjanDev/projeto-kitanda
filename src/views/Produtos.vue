<template>
  <v-container class="py-4">
    <v-btn
      v-for="categoria in categorias"
      :key="categoria"
      @click="produtos.categoriaAtual = categoria"
      :variant="produtos.categoriaAtual === categoria ? 'flat' : 'outlined'"
      :color="produtos.categoriaAtual === categoria ? '#4e342e' : '#4e342e'"
      class="ma-1"
      rounded="lg"
    >
      {{ categoria }}
    </v-btn>
  </v-container>
  <v-container style="max-width: 1500px">
    <v-row>
      <v-col
        v-for="produto in produtosFiltrados"
        :key="produto.id"
        cols="6"
        sm="4"
        md="3"
        class="pa-2"
      >
        <v-card rounded="lg" elevation="2" color="white">
          <v-img :src="produto.imagem" height="230" cover></v-img>
          <v-card-title>{{ produto.nome }}</v-card-title>
          <v-card-subtitle>{{ produto.unidade }}</v-card-subtitle>
          <v-card-text
            class="font-weight-bold text-h6"
            style="color: #e65100"
            >{{ formatarPreco(produto.preco) }}</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#757575 "
              variant="flat"
              rounded="lg"
              icon="mdi-minus"
              @click="removerProduto(produto)"
            ></v-btn>
            <v-btn
              @click="adicionarProduto(produto)"
              color="#4e342e"
              variant="flat"
              rounded="lg"
              icon="mdi-plus"
            >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useProdutosStore } from '@/stores/produtos';
import { useCarrinhoStore } from '@/stores/carrinho';
const formatarPreco = (preco) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco);
};

const categorias = [
  'Todas',
  'Hortifruti',
  'Rotisseria',
  'Salgados',
  'Frios',
  'Marmitas',
  'Confeitaria',
  'Bebidas e Lanches Prontos',
];

const carrinho = useCarrinhoStore();
const produtos = useProdutosStore();
const produtosFiltrados = computed(() => produtos.filtrarPorCategoria);

const adicionarProduto = (produto) => {
  carrinho.adicionarItem(produto);
};

const removerProduto = (produto) => {
  carrinho.removerItem(produto);
};

onMounted(() => {
  produtos.getProdutos();
});
</script>

<style scoped></style>
