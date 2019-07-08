import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Group from '../../components/Group/Group';

class CupTable extends Component {
    state = {
        groups: [
            {
                name: "Group A",
                teams: [
                    {
                        name: "France",
                        wins: 3,
                        loses: 0,
                        ties: 0,
                        gf: 7,
                        ga: 1
                    },
                    {
                        name: "Nigeria",
                        wins: 1,
                        loses: 2,
                        ties: 0,
                        gf: 2,
                        ga: 4
                    },
                    {
                        name: "Norway",
                        wins: 2,
                        loses: 1,
                        ties: 0,
                        gf: 6,
                        ga: 3
                    },
                    {
                        name: "South Korea",
                        wins: 0,
                        loses: 3,
                        ties: 0,
                        gf: 1,
                        ga: 8
                    },                    
                ]
            },
            {
                name: "Group B",
                teams: [
                    {
                        name: "China",
                        wins: 1,
                        loses: 2,
                        ties: 1,
                        gf: 1,
                        ga: 1
                    },
                    {
                        name: "Germany",
                        wins: 3,
                        loses: 0,
                        ties: 0,
                        gf: 6,
                        ga: 0
                    },
                    {
                        name: "South Africa",
                        wins: 0,
                        loses: 3,
                        ties: 0,
                        gf: 1,
                        ga: 8
                    },
                    {
                        name: "Spain",
                        wins: 1,
                        loses: 1,
                        ties: 1,
                        gf: 3,
                        ga: 2
                    },                    
                ]
            },
            {
                name: "Group C",
                teams: [
                    {
                        name: "Australia",
                        wins: 2,
                        loses: 1,
                        ties: 0,
                        gf: 8,
                        ga: 5
                    },
                    {
                        name: "Brazil",
                        wins: 2,
                        loses: 1,
                        ties: 0,
                        gf: 10,
                        ga: 7
                    },
                    {
                        name: "Italy",
                        wins: 2,
                        loses: 1,
                        ties: 0,
                        gf: 7,
                        ga: 2
                    },
                    {
                        name: "Jamaica",
                        wins: 0,
                        loses: 3,
                        ties: 0,
                        gf: 1,
                        ga: 12
                    },                    
                ]
            },
            {
                name: "Group D",
                teams: [
                    {
                        name: "Argentina",
                        wins: 0,
                        loses: 1,
                        ties: 2,
                        gf: 3,
                        ga: 4
                    },
                   {
                        name: "England",
                        wins: 3,
                        loses: 0,
                        ties: 0,
                        gf: 5,
                        ga: 1
                    },
                    {
                        name: "Japan",
                        wins: 1,
                        loses: 1,
                        ties: 1,
                        gf: 2,
                        ga: 3
                    },
                    {
                        name: "Scotland",
                        wins: 0,
                        loses: 2,
                        ties: 1,
                        gf: 5,
                        ga: 7
                    }             
                ]
            },            
            {
                name: "Group E",
                teams: [
                    {
                        name: "Cameroon",
                        wins: 1,
                        loses: 2,
                        ties: 0,
                        gf: 3,
                        ga: 5
                    },
                    {
                        name: "Canada",
                        wins: 2,
                        loses: 1,
                        ties: 0,
                        gf: 4,
                        ga: 2
                    },
                    {
                        name: "Netherlands",
                        wins: 3,
                        loses: 0,
                        ties: 0,
                        gf: 6,
                        ga: 2
                    },
                    {
                        name: "New Zealand",
                        wins: 0,
                        loses: 3,
                        ties: 0,
                        gf: 1,
                        ga: 5
                    },                    
                ]
            },
            {
                name: "Group F",
                teams: [
                    {
                        name: "Chile",
                        wins: 1,
                        loses: 2,
                        ties: 0,
                        gf: 2,
                        ga: 5
                    },
                   {
                        name: "Sweden",
                        wins: 2,
                        loses: 1,
                        ties: 0,
                        gf: 7,
                        ga: 3
                    },
                    {
                        name: "Thailand",
                        wins: 0,
                        loses: 3,
                        ties: 0,
                        gf: 1,
                        ga: 20
                    },
                    {
                        name: "United States",
                        wins: 3,
                        loses: 0,
                        ties: 0,
                        gf: 18,
                        ga: 0
                    }             
                ]
            }
        ]
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
                    teams: sortedTeams
                }
                return <Group 
                    key={group.name}
                    group={sortedGroup}
                />
        })
        return (
            <Aux>
                <h1>Women's World Cup 2019</h1>
                {groups}                
            </Aux>
        );
    }
}

export default CupTable;