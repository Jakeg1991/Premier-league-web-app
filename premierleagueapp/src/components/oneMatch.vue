<template>
    <div class="matchInfo">
        <!-- <button v-on:click="this.getLogos(this.HomeTeamID, this.AwayTeamID)">Add 1</button> -->
        <div class="homeTeam" :style="homeLogoUpdate"></div>
        <div class="score">
            <div class="scoreNum">{{match.score.fullTime.homeTeam}} - {{match.score.fullTime.awayTeam}}</div>
            <div class="scoreDate">{{match.utcDate.substring(8, 10)+"-"+match.utcDate.substring(5,7
                )+"-"+match.utcDate.substring(0, 4)}}</div>
            <div class="scoreDate">{{match.utcDate.substring(11, 16)+" GMT"}}</div>
        </div>
        <div class="awayTeam" :style="awayLogoUpdate"></div>
    </div>
</template>

<script>
export default {
    props: ['match',
        'teams'
    ],
    data() {
        return {
            HomeTeamID: [0],
            AwayTeamID: [0],
            HomeTeamLogo: "undefined",
            AwayTeamLogo: "undefined",
            HomeTeamAcronym: "undefined",
            AwayTeamAcronym: "undefined",
        }

    },
    computed: {

        homeLogoUpdate() {
            return {
                'background-image': `url(${this.HomeTeamLogo})`,
            }
        },
        awayLogoUpdate() {
            return {
                'background-image': `url(${this.AwayTeamLogo})`,
            }
        }
    },
    methods: {

        getTeamID() {
            this.HomeTeamID = this.match.homeTeam.id
            this.AwayTeamID = this.match.awayTeam.id
        },


        getLogos(HomeID, AwayID) {
            for (var i = 0; i <= 19; i++) {
                if (this.teams[i].id == this.HomeTeamID) {
                    this.HomeTeamLogo = this.teams[i].crestUrl
                }
                if (this.teams[i].id == this.AwayTeamID) {
                    this.AwayTeamLogo = this.teams[i].crestUrl
                }
            }
        },
        getTLA(HomeID, AwayID) {
            for (var i = 0; i <= 19; i++) {
                if (this.teams[i].id == this.HomeTeamID) {
                    this.HomeTeamAcronym = this.teams[i].shortName
                }
                if (this.teams[i].id == this.AwayTeamID) {
                    this.AwayTeamAcronym = this.teams[i].shortName
                }
            }
        },
    },

    created() {
        this.getTeamID();
        this.getLogos(this.HomeTeamID, this.AwayTeamID);
        this.getTLA(this.HomeTeamID, this.AwayTeamID)
    },
    updated() {
        this.getTeamID();
        this.getLogos(this.HomeTeamID, this.AwayTeamID);
        this.getTLA(this.HomeTeamID, this.AwayTeamID)
    }
}
</script>

<style>
.homeLogo{
    position: relative;
    bottom: 3px;
    left: 90%;
    height: 75px;
    width: 30px;
    background-color: rgba(0, 0, 0, 0.418);
    background-size: auto 95%;
}

.matchInfo {
    padding: 5px;
    width: 100vw;
    margin: 0px;
    height: 85px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    text-align: center;
}

.homeTeam {
    padding: 10px;
    width: 37%;
    margin: 0px;
    height: 80px;
    background-color:rgba(54, 54, 54, 0.5);
    background-position:center;
    background-size: auto 95%;
    border-radius: 20px 0px 0px 20px;
    border-left: 2px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}

.awayTeam {
    padding: 10px;
    width: 37%;
    margin: 0px;
    height: 80px;
    background-color:rgba(54, 54, 54, 0.5);
    background-position: center;
    background-size: auto 95%;
    border-radius: 0px 20px 20px 0px;
    border-right: 2px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    
}

.score {
    color: white;
    padding: 20px;
    width: 29%;
    height: 80px;
    background-color:rgba(54, 54, 54, 0.5);
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}

.scoreNum {
    position: relative;
    bottom:20px;
    color: rgb(255, 198, 55);
    font-size: 1.7em;
}
.scoreDate {
    position: relative;
    bottom:20px;
    background-color: rgba(0, 0, 0, 0.397);
    color: white;
    font-size: 0.8em
}

@media only screen and (max-width: 350px) {
.scoreNum {
    font-size: 1.5em
}
.scoreDate {
    font-size: 0.6em
}}

</style>


