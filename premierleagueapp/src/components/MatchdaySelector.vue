<template>
<v-card dark class="upper, MatchdaySelector" height="65px">
    <div v-if=matchesLoading></div>
    <div v-else>
    <v-layout>
        <div class="matchSelect">
            <p class="matchSelectText">Matchweek</p>
            <v-select :items="totalMatchdays" solo dense background-color="rgba(85,85,85,0.3)"
                v-model='currentMatchdaySelect' v-on:change="changeMatchday()"></v-select>
        </div>
        <!-- <v-btn fab small v-on:click='previousMatchday(),changeMatchday()' dark>
                    <v-icon dark right>keyboard_arrow_left</v-icon>
                </v-btn>
                <v-btn fab small v-on:click='nextMatchday(),changeMatchday()' dark>
                    <v-icon dark right>keyboard_arrow_right</v-icon>
                </v-btn>
                <v-btn v-on:click='selectLatestMatchday()' dark>Current</v-btn> -->
            <!-- <v-flex xs12 sm6 class="py-2"> -->
                <!-- <v-btn v-on:click='testFunc()'>TEST</v-btn> -->

        <div class="buttonContainer">
    <v-btn small color="success" v-on:click='selectCurrentMatchday()'>Current</v-btn>
    <v-btn-toggle multiple>
        <v-btn v-on:click='selectPreviousMatchday(),changeParentMatchday()'>
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn v-on:click='selectNextMatchday(),changeParentMatchday()'>
            <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
    </v-btn-toggle>
</div>

            <!-- </v-flex> -->
    </v-layout>
    </div>
</v-card>

</template>
<script>
export default {
    name: 'MatchdaySelector',
    props: ['currentMatchdayImport','matchesLoading'],
    data() {
        return {
            currentMatchday: [],
            selectedDay: [],
            currentMatchdaySelect: [1],
            totalMatchdays: [],
        }
    },
    created() {
        this.totalMatchdays = this.populateMatchdays(1,38)
        console.log("--CREATED--")
        this.testFunc()
    },
    mounted() {
        this.currentMatchday = 19
        this.currentMatchdaySelect = this.currentMatchday
        console.log("--MOUNTED--")
        this.testFunc()
    },
        
    methods: {
        testFunc(){
            console.log("currentMatchdayVV")
            console.log(this.currentMatchday)
            console.log("selectedDayVV")
            console.log(this.selectedDay)
            console.log("currentMatchdaySelectVV")
            console.log(this.currentMatchdaySelect)
            console.log("totalMatchdaysVV")
            console.log(this.totalMatchdays)
            console.log("currentMatchdayImportVV")
            console.log(this.currentMatchdayImport)
            console.log("-----------------------------------")
        },

        populateMatchdays(firstMatchday,lastMatchday) {
            var lowEnd = firstMatchday;
            var highEnd = lastMatchday;
            var arr = [];
            while (lowEnd <= highEnd) {
                arr.push(lowEnd++);
            }
            return arr
        },

        selectCurrentMatchday () {
            this.currentMatchdaySelect = this.currentMatchday
            this.$parent.filteredMatches(this.currentMatchdaySelect)
        },
        selectPreviousMatchday () {
            if (this.currentMatchdaySelect<=1){}
            else {
            this.currentMatchdaySelect--
            this.$parent.filteredMatches(this.currentMatchdaySelect)}},
            // console.log(this.currentMatchdaySelect)},
        selectNextMatchday () {
            if (this.currentMatchdaySelect>=38){}
            else {
            this.currentMatchdaySelect++
            this.$parent.filteredMatches(this.currentMatchdaySelect)}
        },
        changeParentMatchday () {
            this.$parent.filteredMatches(this.currentMatchdaySelect)

        }
    }}


</script>

<style scoped>
.matchSelectText {
    bottom: 16px;
    left: 20px;
    position: absolute;
    font-size:0.8em
}

.matchSelect {
    width:70px
}

.buttonContainer {
height: 65px;
position: absolute;
top: 10%;
right: 5%;
display: flex;
align-content: center;
align-items: center;

}

.MatchdaySelector {
padding: 14px;
display: flex;
top: -13px;
left: 0px;
position: fixed;
height: 7px;
width: 100vw;
z-index: 1;
border-width: 1px;
border-style: dotted;
}
</style>


