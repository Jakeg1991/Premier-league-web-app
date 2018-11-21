<template>

    <v-card fixed height="57px" width="100%" flat>
        <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
            <router-link to="/">
                <v-btn color="teal" flat value="Matches">
                    <span>Matches</span>
                    <v-icon>history</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/table">
                <v-btn color="teal" flat value="Table">
                    <span>Table</span>
                    <v-icon>favorite</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/chatLogin">
                <v-btn color="teal" flat value="Chat">
                    <span>Chat</span>
                    <v-icon>place</v-icon>
                </v-btn>
            </router-link>
        </v-bottom-nav>
    </v-card>
</template>


<script>
    export default {
        data() {
            return {
                bottomNav: 'recent'
            }
        }
    }
</script>
    
<style scoped>
    /* .Fixed {
        position: fixed;
        bottom: 30px;
    } */
</style>
    