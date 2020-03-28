<template>
    <li
            class="list-group-item"
            v-for="index in 5">
        Server #{{ servers[index].id }}
    </li>
</template>

<script>
    import {eventBus} from "../../main.js";

    export default {
        props: ['servers']
    }
</script>

<style scoped>

</style>