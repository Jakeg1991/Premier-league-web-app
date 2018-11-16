<template>
<div class="appBox">
<WeekSelector/>
  <table class="table">
    <div class="Spacer">
    </div>
    <tbody>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Wolverhampton Wanderers</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
      <tr>
        <td class="team1">Arsenal</td>
        <td class="score">1-0</td>
        <td class="team2">Bournemouth</td>
      </tr>
    </tbody>
  </table>


</div>

</template>

<script>
import WeekSelector from '@/components/WeekSelector.vue'

export default {
  name: 'MatchesBox',
  components: {
    WeekSelector},
}
</script>


<style scoped>
.Spacer{
  width: 100vw;
  height: 54px;
}

.table td {
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


