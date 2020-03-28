<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myon:click="test">Click Me</button>
                <hr>
                <div
                    style="width: 100px; height: 100px; background-color: lightgreen"
                    v-myon:mouseenter="mouseEnter" v-myon:mouseleave="mouseLeave">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            test(){
                alert('I was Clicked');
            },
            mouseEnter(){
                console.log('Mouse entered!');
            },
            mouseLeave(){
                console.log('Mouse Leave!')
            }
        },
        directives: {
            myon:{
                bind(el, binding, vnode){
                    /*if(binding.arg == 'click'){
                        el.onclick = function() {
                            binding.value();
                        }*/
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);

                }
            }
        }
    }
</script>

<style>
</style>
