<template>
    <div class="container">
                <h1>Filters & Mixins</h1>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
    </div>
</template>

<script>
    import { fruitMinin } from "./fruitMixin.js";

    export default {
       mixins: [fruitMinin]
    }
</script>

<style>

</style>
