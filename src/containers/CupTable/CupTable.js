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
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Nigeria",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Norway",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "South Korea",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
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
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Germany",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "South Africa",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Spain",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
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
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Brazil",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Italy",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Jamaica",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
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
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                   {
                        name: "England",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Japan",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Scotland",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
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
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Canada",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Netherlands",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "New Zealand",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
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
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                   {
                        name: "Sweeden",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "Thailand",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
                    },
                    {
                        name: "United States",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,0]
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

        console.log(tiedTeams);

        const newTiedTeams = this.deepCopy(tiedTeams);
        for (const team of stateCopy.groups[groupIndex].teams) {
            if (newTiedTeams.hasOwnProperty(team.name)) {
                for (const subTeam of newTiedTeams[team.name]) {
                    delete newTiedTeams[subTeam.name];
                }               
            }
        }

        console.log(newTiedTeams);

        let threeWayTie = null;
        for (const team of stateCopy.groups[groupIndex].teams) {
            if (tiedTeams[team.name].length === 2) {
                threeWayTie = {};
                threeWayTie[team.name] = tiedTeams[team.name];
                for (const subTeam of stateCopy.groups[groupIndex].teams) {
                    if (!(threeWayTie.hasOwnProperty(subTeam.name))) {
                        threeWayTie[subTeam.name] = [];
                    }
                }
            }
        }
        
        if (threeWayTie !== null) {
            tiedTeams = threeWayTie;
        }

        for (const team of stateCopy.groups[groupIndex].teams) {
            if (tiedTeams[team.name].length === 1) {
                for (const game of stateCopy.groups[groupIndex].games) {
                    if ((team.name === game[0][0]) &&
                        (tiedTeams[team.name][0].name === game[0][1])) {
                            if (game[1][0] !== "") {
                                team.tibreakers[4] += parseInt(game[1][0]);
                                team.tibreakers[5] += parseInt(game[1][0]);
                            }
                            if (game[1][1] !== "") {
                                team.tibreakers[4] -= parseInt(game[1][1]);
                            }
                            if ((game[1][0] !== "") && (game[1][1] !== "")) {
                                let gf = parseInt(game[1][0]);
                                let ga = parseInt(game[1][1]);
                                if (gf > ga) {
                                    team.tibreakers[3] += 3;
                                } else if (gf < ga) {
                                } else {
                                    team.tibreakers[3] += 1
                                }
                            }
                    }
                    else if ((team.name === game[0][1]) &&
                        (tiedTeams[team.name][0].name === game[0][0])) {
                            if (game[1][1] !== "") {
                                team.tibreakers[4] += parseInt(game[1][1]);
                                team.tibreakers[5] += parseInt(game[1][1]);
                            }
                            if (game[1][0] !== "") {
                                team.tibreakers[4] -= parseInt(game[1][0]);
                            }
                            if ((game[1][0] !== "") && (game[1][1] !== "")) {
                                let gf = parseInt(game[1][1]);
                                let ga = parseInt(game[1][0]);
                                if (gf > ga) {
                                    team.tibreakers[3] += 3;
                                } else if (gf < ga) {
                                } else {
                                    team.tibreakers[3] += 1;
                                }
                        }
                    }
                }
            }
            else if (tiedTeams[team.name].length === 2) {
                let tieGroup = this.constructTiebreakerGroup(stateCopy.groups[groupIndex], team.name, tiedTeams[team.name]);
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

    constructTiebreakerGroup = (group, teamName, tiedTeams) => {
        let tiebreakerGroup = {name: group.name};
        const teamA = {
            name: teamName,
            wins: 0,
            loses: 0,
            ties: 0,
            gf: 0,
            ga: 0,
            tibreakers: [0,0,0,0,0,0,0]
        };
        const teamB = {
            name: tiedTeams[0].name,
            wins: 0,
            loses: 0,
            ties: 0,
            gf: 0,
            ga: 0,
            tibreakers: [0,0,0,0,0,0,0]
        }
        const teamC = {
            name: tiedTeams[1].name,
            wins: 0,
            loses: 0,
            ties: 0,
            gf: 0,
            ga: 0,
            tibreakers: [0,0,0,0,0,0,0]
        }
        const tiebreakerTeams = {teams: [teamA, teamB, teamC]};
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

    teamCompare = (a, b) => {
        for (let i = 0; i < a.tibreakers.length; i++) {
            if (a.tibreakers[i] > b.tibreakers[i])
                return -1;
            else if (a.tibreakers[i] < b.tibreakers[i])
                return 1;
        }

        return 0;
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