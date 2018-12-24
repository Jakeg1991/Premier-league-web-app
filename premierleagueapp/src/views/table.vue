<template>
  <div class="appWrapper">
    <div class="spacer"/>
    <div v-if="!standingsLoading">
      <table class="table">
        <thead>
          <th class="th-sm"> TEAM </th>
          <th class="th-sm"> MP </th>
          <th class="th-sm"> W </th>
          <th class="th-sm"> D </th>
          <th class="th-sm"> L </th>
          <th class="th-sm"> Pts </th>
        </thead>
        <tbody>
          <tr v-for="(team, index) in this.standings" :key="index">
            <td>{{standings[index].team.name}}</td>
            <td>{{standings[index].playedGames}}</td>
            <td>{{standings[index].won}}</td>
            <td>{{standings[index].draw}}</td>
            <td>{{standings[index].lost}}</td>
            <td>{{standings[index].points}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
    <div class="spinContainer">
      <img class="spin" src="../assets/Spinner-1s-200px.svg" alt="Loading..."> 
      </div>
    </div>
  </div>
</template>
<script>

  export default {
name: 'Table',
  components: {},

  data() {
    return {
      standings: [],
      standingsLoading: true,
    }
  },
  methods: {
    fetchStandings() {
      const myRequest = 'http://api.football-data.org/v2/competitions/2021/standings';
      fetch(myRequest, {
          headers: {
            "X-Auth-Token": "0defa9d84f8b4a76aa4544329a6678bb"
          }
        })
        .then(response => response.json())
        .then(standings => {
          this.standings = standings.standings[0].table;
          console.log(standings.standings[0].table);
          this.standingsLoading = false;
        })
        .catch(error => console.log(error))
    },
  },
  created() {
    this.fetchStandings();
  }
}
</script>

<style scoped>
  .spinner {

position: fixed;

top: 50vw;
left: 50vw;

}

  .spacer {
    width: 100%;
    height: 68px;
  }

  .appWrapper {
    top: 10px;
    width: 100vw;
    height: 100vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .table {
width: 100vw;
  
  }
</style>