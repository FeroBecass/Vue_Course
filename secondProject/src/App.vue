<template>
    <div class="container">
        <app-head :quote-count="quotes.length" :max-quotes="maxQuotes"></app-head>
        <app-new @quoteAdded="newQuote"></app-new>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click on a Quote to Delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from "./components/Head.vue";
    import NewQuote from "./components/NewQuote.vue";
    import QuoteGrid from "./components/QuoteGrid.vue";

    export default {
        data: function(){
            return{
                quotes:[
                    'Just a Quote'
                ],
                maxQuotes: 10
            }

        },
        components:{
            appHead: Head,
            appNew: NewQuote,
            appQuoteGrid: QuoteGrid
        },
        methods: {
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes)
                    alert('Pls delete Quotes!')
                else
                    this.quotes.push(quote)
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        }
    }
</script>


<style>
</style>
