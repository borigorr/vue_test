<template>
    <Container>
        <div class="products-multi-select">
            <div class="products-multi-select_list">
                <Product v-for="(produt, index) in store.selectProducts" :key="index" :name="produt.name" />
            </div>
            <div class="products-multi-select_description">
                Selected {{ store.selectProductCount }} / {{ store.allProductCount }}
            </div>
        </div>
    </Container>
</template>

<script lang="ts" setup>
import { Container } from 'features/container';
import { Product } from 'features/product';
import { useMulteSelectStore } from 'entities/multi-select-product'

const store = useMulteSelectStore()

</script>

<style scoped>
.products-multi-select {
    padding: 10px;

}

.products-multi-select_list {
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.products-multi-select_description {
    text-align: center;
    padding: 25px;
}
</style>