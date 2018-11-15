<template>
<div class="appBox">
<WeekSelector/>


<table class="table table-striped">
  <tbody>
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

.table td {
   vertical-align: middle;
   text-align: center;
   width: 33%;
}
.score {
font-size: 1.5em

}

.table tr {
width: 100%;
display: inline-table;
table-layout: fixed;
}

table{
 height:100%;              
 display: -moz-groupbox;    
}
tbody{
  overflow-y: scroll;      
  height: 100%;            
  width: 100%;
  position: absolute;
}
</style>


