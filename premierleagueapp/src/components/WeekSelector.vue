<template>
<div class="WeekSelector">
    <v-flex xs6 sm3>
        <v-select
          :items="items"
          label="Round"
          solo
        ></v-select>
    </v-flex>
    <div class="ButtonWrapper">
        <v-btn color="rgba(255, 0, 0, 1)">Latest Round</v-btn>
    </div>
    <div class="DateMessage">

        <p>12.12.2018-12.12-2018</p>

    </div>
</div>
</template>

<script>

export default {
    name:'WeekSelector',
    data: () => ({
      items: ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5', 'Round 6', 'Round 7', 'Round 8']
    })
}
</script>

<style scoped>

.WeekSelector {
display: flex;
justify-content: space-around;
align-items: flex-start;
height: auto;
width: 100%;
border-style: dotted;
border-width: 2px;
flex-wrap: nowrap;
}

.DateMessage {
position:absolute;
top: 55px
}
</style>


