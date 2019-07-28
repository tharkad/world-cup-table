import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Group from '../../components/Group/Group';
import KnockoutStage from '../../components/Group/KnockoutStage';
import SimpleStorage, { clearStorage } from 'react-simple-storage';

class CupTable extends Component {
    defaultState = {
        title: "The World Cup Game",
        groups: [
            {
                name: "Group A",
                teams: [
                    {
                        name: "Egypt",
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
                        name: "Russia",
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
                        name: "Saudi Arabia",
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
                        name: "Uraguay",
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
                    [["Russia", "Saudi Arabia"], ["",""]],
                    [["Egypt", "Uraguay"], ["",""]],
                    [["Russia", "Egypt"], ["",""]],
                    [["Uraguay", "Saudi Arabia"], ["",""]],
                    [["Uraguay", "Russia"], ["",""]],
                    [["Saudi Arabia", "Egypt"], ["",""]],
                ]
            },
            {
                name: "Group B",
                teams: [
                    {
                        name: "Iran",
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
                        name: "Morocco",
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
                        name: "Portugal",
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
                    [["Morocco", "Iran"], ["",""]],
                    [["Portugal", "Spain"], ["",""]],
                    [["Portugal", "Morocco"], ["",""]],
                    [["Iran", "Spain"], ["",""]],
                    [["Spain", "Morocco"], ["",""]],
                    [["Iran", "Portugal"], ["",""]]
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
                        name: "Denmark",
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
                        name: "Peru",
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
                    [["France", "Australia"], ["",""]],
                    [["Peru", "Denmark"], ["",""]],
                    [["Denmark", "Australia"], ["",""]],
                    [["France", "Peru"], ["",""]],
                    [["Denmark", "France"], ["",""]],
                    [["Australia", "Peru"], ["",""]]
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
                        name: "Croatia",
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
                        name: "Iceland",
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
                    }             
                ],
                games: [
                    [["Argentina", "Iceland"], ["",""]],
                    [["Croatia", "Nigeria"], ["",""]],
                    [["Argentina", "Croatia"], ["",""]],
                    [["Nigeria", "Iceland"], ["",""]],
                    [["Nigeria", "Argentina"], ["",""]],
                    [["Iceland", "Croatia"], ["",""]]
                ]
            },            
            {
                name: "Group E",
                teams: [
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
                        name: "Costa Rica",
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
                        name: "Serbia",
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
                        name: "Switzerland",
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
                    [["Costa Rica", "Serbia"], ["",""]],
                    [["Brazil", "Switzerland"], ["",""]],
                    [["Brazil", "Costa Rica"], ["",""]],
                    [["Serbia", "Switzerland"], ["",""]],
                    [["Serbia", "Brazil"], ["",""]],
                    [["Switzerland", "Costa Rica"], ["",""]]
                ]
            },
            {
                name: "Group F",
                teams: [
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
                        name: "Mexico",
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
                    {
                        name: "Sweden",
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
                    [["Germany", "Mexico"], ["",""]],
                    [["Sweden", "South Korea"], ["",""]],
                    [["South Korea", "Mexico"], ["",""]],
                    [["Germany", "Sweden"], ["",""]],
                    [["South Korea", "Germany"], ["",""]],
                    [["Mexico", "Sweden"], ["",""]]
                ]
            },
            {
                name: "Group G",
                teams: [
                    {
                        name: "Belgium",
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
                        name: "Panama",
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
                        name: "Tunisia",
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
                    [["Belgium", "Panama"], ["",""]],
                    [["Tunisia", "England"], ["",""]],
                    [["Belgium", "Tunisia"], ["",""]],
                    [["England", "Panama"], ["",""]],
                    [["England", "Belgium"], ["",""]],
                    [["Panama", "Tunisia"], ["",""]]
                ]
            },
            {
                name: "Group H",
                teams: [
                    {
                        name: "Columbia",
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
                        name: "Poland",
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
                        name: "Senegal",
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
                    [["Columbia", "Japan"], ["",""]],
                    [["Poland", "Senegal"], ["",""]],
                    [["Japan", "Senegal"], ["",""]],
                    [["Poland", "Columbia"], ["",""]],
                    [["Japan", "Poland"], ["",""]],
                    [["Senegal", "Columbia"], ["",""]]
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

    constructKnockoutStage = (stateObj) => {
        let knockout = null;

        if (stateObj.groups.length === 6) {
            knockout = this.constructKnockoutStage24(stateObj);
        } else if (stateObj.groups.length === 8) {
            knockout =  this.constructKnockoutStage32(stateObj);
        } else {
            knockout =  null;
        }

        stateObj["knockout"] = knockout;
    }

    constructKnockoutRounds = () => {
        let knockout = {
            roundOf16: [],
            quarterFinals: [],
            semiFinals: [],
            finals: []
        };

        knockout["quarterFinals"].push({teams:["",""], result:["",""], penalties:["",""]});
        knockout["quarterFinals"].push({teams:["",""], result:["",""], penalties:["",""]});
        knockout["quarterFinals"].push({teams:["",""], result:["",""], penalties:["",""]});
        knockout["quarterFinals"].push({teams:["",""], result:["",""], penalties:["",""]});

        knockout["semiFinals"].push({teams:["",""], result:["",""], penalties:["",""]});
        knockout["semiFinals"].push({teams:["",""], result:["",""], penalties:["",""]});

        knockout["finals"].push({teams:["",""], result:["",""], penalties:["",""]});
        knockout["finals"].push({teams:["",""], result:["",""], penalties:["",""]});

        return knockout;
    }

    constructKnockoutStage32 = (stateObj) => {
        const knockout = this.constructKnockoutRounds();

        // Game 1: A1 vs B2
        knockout["roundOf16"].push({teams:[stateObj.groups[0].teams[0], 
            stateObj.groups[1].teams[1]], result:["",""], penalties:["",""]});
        
        // Game 2: C1 vs D2
        knockout["roundOf16"].push({teams:[stateObj.groups[2].teams[0], 
            stateObj.groups[3].teams[1]], result:["",""], penalties:["",""]});
        
        // Game 3: E1 vs F2
        knockout["roundOf16"].push({teams:[stateObj.groups[4].teams[0], 
            stateObj.groups[5].teams[1]], result:["",""], penalties:["",""]});
        
        // Game 4: G1 vs H2
        knockout["roundOf16"].push({teams:[stateObj.groups[6].teams[0], 
            stateObj.groups[7].teams[1]], result:["",""], penalties:["",""]});
        
        // Game 5: B1 vs A2
        knockout["roundOf16"].push({teams:[stateObj.groups[1].teams[0], 
            stateObj.groups[0].teams[1]], result:["",""], penalties:["",""]});
        
        // Game 6: D1 vs C2
        knockout["roundOf16"].push({teams:[stateObj.groups[3].teams[0], 
            stateObj.groups[2].teams[1]], result:["",""], penalties:["",""]});
        
        // Game 7: F1 vs E2
        knockout["roundOf16"].push({teams:[stateObj.groups[5].teams[0], 
            stateObj.groups[4].teams[1]], result:["",""], penalties:["",""]});
        
        // Game 8: H1 vs G2
        knockout["roundOf16"].push({teams:[stateObj.groups[7].teams[0], 
            stateObj.groups[6].teams[1]], result:["",""], penalties:["",""]});
        
        return knockout;
    }

    constructKnockoutStage24 = (stateObj) => {
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

        const thirdGroupsString = thirdGroups.map(groupName => {
            return groupName.slice(-1);
        }).join("");

        let thirdTeam = null;

        // Game 1: 2A vs 2C
        knockout["roundOf16"].push({teams:[stateObj.groups[0].teams[1], 
            stateObj.groups[2].teams[1]], result:["",""]});
        
        // Game 2: 1D vs 3B/E/F
        switch (thirdGroupsString) {
            case "ABCD":
                thirdTeam = stateObj.groups[1].teams[2];
                break;

            case "ABCE":
            case "ABDE":
            case "ACDE":
            case "ACEF":
            case "ADEF":
            case "BCDE":
            case "CDEF":
                thirdTeam = stateObj.groups[4].teams[2];
                break;

            case "ABCF":
            case "ABDF":
            case "ABEF":
            case "ACDF":
            case "BCDF":
            case "BCEF":
            case "BDEF":
                thirdTeam = stateObj.groups[5].teams[2];
                break;
                                       
            default:
                thirdTeam = null;
        }
        knockout["roundOf16"].push({teams:[stateObj.groups[3].teams[0], 
            thirdTeam], result:["",""]});

        // Game 3: 1A vs 3CDE
        switch (thirdGroupsString) {
            case "ABCD":
            case "ABCE":
            case "ABCF":
            case "ACDE":
            case "ACDF":
            case "ACEF":
            case "BCDE":
            case "BCDF":
            case "CDEF":
                thirdTeam = stateObj.groups[2].teams[2];
                break;

            case "ABDE":
            case "ABDF":
            case "ADEF":
                thirdTeam = stateObj.groups[3].teams[2];
                break;

            case "ABEF":
            case "BCEF":
            case "BDEF":
                thirdTeam = stateObj.groups[4].teams[2];
                break;
                                                                                                                       
            default:
                thirdTeam = null;
        }
        knockout["roundOf16"].push({teams:[stateObj.groups[0].teams[0], 
            thirdTeam], result:["",""]});
            
        // Game 4: 1F vs 2B
         knockout["roundOf16"].push({teams:[stateObj.groups[5].teams[0], 
            stateObj.groups[1].teams[1]], result:["",""]});
    
        // Game 5: 1B vs 3A/C/D
        switch (thirdGroupsString) {
            case "ABCE":
            case "ABCF":
            case "ABDE":
            case "ABDF":
            case "ABEF":
            case "ACEF":
            case "ADEF":
                thirdTeam = stateObj.groups[0].teams[2];
                break;

            case "BCEF":
                thirdTeam = stateObj.groups[2].teams[2];
                break;       
 
            case "ABCD":
            case "ACDE":
            case "ACDF":
            case "BCDE":
            case "BCDF":
            case "BDEF":
            case "CDEF":
                thirdTeam = stateObj.groups[3].teams[2];
                break;
                                       
            default:
                thirdTeam = null;
        }
        knockout["roundOf16"].push({teams:[stateObj.groups[1].teams[0], 
            thirdTeam], result:["",""]});

        // Game 6: 2E vs 2F
        knockout["roundOf16"].push({teams:[stateObj.groups[4].teams[1], 
            stateObj.groups[5].teams[1]], result:["",""]});

        // Game 7: 1C vs 3A/B/F
        switch (thirdGroupsString) {
            case "ABCD":
            case "ACDE":
            case "ACDF":
                thirdTeam = stateObj.groups[0].teams[2];
                break;

            case "ABCE":
            case "ABCF":
            case "ABDE":
            case "ABDF":
            case "ABEF":
            case "BCDE":
            case "BCDF":
            case "BCEF":
            case "BDEF":
                thirdTeam = stateObj.groups[1].teams[2];
                break;

            case "ACEF":
            case "ADEF":
            case "CDEF":
                thirdTeam = stateObj.groups[5].teams[2];
                break;
                                                
            default:
                thirdTeam = null;
        }
        knockout["roundOf16"].push({teams:[stateObj.groups[2].teams[0], 
            thirdTeam], result:["",""]});

        // Game 8: 1E vs 2D
        knockout["roundOf16"].push({teams:[stateObj.groups[4].teams[0], 
            stateObj.groups[3].teams[1]], result:["",""]});

        this.constructLateKnockoutRounds(knockout);

        stateObj["knockout"] = knockout;
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

    calculateKnockoutFixture = (currentRound, nextRound, index) => {
        let fixture = currentRound[index];
        let nextRoundIndex = Math.floor(index / 2);
        let nextRoundGameIndex = index % 2;

        if (fixture.result[0] === "" && fixture.result[1] === "") {
            nextRound[nextRoundIndex].teams[nextRoundGameIndex] = ""
            nextRound[nextRoundIndex].result[nextRoundGameIndex] = ""
            nextRound[nextRoundIndex].penalties[nextRoundGameIndex] = ""
        }
        else {
            let team1Goals = 0;
            let team2Goals = 0;
            if (fixture.result[0] !== "") {
                let parsed = Number.parseInt(fixture.result[0]);
                if (!Number.isNaN(parsed))
                    team1Goals = parsed;
            }
            if (fixture.result[1] !== "") {
                let parsed = Number.parseInt(fixture.result[1]);
                if (!Number.isNaN(parsed))
                    team2Goals = parsed;
            }

            if (team1Goals > team2Goals) {
                nextRound[nextRoundIndex].teams[nextRoundGameIndex] = 
                    fixture.teams[0]
            }
            else if (team2Goals > team1Goals) {
                nextRound[nextRoundIndex].teams[nextRoundGameIndex] = 
                    fixture.teams[1]
            }
            else {
                let team1Penalties = 0;
                let team2Penalties = 0;
                if (fixture.penalties[0] !== "") {
                    let parsed = Number.parseInt(fixture.penalties[0]);
                    if (!Number.isNaN(parsed))
                        team1Penalties = parsed;
                }
                if (fixture.penalties[1] !== "") {
                    let parsed = Number.parseInt(fixture.penalties[1]);
                    if (!Number.isNaN(parsed))
                        team2Penalties = parsed;
                }

                if (team1Penalties > team2Penalties) {
                    nextRound[nextRoundIndex].teams[nextRoundGameIndex] = 
                        fixture.teams[0]
                }
                else if (team2Penalties > team1Penalties) {
                    nextRound[nextRoundIndex].teams[nextRoundGameIndex] = 
                        fixture.teams[1]
                }
                else {
                    nextRound[nextRoundIndex].teams[nextRoundGameIndex] = ""
                    nextRound[nextRoundIndex].result[nextRoundGameIndex] = ""
                    nextRound[nextRoundIndex].penalties[nextRoundGameIndex] = ""
                }
            }
        }
    }

    updateKnockoutStage = (stateCopy) => {
        for (let i = 0; i < 8; i++) {
            this.calculateKnockoutFixture(stateCopy.knockout.roundOf16, 
                stateCopy.knockout.quarterFinals, i);
        }

        for (let i = 0; i < 4; i++) {
            this.calculateKnockoutFixture(stateCopy.knockout.quarterFinals, 
                stateCopy.knockout.semiFinals, i);
        }

        for (let i = 0; i < 2; i++) {
            let fixture = stateCopy.knockout.semiFinals[i];
            if (fixture.result[0] === "" && fixture.result[1] === "") {
                stateCopy.knockout.finals[0].teams[i] = ""
                stateCopy.knockout.finals[0].result[i] = ""
                stateCopy.knockout.finals[0].penalties[i] = ""

                stateCopy.knockout.finals[1].teams[i] = ""
                stateCopy.knockout.finals[1].result[i] = ""
                stateCopy.knockout.finals[1].penalties[i] = ""
            }
            else {
                let team1Goals = 0;
                let team2Goals = 0;

                if (fixture.result[0] !== "") {
                    let parsed = Number.parseInt(fixture.result[0]);
                    if (!Number.isNaN(parsed))
                        team1Goals = parsed;
                }
                if (fixture.result[1] !== "") {
                    let parsed = Number.parseInt(fixture.result[1]);
                    if (!Number.isNaN(parsed))
                        team2Goals = parsed;
                }

                if (team1Goals > team2Goals) {
                    stateCopy.knockout.finals[0].teams[i] = 
                        fixture.teams[0]
                    stateCopy.knockout.finals[1].teams[i] = 
                        fixture.teams[1]
                }
                else if (team2Goals > team1Goals) {
                    stateCopy.knockout.finals[0].teams[i] = 
                        fixture.teams[1]
                    stateCopy.knockout.finals[1].teams[i] = 
                        fixture.teams[0]
                } else {
                    let team1Penalties = 0;
                    let team2Penalties = 0;
                    if (fixture.penalties[0] !== "") {
                        let parsed = Number.parseInt(fixture.penalties[0]);
                        if (!Number.isNaN(parsed))
                            team1Penalties = parsed;
                    }
                    if (fixture.penalties[1] !== "") {
                        let parsed = Number.parseInt(fixture.penalties[1]);
                        if (!Number.isNaN(parsed))
                            team2Penalties = parsed;
                    }
    
                    if (team1Penalties > team2Penalties) {
                        stateCopy.knockout.finals[0].teams[i] = 
                            fixture.teams[0]
                        stateCopy.knockout.finals[1].teams[i] = 
                            fixture.teams[1]
                    }
                    else if (team2Penalties > team1Penalties) {
                        stateCopy.knockout.finals[0].teams[i] = 
                            fixture.teams[1]
                        stateCopy.knockout.finals[1].teams[i] = 
                            fixture.teams[0]
                    }
                    else {
                        stateCopy.knockout.finals[0].teams[i] = ""
                        stateCopy.knockout.finals[0].result[i] = ""
                        stateCopy.knockout.finals[0].penalties[i] = ""
        
                        stateCopy.knockout.finals[1].teams[i] = ""
                        stateCopy.knockout.finals[1].result[i] = ""
                        stateCopy.knockout.finals[1].penalties[i] = ""
                    }
                }
            }
        }
    }

    knockoutScoreChangedHandler = (event, id) => {
        let stateCopy = this.deepCopy(this.state);
        if (event.target.validity.valid) {
            stateCopy.knockout[id["round"]][id["gameIndex"]].result[id["teamIndex"]] = 
                event.target.value;
            this.updateKnockoutStage(stateCopy);
            this.setState(stateCopy);
        }
    }

    knockoutPenaltyChangedHandler = (event, id) => {
        let stateCopy = this.deepCopy(this.state);
        if (event.target.validity.valid) {
            stateCopy.knockout[id["round"]][id["gameIndex"]].penalties[id["teamIndex"]] = 
                event.target.value;
            this.updateKnockoutStage(stateCopy);
            this.setState(stateCopy);
        }
    }

    scoreChangedHandler = (event, id) => {
        const groupIndex = this.state.groups.findIndex(group => {
            return group.name === id[0];
        });

       if (event.target.validity.valid) {
            let stateCopy = this.deepCopy(this.state);
            stateCopy.groups[groupIndex].games[id[1]][1][id[2]] = 
                event.target.value;
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

        let thirdPlaceGroup = null;
        if (this.state.groups.length === 6) {
            thirdPlaceGroup = <Group 
                    key={this.state.thirds.name}
                    groupName={this.state.thirds.name}
                    group={this.state.thirds}
                    changed={this.scoreChangedHandler}
                    arrowClicked={this.thirdTieArrowHandler}
                    thirdGroup="true"
                />        
            }

        return (
            <Aux>
                <SimpleStorage parent={this} />
                <h1>{this.state.title}</h1>
                <h2>Group Stage</h2>
                <button onClick={this.resetToDefaultState}>Reset</button>
                {groups}   
                {thirdPlaceGroup}
                <h2>Knockout Stage</h2>
                <KnockoutStage 
                    knockout={this.state.knockout} 
                    changed={this.knockoutScoreChangedHandler}
                    changedPenalty={this.knockoutPenaltyChangedHandler}
                />
            </Aux>
        );
    }
}

export default CupTable;