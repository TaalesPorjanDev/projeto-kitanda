import { defineStore } from 'pinia'


export const useCarrinhoStore = defineStore('carrinho', {
    state: () => ({
        itens: []
    }),
    getters: {
        totalItens: (state) => state.itens.reduce((total, item) => total + item.quantidade, 0),
        totalPreco: (state) => state.itens.reduce((total, item) => total + (Number(item.preco) * item.quantidade), 0)
    },
    actions: {
         adicionarItem(item) {
            const index = this.itens.findIndex(i => i.id === item.id);
            if( index === -1) {
                this.itens.push({
                    ...item,
                    quantidade: 1
                })
            } else {
                this.itens[index].quantidade++
            }
        },
        removerItem(item) {
            const index = this.itens.findIndex(i => i.id === item.id)
            if(index !== -1) {
                if(this.itens[index].quantidade > 1) {
                    this.itens[index].quantidade--
                } else {
                    this.itens.splice(index, 1)
                }
            }
        },
        limparCarrinho() {
            this.itens = []
        }
    }
})