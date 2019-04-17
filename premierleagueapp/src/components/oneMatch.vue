<template>
<!-- <div class="matchInfo">
    <div class="homeTeam" :style="homeLogoUpdate">
        <v-layout row justify-center>
            <div class="modalClicker" @click="Modal = true">
            </div>
            <v-dialog dark v-model="Modal" max-width="400">
                <v-card>
                    <v-card-title class="display-1">{{this.HomeTeamName}}</v-card-title>
                    <v-card-title class="title">
                        matchday {{match.matchday}} Results: 
                    </v-card-title>
                    <v-card-text>Goals at fulltime: {{match.score.fullTime.homeTeam}}<br>
                    Goals at halftime: {{match.score.halfTime.homeTeam}}<br>
                    Penalties: {{match.score.penalties.homeTeam}}</v-card-text>
                    <div class="homeTeamModal" :style="homeLogoUpdate" />
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat="flat" @click="Modal = false">
                            Exit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
    <div class="score">
        <div class="scoreNum"><p>{{match.score.fullTime.homeTeam}} - {{match.score.fullTime.awayTeam}}</p></div>
        <div class="scoreDate"><div>{{match.utcDate.substring(8, 10)+"-"+match.utcDate.substring(5,7
            )+"-"+match.utcDate.substring(0, 4)}}</div>
        <div>{{match.utcDate.substring(11, 16)+" GMT"}}</div>
        </div>
    </div>
    <div class="awayTeam" :style="awayLogoUpdate">

    <v-layout row justify-center>
            <div class="modalClicker" @click="ModalAway = true">
            </div>
            <v-dialog dark v-model="ModalAway" max-width="400">
                <v-card>
                    <v-card-title class="display-1">{{this.AwayTeamName}}</v-card-title>
                    <v-card-title class="title">
                        matchday {{match.matchday}} Results: 
                    </v-card-title>
                    <v-card-text>Goals at fulltime: {{match.score.fullTime.awayTeam}}<br>
                    Goals at halftime: {{match.score.halfTime.awayTeam}}<br>
                    Penalties: {{match.score.penalties.awayTeam}}</v-card-text>
                    <div class="homeTeamModal" :style="awayLogoUpdate" />
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat="flat" @click="ModalAway = false">
                            Exit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>



    </div>
</div> -->


<div class="matchInfoContainer">
    <div class="homeTeamArea" @click="Modal = true">
        <div class="teamLogoArea" :style="homeLogoUpdate"></div>
    </div>
    <div class="scoreArea">

            <p class="score">{{match.score.fullTime.homeTeam}} - {{match.score.fullTime.awayTeam}}</p>
            <p class="dateInfo">{{match.utcDate.substring(8, 10)+"-"+match.utcDate.substring(5,7
            )+"-"+match.utcDate.substring(0, 4)}} <br> {{match.utcDate.substring(11, 16)+" GMT"}} </p>

    </div>
    <div class="awayTeamArea" @click="Modal = true">
        <div class="teamLogoArea" :style="awayLogoUpdate"></div>
    </div>
</div>


</template>

<style>
.score{
    display: inline;
    margin: 0;
    color: rgb(255, 198, 55);
    font-size: 1.7em;
}

.dateInfo{
    display: inline;
    margin: 0;
    color: rgb(255, 255, 255);
       font-size: 0.8em;
}

.matchInfoContainer{
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
    height: 85px;
    width: 100%;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.397);
    border-radius: 20px;
    border-color: antiquewhite;
    border-style: solid;
    border-width: 1px
}
.teamLogoArea{
    width: 100%;
    height: 100%;
    background-position:center;
    background-size: auto 95%;
}


.homeTeamArea{
    width:33%;
    height: 100%;
    padding: 5px;
}
.scoreArea{
			display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
    width:33%;
    height: 100%;
    background-position:center;
    background-size: auto 95%;
}

.scoreNum {
    color: rgb(255, 198, 55);
    font-size: 1.7em;
}
.scoreDate {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: rgba(0, 0, 0, 0.397);
    color: white;
    font-size: 0.70em;
    padding: 5px;
}

.awayTeamArea{
    width:33%;
    height: 100%;
    padding: 5px;
}



/* OLD */
.modalClicker{
position: relative;
bottom:10px;
height: 80px;
width: 90px;
background-color: rgba(0, 0, 0, 0)
}

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
    height: 80px;
    background-color:rgba(0, 0, 0, 0.5);
    background-position:center;
    background-size: auto 95%;
    border-radius: 20px 0px 0px 20px;
    border-left: 2px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
}

.homeTeamModal {
    margin: 0px;
    height: 150px;
    background-position:center;
    background-size: auto 95%;
}

.awayTeam {
    padding: 10px;
    width: 37%;
    margin: 0px;
    height: 80px;
    height: 80px;
    background-color:rgba(0, 0, 0, 0.5);
    background-position: center;
    background-size: auto 95%;
    border-radius: 0px 20px 20px 0px;
    border-right: 2px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    
}
@media only screen and (max-width: 350px) {
.scoreNum {
    font-size: 1.5em
}
.scoreDate {
    font-size: 0.5em
}}

</style>


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
            HomeTeamName: "undefined",
            AwayTeamName: "undefined",
            Modal: false,
            ModalAway: false
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
                    this.HomeTeamName = this.teams[i].name
                }
                if (this.teams[i].id == this.AwayTeamID) {
                    this.AwayTeamName = this.teams[i].name
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
        console.log(this.match)
    }
}
</script>

