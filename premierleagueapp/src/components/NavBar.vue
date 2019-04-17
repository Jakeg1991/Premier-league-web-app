<template>


<!-- <v-bottom-nav fixed :active.sync="bottomNav" :value="true">

  <v-btn color="teal" flat dark value="matches" to="/">
    <span>Matches</span>
    <v-icon>lens</v-icon>
  </v-btn>

  <v-btn color="teal" flat dark value="standings" to="/table">
    <span>Standings</span>
    <v-icon>adjust</v-icon>
  </v-btn>

  <v-btn color="teal" flat dark value="chatLogin" to="/chatLogin">
    <span>Chat</span>
    <v-icon>chat_bubble</v-icon>
  </v-btn>
</v-bottom-nav> -->

<v-navigation-drawer permanent>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>


        <!-- <v-bottom-nav light :value="true" absolute height="60">
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
        </v-bottom-nav> -->
 
 
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
    