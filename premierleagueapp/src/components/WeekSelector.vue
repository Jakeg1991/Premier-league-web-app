<template>
<div class="WeekSelector">
    <v-container>
        <v-layout>
            <v-select class="RoundButton" dark :items="items" label="Round" solo></v-select>
            <v-btn dark>Latest Round</v-btn>
        </v-layout>
    </v-container>
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
top: -13px;
position: fixed;
height: 67px;
width: 100vw;
z-index: 1;
background-color: rgba(0, 0, 0, 0.5)
}
</style>


