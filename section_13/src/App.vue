<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | toLowercase }}</p>
                <hr>
                <input v-model="filterText">
                <p></p>
                <button @click="fruits.push('Berries')">Add New Item</button>

                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "./List.vue";
    import { fruitMinin } from "./fruitMixin.js";
    export default {
        data(){
            return {
                text: 'Hello there!',
            }
        },
        filters: {
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        components:{
            appList: List
        },
        mixins: [fruitMinin]
    }
</script>

<style>

</style>
