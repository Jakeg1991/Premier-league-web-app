<template>
<div class="appBox">
</div>
</template>

<script>
import MatchdaySelector from '@/components/MatchdaySelector.vue'

export default {
  name: 'TableBox',
  components: {
    MatchdaySelector},
  
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


