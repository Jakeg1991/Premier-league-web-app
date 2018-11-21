<template>
  <div class="container">
    <div class="appWrapper">
      <div v-if="!TeamsLoading && !MatchesLoading">
        <MatchesBox :currentMatchday="this.currentMatchday" :matchList="this.matchList"/>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import MatchesBox from '@/components/MatchesBox.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'Table',
  components: {
    MatchesBox,
    NavBar
  },
  methods: {

    fetchTeams() {
      const myRequest = 'http://api.football-data.org/v2/competitions/2021/teams';
      fetch(myRequest, {
          headers: {
            "X-Auth-Token": "0defa9d84f8b4a76aa4544329a6678bb"
          }
        })
        .then(response => response.json())
        .then(teams => {
          this.currentMatchday = teams.season.currentMatchday;
          console.log(teams);
          this.TeamsLoading = false;
        })
        .catch(error => console.log(error))
    },
    fetchMatches() {
      const myRequest = 'http://api.football-data.org/v2/competitions/2021/matches';
      fetch(myRequest, {
          headers: {
            "X-Auth-Token": "0defa9d84f8b4a76aa4544329a6678bb"
          }
        })
        .then(response => response.json())
        .then(matchList => {
          this.matchList = matchList;
          this.MatchesLoading = false;
        })
        .catch(error => console.log(error))
    }
  },

  created() {
    this.fetchMatches();
    this.fetchTeams();


  },
  data() {
    return {
      currentMatchday: '',
      matchList: [],
      TeamsLoading: true,
      MatchesLoading: true,
    }
  }
}

</script>

<style scoped>
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 50px;
  display: flex;
}

.appWrapper {
  top: 10px;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.212);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>