<template>
<div class="appWrapper">
  <div class="spacerTop" />
      <matchdaySelector ref="matchdaySelector" :matchesLoading="this.MatchesLoading"/>
  <div v-if="!TeamsLoading && !MatchesLoading">
    <div v-for="(match, index) in this.chosenMatches" :key="index" class="matchContainer">
      <oneMatch :match="match" :teams="teams"/>
    </div>
    <div class="spacerBottom" />
  </div>
  <div v-else>

<loadingSpinner/>

  </div>
</div>
</template>

<script>
import loadingSpinner from '@/components/loadingSpinner.vue'
import matchdaySelector from '@/components/matchdaySelector.vue'
import navBar from '@/components/navBar.vue'
import oneMatch from '@/components/oneMatch.vue'

export default {
  name: 'Table',
  components: {
    loadingSpinner,
    matchdaySelector,
    navBar,
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
          this.TeamsLoading = false;
          console.log(this.teams)
          this.updatematchdaySelector(teams.season.currentMatchday)
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
          this.filteredMatches(this.selectedMatchday)
          this.MatchesLoading = false;
        })
        .catch(error => console.log(error))
    },
    filteredMatches(num) {
      this.chosenMatches = this.matchList.matches.filter((match) => {
        return num == match.matchday;
      })
    },
    updatematchdaySelector(day) {
      this.$refs.matchdaySelector.defineCurrentMatchday(day)
    }
  },
  created() {
    this.fetchMatches()
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
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.matchContainer{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
  width: 100vw;
  padding: 0px, 10px, 0px, 10px
}
</style>