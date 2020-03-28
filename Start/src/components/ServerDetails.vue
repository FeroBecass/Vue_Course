<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please Select a server</p>
        <div v-else>
            <p>Server Id: {{server.id}}</p>
            <p>Server Status: {{server.state}}</p>
            <hr>
            <button @click="changeToNormal">Change to Normal</button>
        </div>

    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    export default {
        data: function(){
            return {
                server: null
            }
        },
        methods: {
            changeToNormal(){
                this.server.state = 'Normal';
                //eventBus.$emit('serverChangeToNormal', this.server);
            }
        },
        created(){
            eventBus.$on('serverWasSelected', (server) => {
                this.server = server;
            });
        }

    }
</script>

<style scoped>

</style>