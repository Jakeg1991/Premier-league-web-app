<template>
    <div class="MatchdaySelector">
        <v-container>
            <v-layout>
                <v-select :items="totalMatchdays" v-model='currentMatchdaySelect' v-on:change="changeMatchday()"></v-select>

                <v-btn v-on:click='selectLatestMatchday();changeMatchday()' dark>Latest</v-btn>
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
            currentMatchdaySelect: [],
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
        },
        changeMatchday: function () {
            console.log("changing matchday...")
            this.$emit('childToParent',this.selectedDay)

        }
    }
}

</script>

<style scoped>

.MatchdaySelector {
top: -13px;
position: fixed;
height: 7px;
width: 100vw;
z-index: 1;
background-color: rgba(0, 0, 0, 0.5)
}
</style>


