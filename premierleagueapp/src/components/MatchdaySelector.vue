<template>
<div class="MatchdaySelector">
    <v-container>
        <v-layout>
            <div class="selectMatchday">
                <v-select :items="totalMatchdays" v-model='currentMatchdaySelect' v-on:change="changeMatchday()"></v-select>
            </div>
            <v-btn v-on:click='selectLatestMatchday()' dark>Next Match</v-btn>
        </v-layout>
    </v-container>
</div>
</template>

<script>
export default {
    name: 'MatchdaySelector',
    props: ['currentMatchday'],
    data() {
        return {
            selectedDay: [],
            currentMatchdaySelect: 1,
            totalMatchdays: [],
        }
    },
    created() {
        for (var i = 1; i <= 38; i++) {
        this.totalMatchdays.push(i);}},

    mounted() {
        this.currentMatchdaySelect = this.currentMatchday
    },
        
    methods: {
        selectLatestMatchday: function () {
            console.log(this.currentMatchday)
            this.currentMatchdaySelect = this.currentMatchday
            this.$parent.filteredMatches(this.currentMatchdaySelect)
        },
        changeMatchday () {
            console.log("changing matchday...")
            // this.$emit('updateMatchday',this.selectedDay)
            this.$parent.filteredMatches(this.currentMatchdaySelect)

        }
    }
}

</script>

<style scoped>
.MatchdaySelector {
display: flex;
align-items: baseline;
top: -13px;
position: fixed;
height: 7px;
width: 100vw;
z-index: 1;
border-width: 1px;
border-style: dotted;
}

selectMatchday {
    width: 100vw
}
</style>


