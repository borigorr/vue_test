<template>
    <Container>
        <div class="products">
            <Product v-for="product in store.products" :key="product.id"  :name="product.name" @click="store.selectProduct(product.id)"/>
        </div>
    </Container>
</template>

<script lang="ts" setup>
import { Container } from 'features/container'
import { Product } from 'features/product'
import { useSelectStore } from 'entities/product-list'


const store = useSelectStore()
</script>

<style scoped>
.products {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 15px;
    gap: 10px;
    align-items: flex-start;
}
</style>