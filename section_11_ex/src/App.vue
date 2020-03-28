<template>
    <div class="container">
        <form>
            <div class="row" v-if="!submited">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>FORM</h1>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <app-full-name v-model.lazy="fullName"></app-full-name>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model.lazy="email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="password"
                        >
                    </div>
                    <p>Store Data:</p>
                    <div class="form-group">
                            <label for="yes">
                                <input
                                        type="radio"
                                        id="yes"
                                        value="Yes"
                                        v-model="store"
                                        > Yes
                            </label>
                            <label for="no">
                                <input
                                        type="radio"
                                        id="no"
                                        value="No"
                                        v-model="store"
                                        > No
                            </label>

                    </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button @click.prevent="submited = true">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submited">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{store}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName.vue";

    export default {


        data(){
            return {
                fullName: 'Joaquim Tussas',
                email: '',
                password: '',
                store: 'No',
                submited: false

            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
