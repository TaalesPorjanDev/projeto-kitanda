<template>
  <div>
    <v-sheet color="#FFB74D" elevation="0">
      <v-container
        style="max-width: 1280px;"
        class="d-flex flex-column align-center py-16"
      >
        <h1
          class="text-h1 font-weight-black mb-2 text-center"
          style="color: #424242; letter-spacing: -1px; text-transform: uppercase;"
        >
          Quitandinha e Rotisseria da Carla
        </h1>

        <p class="text-body-2 mb-10 text-center" style="color: #616161">
          Frescor e sabor direto para sua mesa!
        </p>

        <v-btn
          color="white"
          variant="flat"
          rounded="lg"
          size="x-large"
          style="min-width: 250px;"
          to="/produtos"
          class="mb-12"
        >
          <span style="color: #4E342E;">Ver Produtos 🛒</span>
        </v-btn>

        <v-row justify="center" class="mt-4" style="width: 100%;">
          <v-col cols="12" sm="6" md="3">
            <v-card color="white" elevation="2" rounded="lg" class="pa-6 card-hover">
              <div class="d-flex align-center ga-3">
                <v-icon size="40" color="green-darken-2">mdi-run-fast</v-icon>
                <div>
                  <p class="font-weight-bold text-grey-darken-3 text-body-2">Chega na sua Casa</p>
                  <p class="text-caption text-grey-darken-1">Compre online e receba no conforto do seu lar</p>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card color="white" elevation="2" rounded="lg" class="pa-6 card-hover" >
              <div class="d-flex align-center ga-3">
                <v-icon size="40" color="green-darken-2">mdi-basket</v-icon>
                <div>
                  <p class="font-weight-bold text-grey-darken-3 text-body-2">Frescor Garantido</p>
                  <p class="text-caption text-grey-darken-1">Frutas, verduras e legumes selecionados diariamente</p>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card color="white" elevation="2" rounded="lg" class="pa-6 card-hover" >
              <div class="d-flex align-center ga-3">
                <v-icon size="40" color="green-darken-2">mdi-cart-check</v-icon>
                <div>
                  <p class="font-weight-bold text-grey-darken-3 text-body-2">Tudo em um só Clique</p>
                  <p class="text-caption text-grey-darken-1">Mais de 500 produtos prontos para você escolher</p>
                </div>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-card color="white" elevation="2" rounded="lg" class="pa-6 card-hover" >
              <div class="d-flex align-center ga-3">
                <v-icon size="40" color="green-darken-2">mdi-sprout</v-icon>
                <div>
                  <p class="font-weight-bold text-grey-darken-3 text-body-2">Do Produtor para Você</p>
                  <p class="text-caption text-grey-darken-1">Preços justos direto do produtor para você</p>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-sheet>
 
  </div>
</template>
<script setup></script>

<style scoped>

.card-hover {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.card-hover:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
}

</style>
