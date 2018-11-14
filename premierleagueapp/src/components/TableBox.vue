<template>
<div class="appBox">

<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.MP }}</td>
      <td class="text-xs-right">{{ props.item.W }}</td>
      <td class="text-xs-right">{{ props.item.D }}</td>
      <td class="text-xs-right">{{ props.item.L }}</td>
      <td class="text-xs-right">{{ props.item.PTS }}</td>
    </template>
  </v-data-table>
</template>


</div>

</template>

<script>
import WeekSelector from '@/components/WeekSelector.vue'

export default {
  name: 'TableBox',
  components: {
    WeekSelector},
  
data () {
      return {
        headers: [
          {
            text: 'Team',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Matches Played', value: 'MP' },
          { text: 'Wins', value: 'W' },
          { text: 'Defeats', value: 'D' },
          { text: 'Losses', value: 'L' },
          { text: 'Points', value: 'PTS' }
        ],
        desserts: [
          {
            value: false,
            name: 'Arsenal',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Bournemouth',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Brighton & Hove Albion',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Burnley',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Cardiff City',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Chelsea',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Crystal Palace',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Everton',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Fulham',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Huddersfield Town',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Leicester City',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Liverpool',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Manchester City',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Manchester United',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Newcastle United',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Southampton',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Tottenham Hotspur',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Watford',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'West Ham United',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          {
            value: false,
            name: 'Wolverhampton Wanderers',
            MP: 4,
            W: 6,
            D: 4,
            L: 3,
            Pts: '23'
          },
          
        ]
      }
    }


}

</script>


<style scoped>
</style>


