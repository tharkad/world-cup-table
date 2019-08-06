import React, { Component } from 'react';
import classes from './PnpScoring.module.css';

let PnpScoreMatrix = {
    "2F": {
        "Win1Game": 2,
        "3rdInGroup": 5,
        "Last16": 9,
        "Quarters": 13,
        "4th": 15,
        "3rd": 18,
        "2nd": 20,
        "1st": 24
    },
    "2E": {
        "Win1Game": 1,
        "3rdInGroup": 4,
        "Last16": 8,
        "Quarters": 12,
        "4th": 14,
        "3rd": 17,
        "2nd": 19,
        "1st": 23
    },
    "2D": {
        "Win1Game": 0,
        "3rdInGroup": 3,
        "Last16": 7,
        "Quarters": 11,
        "4th": 13,
        "3rd": 16,
        "2nd": 18,
        "1st": 22
    },
    "3F": {
        "Win1Game": 0,
        "3rdInGroup": 3,
        "Last16": 7,
        "Quarters": 11,
        "4th": 13,
        "3rd": 16,
        "2nd": 18,
        "1st": 22
    },
    "2C": {
        "Win1Game": 0,
        "3rdInGroup": 2,
        "Last16": 6,
        "Quarters": 10,
        "4th": 12,
        "3rd": 15,
        "2nd": 17,
        "1st": 21
    },
    "3E": {
        "Win1Game": 0,
        "3rdInGroup": 2,
        "Last16": 6,
        "Quarters": 10,
        "4th": 12,
        "3rd": 15,
        "2nd": 17,
        "1st": 21
    },
    "2B": {
        "Win1Game": 0,
        "3rdInGroup": 1,
        "Last16": 5,
        "Quarters": 9,
        "4th": 11,
        "3rd": 14,
        "2nd": 16,
        "1st": 20
    },
    "3D": {
        "Win1Game": 0,
        "3rdInGroup": 1,
        "Last16": 5,
        "Quarters": 9,
        "4th": 11,
        "3rd": 14,
        "2nd": 16,
        "1st": 20
    },
    "4F": {
        "Win1Game": 0,
        "3rdInGroup": 1,
        "Last16": 5,
        "Quarters": 9,
        "4th": 11,
        "3rd": 14,
        "2nd": 16,
        "1st": 20
    },
    "2A": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 4,
        "Quarters": 8,
        "4th": 10,
        "3rd": 13,
        "2nd": 15,
        "1st": 19
    },
    "3C": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 4,
        "Quarters": 8,
        "4th": 10,
        "3rd": 13,
        "2nd": 15,
        "1st": 19
    },
    "4E": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 4,
        "Quarters": 8,
        "4th": 10,
        "3rd": 13,
        "2nd": 15,
        "1st": 19
    },
    "3B": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 3,
        "Quarters": 7,
        "4th": 9,
        "3rd": 12,
        "2nd": 14,
        "1st": 18
    },
    "4D": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 3,
        "Quarters": 7,
        "4th": 9,
        "3rd": 12,
        "2nd": 14,
        "1st": 18
    },
    "3A": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 2,
        "Quarters": 6,
        "4th": 8,
        "3rd": 11,
        "2nd": 13,
        "1st": 17
    },
    "4C": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 2,
        "Quarters": 6,
        "4th": 8,
        "3rd": 11,
        "2nd": 13,
        "1st": 17
    },
    "4B": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 1,
        "Quarters": 5,
        "4th": 7,
        "3rd": 10,
        "2nd": 12,
        "1st": 16
    },
    "4A": {
        "Win1Game": 0,
        "3rdInGroup": 0,
        "Last16": 0,
        "Quarters": 4,
        "4th": 6,
        "3rd": 9,
        "2nd": 11,
        "1st": 15
    }
}

class PnpScoring extends Component {

    teamDidWinKnockout = (teamID, games) => {
        for (const game of games) {
            let teamIndex = -1;
            let otherTeamIndex = -1;
            if (game.teams[0]["id"] === teamID) {
                teamIndex = 0;
                otherTeamIndex = 1;
            } else if (game.teams[1]["id"] === teamID) {
                teamIndex = 1;
                otherTeamIndex = 0;
            }
            
            if (teamIndex !== -1) {
                let team1Goals = 0;
                let team2Goals = 0;
                let team1Penalties = 0;
                let team2Penalties = 0;
            
                let goalsParsed1 = Number.parseInt(game.result[teamIndex]);
                if (Number.isNaN(goalsParsed1))
                    team1Goals = 0;
                else
                    team1Goals = goalsParsed1;
            
                let goalsParsed2 = Number.parseInt(game.result[otherTeamIndex]);
                if (Number.isNaN(goalsParsed2))
                    team2Goals = 0;
                else
                    team2Goals = goalsParsed2;
            
                let penaltiesParsed1 = Number.parseInt(game.penalties[teamIndex]);
                if (Number.isNaN(penaltiesParsed1))
                    team1Penalties = 0;
                else
                    team1Penalties = penaltiesParsed1;
            
                let penaltiesParsed2 = Number.parseInt(game.penalties[otherTeamIndex]);
                if (Number.isNaN(penaltiesParsed2))
                    team2Penalties = 0;
                else
                    team2Penalties = penaltiesParsed2;
            
                if (team1Goals > team2Goals) {
                    return true;
                } else if (team1Goals === team2Goals) {
                    if (team1Penalties > team2Penalties) {
                        return true;                
                    }
                }
            }
        }

        return false;
    }

    teamDidLoseKnockout = (teamID, games) => {
        for (const game of games) {
            let teamIndex = -1;
            let otherTeamIndex = -1;
            if (game.teams[0]["id"] === teamID) {
                teamIndex = 0;
                otherTeamIndex = 1;
            } else if (game.teams[1]["id"] === teamID) {
                teamIndex = 1;
                otherTeamIndex = 0;
            }
            
            if (teamIndex !== -1) {
                let team1Goals = 0;
                let team2Goals = 0;
                let team1Penalties = 0;
                let team2Penalties = 0;
            
                let goalsParsed1 = Number.parseInt(game.result[teamIndex]);
                if (Number.isNaN(goalsParsed1))
                    team1Goals = 0;
                else
                    team1Goals = goalsParsed1;
            
                let goalsParsed2 = Number.parseInt(game.result[otherTeamIndex]);
                if (Number.isNaN(goalsParsed2))
                    team2Goals = 0;
                else
                    team2Goals = goalsParsed2;
            
                let penaltiesParsed1 = Number.parseInt(game.penalties[teamIndex]);
                if (Number.isNaN(penaltiesParsed1))
                    team1Penalties = 0;
                else
                    team1Penalties = penaltiesParsed1;
            
                let penaltiesParsed2 = Number.parseInt(game.penalties[otherTeamIndex]);
                if (Number.isNaN(penaltiesParsed2))
                    team2Penalties = 0;
                else
                    team2Penalties = penaltiesParsed2;
            
                if (team1Goals < team2Goals) {
                    return true;
                } else if (team1Goals === team2Goals) {
                    if (team1Penalties < team2Penalties) {
                        return true;                
                    }
                }
            }
        }

        return false;
    }

    teamDidMakeItToGames = (teamID, games) => {
        for (const game of games) {
            if ((game.teams[0]["id"] === teamID) || (game.teams[1]["id"] === teamID)) {
                return true;
            }
        }

        return false;
    }

    teamDidFinish3rdInGroup = (teamID) => {
        for (const group in this.props.currentState.groups) {
            if (teamID === group.teams[2].id) {
                return true;
            }
        }

        return false;
    }

    getTeamPnpScore = (teamID) => {
        if (this.props.currentState.teams[teamID].pnpRanking === "") {
            return ({comment: "No Print and Play Rating", score: 0});
        } else if (this.teamDidWinKnockout(teamID, [this.props.currentState.knockout.finals[0]])) {
            return ({comment: "Won World Cup!", score: PnpScoreMatrix[this.props.currentState.teams[teamID].pnpRanking]["1st"]});
        } else if (this.teamDidLoseKnockout(teamID, [this.props.currentState.knockout.finals[0]])) {
            return ({comment: "2nd Place", score: PnpScoreMatrix[this.props.currentState.teams[teamID].pnpRanking]["2nd"]});
        } else if (this.teamDidWinKnockout(teamID, [this.props.currentState.knockout.finals[1]])) {
            return ({comment: "3rd Place", score: PnpScoreMatrix[this.props.currentState.teams[teamID].pnpRanking]["3rd"]});
        } else if (this.teamDidLoseKnockout(teamID, [this.props.currentState.knockout.finals[1]])) {
            return ({comment: "4th Place", score: PnpScoreMatrix[this.props.currentState.teams[teamID].pnpRanking]["4th"]});
        } else if (this.teamDidMakeItToGames(teamID, this.props.currentState.knockout.quarterFinals)) {
            return ({comment: "Quarterfinalist", score: PnpScoreMatrix[this.props.currentState.teams[teamID].pnpRanking]["Quarters"]});
        } else if (this.teamDidMakeItToGames(teamID, this.props.currentState.knockout.roundOf16)) {
            return ({comment: "Last 16", score: PnpScoreMatrix[this.props.currentState.teams[teamID].pnpRanking]["Last16"]});
        }


        return ({comment: "---", score: 0});
    }

    render() {
        let ownersDB = {};
        for (const teamID of Object.keys(this.props.currentState.teams)) {
            if (this.props.currentState.teams[teamID].owner !== "")
            {
                if (!ownersDB.hasOwnProperty(this.props.currentState.teams[teamID].owner)) {
                    ownersDB[this.props.currentState.teams[teamID].owner] = [];
                }

                let teamEntry = {teamID: teamID, comment: "", score: 0};
                ownersDB[this.props.currentState.teams[teamID].owner].push(teamEntry);
            }
        }

        for (const owner of Object.keys(ownersDB)) {
            for (let i = 0; i < ownersDB[owner].length; i++) {
                let scoreStruct = this.getTeamPnpScore(ownersDB[owner][i]["teamID"]);
                ownersDB[owner][i]["comment"] = scoreStruct["comment"];
                ownersDB[owner][i]["score"] = scoreStruct["score"];
            }
        }

        const scoringRows = [];
        for (const owner of Object.keys(ownersDB)) {
            let ownerScore = 0;
            for (const teamScoreStruct of ownersDB[owner]) {
                ownerScore += teamScoreStruct["score"];
            }
            scoringRows.push(
                <tr className={classes.RightField} key={owner}>
                    <th>{owner}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>{ownerScore}</th>
                </tr>);
                scoringRows.push(
                    ownersDB[owner].map((team, index) => {
                        return (
                            <tr key={owner + " " + team["teamID"]}>
                                <td></td>
                                <td>
                                    {this.props.currentState.teams[team["teamID"]].name}
                                </td>
                                <td>
                                    {this.props.currentState.teams[team["teamID"]].pnpRanking}
                                </td>
                                <td>
                                    {team["comment"]}
                                </td>
                                <td className={classes.RightField}>
                                    {team["score"]}
                                </td>
                            </tr>
                        )
                    })
                )
        }

        

        return (
            <div>
                <h2>Print and Play Scoring</h2>
                <div className={classes.PnpScoring}>
                    <table className={classes.ScoringTable}><tbody>
                        {scoringRows}
                    </tbody></table>
                </div>
            </div>
        );
    }
}

export default PnpScoring