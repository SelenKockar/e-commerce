// store/store.js
import { defineStore } from "pinia";

export const productStore = defineStore("productStore", {
    state: () => ({
        products: [],
        searchTerm: "",
    }),
    getters: {
        filteredProducts() {
            if (this.searchTerm.trim().length === 0) return this.products;
            return this.products.filter(p => p.title.includes(this.searchTerm));
        }
    },
    actions: {
        updateSearchTerm(value) {
            this.searchTerm = value;
        },
        async fetchProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                this.products = data;
            } catch (error) {
                console.error(error);
            }
        }
    }
});