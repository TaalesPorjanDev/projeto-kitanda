<template>
  <v-container style="max-width: 1280px">
    <h1 class="text-h4 font-weight-bold mb-6" style="color: #424242">
      Meu Carrinho
    </h1>

    <template v-for="item in carrinho.itens" :key="item.id">
      <v-card
        v-if="item"
        rounded="lg"
        elevation="2"
        class="mb-3"
        color="white"
      >
        <v-row align="center" no-gutters class="pa-3">
          <v-col
            cols="2"
            style="min-width: 100px"
            class="d-flex align-center justify-center"
          >
            <v-img
              :src="item.imagem"
              style="width: 150px; height: 150px"
              contain
              rounded="lg"
            ></v-img>
          </v-col>

          <v-col>
            <p class="font-weight-bold text-grey-darken-3 text-body-1">
              {{ item.nome }}
            </p>
            <p class="text-body-2 text-grey-darken-1">{{ item.unidade }}</p>
          </v-col>

          <v-col cols="auto" class="text-right">
            <p class="font-weight-bold" style="color: #e65100">
              {{ formatarPreco(item.preco * item.quantidade) }}
            </p>
            <p class="text-caption text-grey-darken-1 mb-2">
              Qtd: {{ item.quantidade }}
            </p>
            <div class="d-flex ga-2 justify-end">
              <v-btn
                color="#757575"
                variant="flat"
                rounded="lg"
                icon="mdi-minus"
                size="small"
                @click="carrinho.removerItem(item)"
              />
              <v-btn
                color="#4e342e"
                variant="flat"
                rounded="lg"
                icon="mdi-plus"
                size="small"
                @click="carrinho.adicionarItem(item)"
              />
            </div>
          </v-col>
        </v-row>
      </v-card>
    </template>

    <!-- carrinho vazio -->
    <v-card v-if="carrinho.itens.length === 0" rounded="lg" elevation="2" color="white" class="pa-8 text-center">
      <v-icon size="60" color="grey-lighten-1">mdi-cart-off</v-icon>
      <p class="text-h6 text-grey-darken-1 mt-4">Seu carrinho está vazio!</p>
      <v-btn color="#4E342E" variant="flat" rounded="lg" class="mt-4" to="/produtos">
        Ver Produtos
      </v-btn>
    </v-card>

    <!-- total e finalizar -->
    <v-card v-if="carrinho.itens.length > 0" rounded="lg" elevation="2" color="white" class="mt-4 pa-4">
      <v-row align="center">
        <v-col>
          <p class="text-grey-darken-1">Taxa de Entrega</p>
        </v-col>
        <v-col class="text-right">
          <p class="text-grey-darken-1">{{ formatarPreco(7) }}</p>
        </v-col>
      </v-row>

      <v-divider class="my-2"></v-divider>

      <v-row align="center">
        <v-col>
          <p class="font-weight-bold text-h6" style="color: #424242">Total</p>
        </v-col>
        <v-col class="text-right">
          <p class="font-weight-bold text-h6" style="color: #e65100">
            {{ formatarPreco(carrinho.totalPreco + 7) }}
          </p>
        </v-col>
      </v-row>

      <v-btn color="#4E342E" variant="flat" rounded="lg" block class="mt-3">
        Finalizar Pedido
      </v-btn>
    </v-card>
  </v-container>
</template>

    

<script setup>
import { useCarrinhoStore } from '@/stores/carrinho';

const carrinho = useCarrinhoStore();
const formatarPreco = (preco) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco);
};
</script>

<style scoped></style>