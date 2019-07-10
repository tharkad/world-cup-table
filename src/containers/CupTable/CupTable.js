import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Group from '../../components/Group/Group';
import SimpleStorage from 'react-simple-storage';

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
                        ga: 0
                    },
                    {
                        name: "Nigeria",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "Norway",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "South Korea",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
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
                        ga: 0
                    },
                    {
                        name: "Germany",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "South Africa",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "Spain",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },                    
                ],
                games: [
                    [["German", "China"], ["",""]],
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
                        ga: 0
                    },
                    {
                        name: "Brazil",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "Italy",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "Jamaica",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
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
                        ga: 0
                    },
                   {
                        name: "England",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "Japan",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "Scotland",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
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
                        ga: 0
                    },
                    {
                        name: "Canada",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "Netherlands",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "New Zealand",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
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
                        ga: 0
                    },
                   {
                        name: "Sweden",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "Thailand",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
                    },
                    {
                        name: "United States",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0
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
        ]
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

    state = this.deepCopy(this.defaultState);

    resetToDefaultState = () => {
        this.setState(this.defaultState);
    }

    updateTeamsFromGames = (stateCopy, groupIndex) => {
        stateCopy.groups[groupIndex].teams = 
            this.deepCopy(this.defaultState.groups[groupIndex].teams);

        for (const game of stateCopy.groups[groupIndex].games) {
            for (const team of stateCopy.groups[groupIndex].teams) {
                if (team.name === game[0][0]) {
                    if (game[1][0] !== "") {
                        team.gf = team.gf + parseInt(game[1][0]);
                    }
                    if (game[1][1] !== "") {
                        team.ga = team.ga + parseInt(game[1][1]);
                    }
                    if ((game[1][0] !== "") && (game[1][1] !== "")) {
                        let gf = parseInt(game[1][0]);
                        let ga = parseInt(game[1][1]);
                        if (gf > ga) {
                            team.wins = team.wins + 1;
                        } else if (gf < ga) {
                            team.loses = team.loses + 1;
                        } else {
                            team.ties = team.ties + 1;
                        }
                    }
                } else if (team.name === game[0][1]) {
                    if (game[1][1] !== "") {
                        team.gf = team.gf + parseInt(game[1][1]);
                    }
                    if (game[1][0] !== "") {
                        team.ga = team.ga + parseInt(game[1][0]);
                    }
                    if ((game[1][0] !== "") && (game[1][1] !== "")) {
                        let gf = parseInt(game[1][1]);
                        let ga = parseInt(game[1][0]);
                        if (gf > ga) {
                            team.wins = team.wins + 1;
                        } else if (gf < ga) {
                            team.loses = team.loses + 1;
                        } else {
                            team.ties = team.ties + 1;
                        }
                    }
                }
            }
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
            this.setState(stateCopy);
       }
    }

    render () {
        const groups = this.state.groups.map(group => {
            const sortedTeams = group.teams.sort((a, b) => {
                const aPts = (a.wins * 3) + a.ties;
                const bPts = (b.wins * 3) + b.ties;
                const aGd = a.gf - a.ga;
                const bGd = b.gf - b.ga;
                if (aPts !== bPts) { // Points
                    if (aPts > bPts)
                        return -1;
                    else
                        return 1;
                }
                else if (aGd !== bGd) { // Goal differential
                    if (aGd > bGd)
                        return -1;
                    else
                        return 1;
                }
                else if (a.gf !== b.gf) { // Goals scored
                    if (a.gf > b.gf)
                        return -1;
                    else
                        return 1;
                }
                else {
                    let aTeamGf = 0;
                    let bTeamGf = 0;

                    for (const game of group.games) {
                        if ((a.name === game[0][0]) &&
                            (b.name === game[0][1])) {
                                if (game[1][0] !== "") {
                                    aTeamGf = aTeamGf + parseInt(game[1][0]);
                                }
                                if (game[1][1] !== "") {
                                    bTeamGf = bTeamGf + parseInt(game[1][1]);
                                }
                        } else 
                            if ((a.name === game[0][1]) &&
                            (b.name === game[0][0])) {
                                if (game[1][1] !== "") {
                                    aTeamGf = aTeamGf + parseInt(game[1][1]);
                                }
                                if (game[1][0] !== "") {
                                    bTeamGf = bTeamGf + parseInt(game[1][0]);
                                }
                        }
                    }
                    if (aTeamGf !== bTeamGf) { // Goals scored
                        if (aTeamGf > bTeamGf)
                            return -1;
                        else
                            return 1;
                    } else {
                        return 0;
                    }
                }
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
            />
        });

        return (
            <Aux>
                <SimpleStorage parent={this} />
                <h1>Women's World Cup 2019</h1>
                <h3>Group Stage</h3>
                <button onClick={this.resetToDefaultState}>Reset</button>
                {groups}                
            </Aux>
        );
    }
}

export default CupTable;