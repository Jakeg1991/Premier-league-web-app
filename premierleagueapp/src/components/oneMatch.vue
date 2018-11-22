<template>
    <div class="matchInfo">
    <div class="homeTeam">{{match.homeTeam.name}}</div>
    <div class="score">
        
        <div class="scoreNum">{{match.score.fullTime.homeTeam}} - {{match.score.fullTime.awayTeam}}</div>
        <div class="scoreDate">{{match.utcDate.substring(8, 10)+"-"+match.utcDate.substring(5,7 )+"-"+match.utcDate.substring(0, 4)}}</div>
        <div class="scoreDate">{{match.utcDate.substring(11, 16)+" UTC"}}</div>
        
        
        </div>
    <div class="awayTeam">{{match.awayTeam.name}}</div>
    </div>
</template>

<script>
export default {
props: ['match'],
data(){
    return{
        HomeTeamID: [0],
        AwayTeamID: [0]
    }

},
methods: {

getTeamID(){
    this.HomeTeamID=this.match.homeTeam.id
    this.AwayTeamID=this.match.awayTeam.id
}

},

mounted(){
this.getTeamID();
console.log(this.HomeTeamID)
console.log(this.AwayTeamID)

}
}
</script>

<style>
.matchInfo {
    
    padding: 5px;
    width: 100vw;
    margin: 0px;
    height: 100px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    text-align: center;
}

.homeTeam {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 33%;
    margin: 0px;
    height: 80px;
    background-color:rgba(156, 17, 17, 0.335)
}

.awayTeam {
       display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 33%;
    margin: 0px;
    height: 80px;
    background-color:rgba(156, 17, 17, 0.335)
}

.score {
       /* display: flex; */
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 33%;
    height: 80px;
    background-color:rgba(156, 17, 17, 0.335)
}

.scoreNum {

    font-size: 2em
}
.scoreDate {

    font-size: 0.65em
}

</style>


