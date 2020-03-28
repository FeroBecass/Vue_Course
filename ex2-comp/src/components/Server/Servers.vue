<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-list-servers :servers="servers"></app-list-servers>
        </ul>
    </div>
</template>

<script>
    import listServer from "./listServer.vue";

    export default {
        data: function () {
            return {
                servers: [
                    {id:1, status: 'Normal'},
                    {id:2, status: 'Critical'},
                    {id:3, status: 'Unknown'},
                    {id:4, status: 'Normal'},
                ]
            }
        },
        components: {
            'app-list-servers': listServer
        }
    }
</script>

<style>

</style>
