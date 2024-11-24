<template>
    <Container>
        <div class="products">
                <Product v-for="product in store.products" :name="product.name" :key="product.id"  @click="store.selectProduct(product.id)"/>
        </div>
    </Container>
</template>

<script lang="ts" setup>
import { Container } from 'features/container'
import { Product } from 'features/product'
import { useMulteSelectStore } from 'entities/multi-select-product';

const store = useMulteSelectStore()

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