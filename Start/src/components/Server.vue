<template>
    <div>
        <li
                class="list-group-item"
                style="cursor: pointer"
                @click="serverSelected">
            Server #{{ server.id }}
        </li>
    </div>

</template>

<script>
    import {eventBus} from "../main";

    export default {
        props: ['server'],
        methods:{
            serverSelected(){
                eventBus.$emit('serverWasSelected', this.server);
            }
        }
    }
</script>

<style scoped>

</style>