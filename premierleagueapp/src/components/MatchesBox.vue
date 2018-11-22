<template>
  <div class="AppBox">
    <MatchdaySelector :currentMatchday="this.currentMatchday"/>
</div>

</template>

<script>
import MatchdaySelector from '@/components/MatchdaySelector.vue'
export default {
  name: 'MatchesBox',
  components: {
    MatchdaySelector,
  },
  props: [
    'currentMatchday',
    'matchList'
    ],

  data() {
    return {
      selectedMatchday: ["13"]
    }

    ;
  },
  methods:{
    filteredMatches(num){
      console.log('in matches box changing Matches ' + num)
      this.$parent.filteredMatches(num)
    }
  }

  

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


