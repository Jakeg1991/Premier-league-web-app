<template>
<div class="MatchdaySelector">
    <v-card dark height="79px" width="100vw">
        <v-container>
            <v-layout>
                <div class="selectMatchday">
                    <v-select :items="totalMatchdays" outline dense label="Matchweek" background-color="rgba(85,85,85,0.5)"
                        v-model='currentMatchdaySelect' v-on:change="changeMatchday()"></v-select>
                </div>
                <v-btn fab small v-on:click='previousMatchday(),changeMatchday()' dark><v-icon dark right>keyboard_arrow_left</v-icon></v-btn>
                <v-btn fab small v-on:click='nextMatchday(),changeMatchday()' dark><v-icon dark right>keyboard_arrow_right</v-icon></v-btn>
                <v-btn v-on:click='selectLatestMatchday()' dark>Current</v-btn>
            </v-layout>
        </v-container>
    </v-card>
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
        selectLatestMatchday () {
            this.currentMatchdaySelect = this.currentMatchday
            this.$parent.filteredMatches(this.currentMatchdaySelect)
        },
        previousMatchday () {
            if (this.currentMatchdaySelect==1){}
            else {
            this.currentMatchdaySelect--
            this.$parent.filteredMatches(this.currentMatchdaySelect)}
        },
        nextMatchday () {
            if (this.currentMatchdaySelect==38){}
            else {
            this.currentMatchdaySelect++
            this.$parent.filteredMatches(this.currentMatchdaySelect)}
        },
        changeMatchday () {
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
left: 0px;
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


