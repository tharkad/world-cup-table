import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Group from '../../components/Group/Group';
import SimpleStorage from 'react-simple-storage';

class CupTable extends Component {
    state = {
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
                    [["France", "South Korea"], [null,null]],
                    [["Norway", "Nigeria"], [null,null]],
                    [["Nigeria", "South Korea"], [null,null]],
                    [["France", "Norway"], [null,null]],
                    [["South Korea", "Norway"], [null,null]],
                    [["Nigeria", "France"], [null,null]],
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
                    [["German", "China"], [null,null]],
                    [["Spain", "South Africa"], [null,null]],
                    [["Germany", "Spain"], [null,null]],
                    [["South Africa", "China"], [null,null]],
                    [["China", "Spain"], [null,null]],
                    [["South Africa", "Germany"], [null,null]]
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
                    [["Australia", "Italy"], [null,null]],
                    [["Brazil", "Jamaica"], [null,null]],
                    [["Australia", "Brazil"], [null,null]],
                    [["Jamaica", "Italy"], [null,null]],
                    [["Italy", "Brazil"], [null,null]],
                    [["Jamaica", "Australia"], [null,null]]
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
                    [["England", "Scotland"], [null,null]],
                    [["Argentina", "Japan"], [null,null]],
                    [["Japan", "Scotland"], [null,null]],
                    [["England", "Argentina"], [null,null]],
                    [["Scotland", "Argentina"], [null,null]],
                    [["Japan", "England"], [null,null]]
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
                    [["Canada", "Cameroon"], [null,null]],
                    [["New Zealand", "Netherlands"], [null,null]],
                    [["Netherlands", "Cameroon"], [null,null]],
                    [["Canada", "New Zealand"], [null,null]],
                    [["Netherlands", "Canada"], [null,null]],
                    [["Cameroon", "New Zealand"], [null,null]]
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
                    [["Chile", "Sweeden"], [null,null]],
                    [["United States", "Thailand"], [null,null]],
                    [["Sweeden", "Thailand"], [null,null]],
                    [["United States", "Chile"], [null,null]],
                    [["Sweeden", "United States"], [null,null]],
                    [["Thailand", "Chile"], [null,null]]
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
    
    teamsFromGames = (stateCopy, groupIndex) => {
        console.log(groupIndex, stateCopy);
        stateCopy.groups[groupIndex].teams[0].wins = 1;
    }

    scoreChangedHandler = (event, id) => {
        const groupIndex = this.state.groups.findIndex(group => {
            return group.name === id[0];
        });

       if (event.target.validity.valid) {
            let stateCopy = this.deepCopy(this.state);
            stateCopy.groups[groupIndex].games[id[1]][1][id[2]] = event.target.value;
            this.teamsFromGames(stateCopy, groupIndex);
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
                    if (aPts !== bPts)
                        if (aPts > bPts)
                            return -1;
                        else
                            return 1;
                    else if (aGd !== bGd) {
                        if (aGd > bGd)
                            return -1;
                        else
                            return 1;
                    }
                    else if (a.gf !== b.gf) {
                        if (a.gf > b.gf)
                            return -1;
                        else
                            return 1;
                    }
                    return 0;
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
        })
        return (
            <Aux>
                <SimpleStorage parent={this} />
                <h1>Women's World Cup 2019</h1>
                <h3>Group Stage</h3>
                {groups}                
            </Aux>
        );
    }
}

export default CupTable;