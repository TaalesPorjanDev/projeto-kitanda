import { defineStore } from 'pinia';
import api from '../services/api';

export const useProdutosStore = defineStore('produtos', {
  state: () => ({
    produtos: [],
    loading: false,
    error: null,
    categoriaAtual: 'Todas',
  }),
  getters: {
     filtrarPorCategoria(state) {
      if(this.categoriaAtual === 'Todas') {
        return this.produtos
      } else {
        return state.produtos.filter(produto => produto.categoria === this.categoriaAtual)
      }

    },
  },
  actions: {
    async getProdutos() {
      this.loading = true;
      try {
       const { data } = await api.get('/produtos');
       this.produtos = data;
      } catch(error) {
        this.error = 'Não foi possivel encontrar os produtos, tente novamente!'
      } finally {
        this.loading = false
      }
    },
    
  },
});
