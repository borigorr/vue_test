import { defineStore } from 'pinia'

import { State, Product } from '../models'

export const useMulteSelectStore = defineStore('multiSelectStore', {
    state: (): State => {
        return {
            products: [
                {
                    "id": 1,
                    "name": "Shoes 1"
                },
                {
                    "id": 2,
                    "name": "Shoes 2"
                },
                {
                    "id": 3,
                    "name": "Shoes 3"
                },
                {
                    "id": 4,
                    "name": "Shoes 4"
                },
                {
                    "id": 5,
                    "name": "T-shirt 1"
                },
                {
                    "id": 6,
                    "name": "T-shirt 2"
                },
                {
                    "id": 7,
                    "name": "T-shirt 3"
                },
                {
                    "id": 8,
                    "name": "T-shirt 4"
                }
            ] as Product[],
            selectProducts: [] as Product[]
        }
    },
    getters: {
        allProductCount: (state) => state.products.length,
        selectProductCount: (state) => state.selectProducts.length
    },
    actions: {
        selectProduct(id: number) {
            const product: Product | undefined = this.products.find((product: Product) => product.id === id)
            if (!product) {
                return
                
            }
            if (this.selectProducts.length <= 5) {
                this.selectProducts.push(product)
            }
        }
    }

})