<template>
<Container>
    <div class="select-rpoduct">
        {{ store.selectProductName }}
    </div>
</Container>
</template>

<script lang="ts" setup>
import { Container  } from 'features/container';
import { useSelectStore } from 'entities/product-list'

const store = useSelectStore()

</script>
<style scoped>
.select-rpoduct {
    font-size: 25px;
    text-align: center;
}
</style>