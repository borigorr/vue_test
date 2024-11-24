<template>
    <div class="product">
        {{ props.name }}
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { ProductProps } from '../model';

const props = defineProps<ProductProps>()
</script>

<style scoped>
.product {
    width: 50px;
    height: 50px;
    text-align: center;
    border: 10px solid #000;
    
}
</style>