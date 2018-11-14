<template>
<div class="WeekSelector">
    <v-flex xs6 sm3>
        <v-select :items="items" label="Round" outline></v-select>
    </v-flex>
    <div class="ButtonWrapper">
        <v-btn color="rgba(255, 0, 0, 1)">Latest Round</v-btn>
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

.ButtonWrapper {
/* margin-left: 2.5%;
margin-top: 2%; */


}


.WeekSelector {
display: flex;
height: 15%;
width: 100%;
border-style: dotted;
border-width: 2px;
flex-wrap: nowrap;

}
</style>


