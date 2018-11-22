<template>
  <div class="appWrapper">
    <div class="spacer" />
    <div v-if="!TeamsLoading && !MatchesLoading">
      <MatchesBox :currentMatchday="this.currentMatchday" :matchList="this.matchList" />
      <div v-for="(match, index) in this.chosenMatches" :key="index">
        <oneMatch :match="match" />
      </div>
      <div class="spacer" />
    </div>
    <div v-else>
      <p class="spinner">Loading...</p>
    </div>
  </div>
</template>

<script>
import MatchesBox from '@/components/MatchesBox.vue'
import NavBar from '@/components/NavBar.vue'
import oneMatch from '@/components/oneMatch.vue'

export default {
  name: 'Table',
  components: {
    MatchesBox,
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
        console.log(this.matchList)
        this.filteredMatches(this.selectedMatchday)
        this.MatchesLoading = false;
      })
      .catch(error => console.log(error))
  },
  filteredMatches(num) {
    console.log("test" + num)

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
      selectedMatchday: 13,
      chosenMatches: []
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
.spacer {
  width: 100%;
  height:68px;
}

.spinner {

position: fixed;

top: 50vw;
left: 50vw;

}
</style>