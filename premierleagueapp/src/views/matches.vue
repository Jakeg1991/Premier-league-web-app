<template>
<div class="appWrapper">
  <div class="spacer"/>
  <div v-if="!TeamsLoading && !MatchesLoading">
    <MatchdaySelector :currentMatchday="this.currentMatchday"/>
    <div v-for="(match, index) in this.chosenMatches" :key="index">
      <oneMatch :match="match" :teams="teams" />
    </div>
    <div class="spacer" />
  </div>
  <div v-else>
    <div class="spinContainer">
      <img class="spin" src="../assets/Spinner-1s-200px.svg" alt="Loading..."> 
      </div>
  </div>
</div>
</template>

<script>
import MatchdaySelector from '@/components/MatchdaySelector.vue'
import NavBar from '@/components/NavBar.vue'
import oneMatch from '@/components/oneMatch.vue'

export default {
  name: 'Table',
  components: {
    MatchdaySelector,
    NavBar,
    oneMatch
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
        this.selectedMatchday = teams.season.currentMatchday;
        this.teams = teams.teams
        console.log(teams.teams);
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
        console.log(this.matchList)
        this.filteredMatches(this.selectedMatchday)
        this.MatchesLoading = false;
      })
      .catch(error => console.log(error))
  },
  filteredMatches(num) {
    // console.log("test" + num)

    this.chosenMatches = this.matchList.matches.filter((match) => {
      return num == match.matchday;
    })
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
      selectedMatchday: '',
      chosenMatches: [],
      teams: "",
    }
  },


}

</script>

<style scoped>


.appWrapper {
  top: 10px;
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>