<template>
    <div class="main">
        <div class="main_grid-area-a">
            <ProductMultiSelect/>
        </div>
        <div class="main_grid-area-b">
            <ProdactSelect/>
        </div>
        <div class="main_grid-area-c">
            <ProductsListMultiSelect/>
        </div>
        <div class="main_grid-area-d">
            <ProductsList/>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ProductsListMultiSelect } from 'widgets/products-list-multi-select';
import { ProductsList } from 'widgets/products-list-select'; 
import { ProductMultiSelect } from 'widgets/product-mullt-select';
import { ProdactSelect } from 'widgets/prodact-select';
</script>

<style scoped>
.main {
    display: grid;
    grid-template: "a . . b"
                   "c c d d";
    grid-template-rows: 150px auto;
    grid-template-columns: repeat(4, 1fr);
    min-height: calc(100vh - 40px);
    gap: 25px
}
.main_grid-area-a {
    grid-area: a;
}
.main_grid-area-b {
    grid-area: b;
}
.main_grid-area-c {
    grid-area: c;
}
.main_grid-area-d {
    grid-area: d;

}
</style>