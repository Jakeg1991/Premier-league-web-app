<template>
  <div class="AppBox">
    <MatchdaySelector :currentMatchday="this.currentMatchday"/>
<table>
  <tbody>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Wolverhampton Wanderers</td>
      </tr>
  </tbody>
</table>



  <div class="appWrapper">
</div>

</div>

</template>

<script>
import MatchdaySelector from '@/components/MatchdaySelector.vue'
export default {
  name: 'MatchesBox',
  components: {
    MatchdaySelector
  },
  props: [
    'currentMatchday',
    'matchList'
    ],

  computed: {
    filteredMatches: function(){
      return this.matchlist.matches.matchday.filter((match) => {
        return match.title.includes(this.selectedMatchday);
      })
    console.log("test")}
  },

  data() {
    return {
      selectedMatchday: ["13"]
      
    }

    ;
  },
  created(){
    console.log("(matchesbox) the current matchday is " + this.currentMatchday)
    console.log(this.matchList.matches)
  },
  

}

;
</script>
<style scoped>.table td {
  border: none;
  vertical-align: middle;
  text-align: center;
  width: 33%;
  word-wrap: normal;
}

.score {
  font-size: 3em
}

.table tr {
  width: 100%;
  display: inline-table;
  table-layout: fixed;
}

table {
  height: 100%;
  display: -moz-groupbox;
}

tbody {
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>


