import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Group from '../../components/Group/Group';
import KnockoutStage from '../../components/Group/KnockoutStage';
import SimpleStorage, { clearStorage } from 'react-simple-storage';

class CupTable extends Component {
    defaultState = {
        groups: [
            {
                name: "Group A",
                teams: [
                    {
                        name: "France",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Nigeria",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Norway",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "South Korea",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },                    
                ],
                games: [
                    [["France", "South Korea"], ["",""]],
                    [["Norway", "Nigeria"], ["",""]],
                    [["Nigeria", "South Korea"], ["",""]],
                    [["France", "Norway"], ["",""]],
                    [["South Korea", "Norway"], ["",""]],
                    [["Nigeria", "France"], ["",""]],
                ]
            },
            {
                name: "Group B",
                teams: [
                    {
                        name: "China",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Germany",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "South Africa",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Spain",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },                    
                ],
                games: [
                    [["Germany", "China"], ["",""]],
                    [["Spain", "South Africa"], ["",""]],
                    [["Germany", "Spain"], ["",""]],
                    [["South Africa", "China"], ["",""]],
                    [["China", "Spain"], ["",""]],
                    [["South Africa", "Germany"], ["",""]]
                ]
            },
            {
                name: "Group C",
                teams: [
                    {
                        name: "Australia",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Brazil",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Italy",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Jamaica",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },                    
                ],
                games: [
                    [["Australia", "Italy"], ["",""]],
                    [["Brazil", "Jamaica"], ["",""]],
                    [["Australia", "Brazil"], ["",""]],
                    [["Jamaica", "Italy"], ["",""]],
                    [["Italy", "Brazil"], ["",""]],
                    [["Jamaica", "Australia"], ["",""]]
                ]
            },
            {
                name: "Group D",
                teams: [
                    {
                        name: "Argentina",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                   {
                        name: "England",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Japan",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Scotland",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    }             
                ],
                games: [
                    [["England", "Scotland"], ["",""]],
                    [["Argentina", "Japan"], ["",""]],
                    [["Japan", "Scotland"], ["",""]],
                    [["England", "Argentina"], ["",""]],
                    [["Scotland", "Argentina"], ["",""]],
                    [["Japan", "England"], ["",""]]
                ]
            },            
            {
                name: "Group E",
                teams: [
                    {
                        name: "Cameroon",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Canada",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Netherlands",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "New Zealand",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },                    
                ],
                games: [
                    [["Canada", "Cameroon"], ["",""]],
                    [["New Zealand", "Netherlands"], ["",""]],
                    [["Netherlands", "Cameroon"], ["",""]],
                    [["Canada", "New Zealand"], ["",""]],
                    [["Netherlands", "Canada"], ["",""]],
                    [["Cameroon", "New Zealand"], ["",""]]
                ]
            },
            {
                name: "Group F",
                teams: [
                    {
                        name: "Chile",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                   {
                        name: "Sweeden",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "Thailand",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    },
                    {
                        name: "United States",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: [],
                        thirdBreakers: [0,0,0,0,0,0,10],
                        thirdTiedWith: []
                    }             
                ],
                games: [
                    [["Chile", "Sweeden"], ["",""]],
                    [["United States", "Thailand"], ["",""]],
                    [["Sweeden", "Thailand"], ["",""]],
                    [["United States", "Chile"], ["",""]],
                    [["Sweeden", "United States"], ["",""]],
                    [["Thailand", "Chile"], ["",""]]
                ]
            }
        ],
        knockout: {}
    }

    deepCopy = (obj) => {
        if(typeof obj !== 'object' || obj === null) {
            return obj;
        }
    
        if(obj instanceof Date) {
            return new Date(obj.getTime());
        }
    
        if(obj instanceof Array) {
            return obj.reduce((arr, item, i) => {
                arr[i] = this.deepCopy(item);
                return arr;
            }, []);
        }
    
        if(obj instanceof Object) {
            return Object.keys(obj).reduce((newObj, key) => {
                newObj[key] = this.deepCopy(obj[key]);
                return newObj;
            }, {})
        }
    }

    teamCompare = (a, b) => {
        for (let i = 0; i < a.tibreakers.length - 1; i++) {
            if (a.tibreakers[i] > b.tibreakers[i])
                return -1;
            else if (a.tibreakers[i] < b.tibreakers[i])
                return 1;
        }

        if (a.tibreakers[6] > b.tibreakers[6])
            return 1;
        else if (a.tibreakers[6] < b.tibreakers[6])
            return -1;

        return 0;
    }

    teamThirdsCompare = (a, b) => {
        for (let i = 0; i < a.thirdBreakers.length - 1; i++) {
            if (a.thirdBreakers[i] > b.thirdBreakers[i])
                return -1;
            else if (a.thirdBreakers[i] < b.thirdBreakers[i])
                return 1;
        }

        if (a.thirdBreakers[6] > b.thirdBreakers[6])
            return 1;
        else if (a.thirdBreakers[6] < b.thirdBreakers[6])
            return -1;

        return 0;
    }


    constructThirdsGroup = (stateObj) => {
        const thirdGroup = {name: "Third Place Teams", teams: []};
        for (const group of stateObj.groups) {
            const team = group.teams[2];
            team.thirdBreakers = this.deepCopy(team.tibreakers);
            team.thirdBreakers[3] = 0;
            team.thirdBreakers[4] = 0;
            team.thirdBreakers[5] = 0;
            team.thirdBreakers[6] = 10;
            thirdGroup.teams.push(team);
        }
        thirdGroup.teams = thirdGroup.teams.sort((a, b) => {
            return this.teamThirdsCompare(a, b); 
        });

        let fullyTiedTeams = {};
        for (const team of thirdGroup.teams) {
            fullyTiedTeams[team.name] = 
                thirdGroup.teams.filter((subTeam) => {
                    if (team.name === subTeam.name)
                        return false;
                    if ((team.tibreakers[0] === subTeam.tibreakers[0]) &&
                        (team.tibreakers[1] === subTeam.tibreakers[1]) &&
                        (team.tibreakers[2] === subTeam.tibreakers[2]))
                        return true;
                    return false;
                });
        }

        for (let [key, value] of Object.entries(fullyTiedTeams)) {
            let teamIndex = thirdGroup.teams.findIndex((team) => {
                return key === team.name;
            });
            let team = thirdGroup.teams[teamIndex];
            team.thirdTiedWith = [];
            if (fullyTiedTeams[key].length > 0) {
                team.thirdTiedWith.push(
                    thirdGroup.teams.findIndex((subTeam) => {
                    return subTeam.name === team.name;
                }))
                for (const subTeam of value) {
                    team.thirdTiedWith.push(
                        thirdGroup.teams.findIndex((subSubTeam) => {
                        return subSubTeam.name === subTeam.name;
                    }))
                }
            }
            team.thirdTiedWith.sort();
        }

        stateObj["thirds"] = thirdGroup;
        return stateObj;
    }

    thirdTeamFromGroups = (groupNames, blacklist, stateObj) => {
        console.log("groupNames", groupNames);
        console.log("blacklist", blacklist);
        console.log("stateObj", stateObj);

        for (const groupName of groupNames) {
            const groupIndex = stateObj.groups.findIndex(subGroup => {
                return subGroup.name === groupName;
            });
            for (let i = 0; i < 4; i++) {
                if (stateObj.groups[groupIndex].teams[2].name ===
                    stateObj.thirds.teams[i].name) {
                        if (!blacklist.includes(stateObj.thirds.teams[i].name)) {
                            console.log("returning", stateObj.thirds.teams[i].name);
                            return stateObj.thirds.teams[i];
                        }
                    }
            }    
        }

        console.log("return null");
        return null;
    }

    constructKnockoutStage = (stateObj) => {
        let knockout = {roundOf16: []};
        let thirdTeams = [];
        let thirdGroups = [];

        for (const group of stateObj.groups) {
            for (let i = 0; i < 4; i++) {
                for (const team of group.teams) {
                    if (stateObj.thirds.teams[i].name === team.name) {
                        thirdTeams.push(team);
                        thirdGroups.push(group.name);
                    }
                }
            }
        }

        console.log("thirds", thirdTeams, thirdGroups);
        

        // knockout["roundOf16"].push({teams:[stateObj.groups[0].teams[1], 
        //     stateObj.groups[2].teams[1]], result:["",""]});
        // knockout["roundOf16"].push({teams:[stateObj.groups[3].teams[0], thirdTeams[1]], result:["",""]});

        // knockout["roundOf16"].push({teams:[stateObj.groups[0].teams[0], thirdTeams[2]], result:["",""]});
        // knockout["roundOf16"].push({teams:[stateObj.groups[1].teams[1], 
        //     stateObj.groups[5].teams[0]], result:["",""]})

        // knockout["roundOf16"].push({teams:[stateObj.groups[2].teams[0], thirdTeams[3]], result:["",""]});
        // knockout["roundOf16"].push({teams:[stateObj.groups[4].teams[0], 
        //     stateObj.groups[3].teams[1]], result:["",""]})

        // knockout["roundOf16"].push({teams:[stateObj.groups[1].teams[0], thirdTeams[1]], result:["",""]});
        // knockout["roundOf16"].push({teams:[stateObj.groups[5].teams[1], 
        //     stateObj.groups[4].teams[1]], result:["",""]})
    
        stateObj["knockout"] = knockout;
        console.log(stateObj);
        return stateObj;
    }

    state = this.deepCopy(this.constructThirdsGroup(this.defaultState));

    resetToDefaultState = () => {
        this.setState(this.defaultState);
    }

    // componentDidMount() {
    //     clearStorage();
    //     this.resetToDefaultState();
    //   }
    
    updateTeamsInGroupFromGames = (group) => {
        for (const game of group.games) {
            for (const team of group.teams) {
                if (team.name === game[0][0]) {
                    if (game[1][0] !== "") {
                        team.gf += parseInt(game[1][0]);
                        team.tibreakers[1] += parseInt(game[1][0]);
                        team.tibreakers[2] += parseInt(game[1][0]);
                    }
                    if (game[1][1] !== "") {
                        team.tibreakers[1] -= parseInt(game[1][1]);
                        team.ga = team.ga + parseInt(game[1][1]);
                    }
                    if ((game[1][0] !== "") && (game[1][1] !== "")) {
                        let gf = parseInt(game[1][0]);
                        let ga = parseInt(game[1][1]);
                        if (gf > ga) {
                            team.tibreakers[0] += 3;
                            team.wins += 1;
                        } else if (gf < ga) {
                            team.loses += 1;
                        } else {
                            team.tibreakers[0] += 1
                            team.ties += 1;
                        }
                    }
                } else if (team.name === game[0][1]) {
                    if (game[1][1] !== "") {
                        team.gf += parseInt(game[1][1]);
                        team.tibreakers[1] += parseInt(game[1][1]);
                        team.tibreakers[2] += parseInt(game[1][1]);
                    }
                    if (game[1][0] !== "") {
                        team.tibreakers[1] -= parseInt(game[1][0]);
                        team.ga += parseInt(game[1][0]);
                    }
                    if ((game[1][0] !== "") && (game[1][1] !== "")) {
                        let gf = parseInt(game[1][1]);
                        let ga = parseInt(game[1][0]);
                        if (gf > ga) {
                            team.tibreakers[0] += 3;
                            team.wins += 1;
                        } else if (gf < ga) {
                            team.loses += 1;
                        } else {
                            team.tibreakers[0] += 1;
                            team.ties += 1;
                        }
                    }
                }
            }
        }
        return(group);
    }

    updateTeamsFromGames = (stateCopy, groupIndex) => {
        stateCopy.groups[groupIndex].teams = 
            this.deepCopy(this.defaultState.groups[groupIndex].teams);

        stateCopy.groups[groupIndex] = this.updateTeamsInGroupFromGames(stateCopy.groups[groupIndex]);
        stateCopy.groups[groupIndex].teams = 
            stateCopy.groups[groupIndex].teams.sort((a, b) => {
                return this.teamCompare(a, b); 
            });

        let tiedTeams = {};
        for (const team of stateCopy.groups[groupIndex].teams) {
            tiedTeams[team.name] = 
                stateCopy.groups[groupIndex].teams.filter((subTeam) => {
                    if (team.name === subTeam.name)
                        return false;
                    if ((team.tibreakers[0] === subTeam.tibreakers[0]) &&
                        (team.tibreakers[1] === subTeam.tibreakers[1]) &&
                        (team.tibreakers[2] === subTeam.tibreakers[2]))
                        return true;
                    return false;
                });
        }

        const newTiedTeams = this.deepCopy(tiedTeams);
        for (const team of stateCopy.groups[groupIndex].teams) {
            if (newTiedTeams.hasOwnProperty(team.name)) {
                for (const subTeam of newTiedTeams[team.name]) {
                    delete newTiedTeams[subTeam.name];
                }               
            }
        }

        tiedTeams = newTiedTeams;

        for (let [key, value] of Object.entries(tiedTeams)) {
            if (value.length > 0) {
                let tieGroup = this.constructTiebreakerGroup(stateCopy.groups[groupIndex], key, value);
                tieGroup = this.updateTeamsInGroupFromGames(tieGroup);

                for (const subTeam of stateCopy.groups[groupIndex].teams) {
                    for (const subSubTeam of tieGroup.teams) {
                        if (subTeam.name === subSubTeam.name) {
                            subTeam.tibreakers[3] = subSubTeam.tibreakers[0];
                            subTeam.tibreakers[4] = subSubTeam.tibreakers[1];
                            subTeam.tibreakers[5] = subSubTeam.tibreakers[2];
                        }
                    }
                }
            }
        } 
        
        stateCopy.groups[groupIndex].teams = 
            stateCopy.groups[groupIndex].teams.sort((a, b) => {
                return this.teamCompare(a, b); 
        });

        let fullyTiedTeams = {};
        for (const team of stateCopy.groups[groupIndex].teams) {
            fullyTiedTeams[team.name] = 
                stateCopy.groups[groupIndex].teams.filter((subTeam) => {
                    if (team.name === subTeam.name)
                        return false;
                    if ((team.tibreakers[0] === subTeam.tibreakers[0]) &&
                        (team.tibreakers[1] === subTeam.tibreakers[1]) &&
                        (team.tibreakers[2] === subTeam.tibreakers[2]) &&
                        (team.tibreakers[3] === subTeam.tibreakers[3]) &&
                        (team.tibreakers[4] === subTeam.tibreakers[4]) &&
                        (team.tibreakers[5] === subTeam.tibreakers[5]))
                        return true;
                    return false;
                });
        }

        for (let [key, value] of Object.entries(fullyTiedTeams)) {
            let teamIndex = stateCopy.groups[groupIndex].teams.findIndex((team) => {
                return key === team.name;
            });
            let team = stateCopy.groups[groupIndex].teams[teamIndex];
            if (fullyTiedTeams[key].length > 0) {
                team.tiedWith.push(
                    stateCopy.groups[groupIndex].teams.findIndex((subTeam) => {
                    return subTeam.name === team.name;
                }))
                for (const subTeam of value) {
                    team.tiedWith.push(
                        stateCopy.groups[groupIndex].teams.findIndex((subSubTeam) => {
                        return subSubTeam.name === subTeam.name;
                    }))
                }
            }
            team.tiedWith.sort();
        }
 
    }

    scoreChangedHandler = (event, id) => {
        const groupIndex = this.state.groups.findIndex(group => {
            return group.name === id[0];
        });

       if (event.target.validity.valid) {
            let stateCopy = this.deepCopy(this.state);
            stateCopy.groups[groupIndex].games[id[1]][1][id[2]] = event.target.value;
            this.updateTeamsFromGames(stateCopy, groupIndex);
            this.constructThirdsGroup(stateCopy);
            this.constructKnockoutStage(stateCopy);
            this.setState(stateCopy);
       }
    }

    tieArrowHandler = (event, [group, teamIndex, upArrow]) => {
        const groupIndex = this.state.groups.findIndex(subGroup => {
            return subGroup.name === group.name;
        });

        let stateCopy = this.deepCopy(this.state);
        for (const i of stateCopy.groups[groupIndex].teams[teamIndex].tiedWith) {
            if (upArrow) {
                if (i === teamIndex - 1) 
                    stateCopy.groups[groupIndex].teams[i].tibreakers[6] = teamIndex;
                else if (i === teamIndex)
                    stateCopy.groups[groupIndex].teams[i].tibreakers[6] = teamIndex - 1;
                else   
                    stateCopy.groups[groupIndex].teams[i].tibreakers[6] = i;
            } else {
                if (i === teamIndex + 1) 
                    stateCopy.groups[groupIndex].teams[i].tibreakers[6] = teamIndex;
                else if (i === teamIndex)
                    stateCopy.groups[groupIndex].teams[i].tibreakers[6] = teamIndex + 1;
                else   
                    stateCopy.groups[groupIndex].teams[i].tibreakers[6] = i;
            }
        }
        stateCopy.groups[groupIndex].teams = stateCopy.groups[groupIndex].teams.sort((a, b) => {
            return this.teamCompare(a, b); 
        });
        this.constructThirdsGroup(stateCopy);
        this.constructKnockoutStage(stateCopy);
        this.setState(stateCopy);
    };

    thirdTieArrowHandler = (event, [group, teamIndex, upArrow]) => {
        let stateCopy = this.deepCopy(this.state);
        for (const i of stateCopy.thirds.teams[teamIndex].thirdTiedWith) {
            if (upArrow) {
                if (i === teamIndex - 1) 
                    stateCopy.thirds.teams[i].thirdBreakers[6] = teamIndex;
                else if (i === teamIndex)
                    stateCopy.thirds.teams[i].thirdBreakers[6] = teamIndex - 1;
                else   
                    stateCopy.thirds.teams[i].thirdBreakers[6] = i;
            } else {
                if (i === teamIndex + 1) 
                    stateCopy.thirds.teams[i].thirdBreakers[6] = teamIndex;
                else if (i === teamIndex)
                    stateCopy.thirds.teams[i].thirdBreakers[6] = teamIndex + 1;
                else   
                    stateCopy.thirds.teams[i].thirdBreakers[6] = i;
            }
        }
        stateCopy.thirds.teams = stateCopy.thirds.teams.sort((a, b) => {
            return this.teamThirdsCompare(a, b); 
        });
        console.log(stateCopy);
        this.constructKnockoutStage(stateCopy);
        this.setState(stateCopy);
    };

    constructTiebreakerGroup = (group, teamName, tiedTeams) => {
        let tiebreakerGroup = {name: group.name};
        const teams = [{
            name: teamName,
            wins: 0,
            loses: 0,
            ties: 0,
            gf: 0,
            ga: 0,
            tibreakers: [0,0,0,0,0,0,10]
        }];

        for (const team of tiedTeams) {
            teams.push({
                name: team.name,
                wins: 0,
                loses: 0,
                ties: 0,
                gf: 0,
                ga: 0,
                tibreakers: [0,0,0,0,0,0,10]    
            })
        }

        const tiebreakerTeams = {teams: teams};
        tiebreakerGroup = {...tiebreakerGroup, ...tiebreakerTeams};
        const filteredGames = group.games.filter((game) => {
            let homeIn = false;
            let visitorIn = false;

            for (const team of tiebreakerTeams["teams"]) {
                if (team.name === game[0][0])
                    homeIn = true;
                if (team.name === game[0][1])
                    visitorIn = true;
            }

            if (homeIn && visitorIn) {
                return true;
            }

            return false;
        });
        const tiebreakerGames = {games: filteredGames};
        tiebreakerGroup = {...tiebreakerGroup, ...tiebreakerGames};

        return tiebreakerGroup;
    }

    render () {
        const groups = this.state.groups.map(group => {
            const sortedTeams = group.teams.sort((a, b) => {
                return this.teamCompare(a, b); 
            });
            const sortedGroup = {
                name: group.name,
                teams: sortedTeams,
                games: group.games
            }
            return <Group 
                key={group.name}
                groupName={group.name}
                group={sortedGroup}
                changed={this.scoreChangedHandler}
                arrowClicked={this.tieArrowHandler}
                renderFixtures="true"
            />
        });

        return (
            <Aux>
                <SimpleStorage parent={this} />
                <h1>Women's World Cup 2019</h1>
                <h2>Group Stage</h2>
                <button onClick={this.resetToDefaultState}>Reset</button>
                {groups}   
                <Group 
                    key={this.state.thirds.name}
                    groupName={this.state.thirds.name}
                    group={this.state.thirds}
                    changed={this.scoreChangedHandler}
                    arrowClicked={this.thirdTieArrowHandler}
                    thirdGroup="true"
                />
                <h2>Knockout Stage</h2>
                <KnockoutStage />
            </Aux>
        );
    }
}

export default CupTable;