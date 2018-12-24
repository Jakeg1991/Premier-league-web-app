<template>
    <v-card dark fixed height="60px" width="100%">
        <v-bottom-nav light :active.sync="bottomNav" :value="true" absolute color="transparent" height="60">
            <router-link to="/">
                <v-btn color="white" flat value="Matches">
                    <span>Matches</span>
                    <v-icon>lens</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/table">
                <v-btn light color="white" flat value="Table">
                    <span>Standings</span>
                    <v-icon>adjust</v-icon>
                </v-btn>
            </router-link>
            <router-link to="/chatLogin">
                <v-btn color="white" flat value="Chat">
                    <span>Chat</span>
                    <v-icon>chat_bubble</v-icon>
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
    