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
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Nigeria",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Norway",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "South Korea",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
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
                        tiedWith: []
                    },
                    {
                        name: "Germany",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "South Africa",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Spain",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
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
                        tiedWith: []
                    },
                    {
                        name: "Brazil",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Italy",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Jamaica",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
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
                        tiedWith: []
                    },
                   {
                        name: "England",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Japan",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Scotland",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
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
                        tiedWith: []
                    },
                    {
                        name: "Canada",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Netherlands",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "New Zealand",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
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
                        tiedWith: []
                    },
                   {
                        name: "Sweeden",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "Thailand",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
                    },
                    {
                        name: "United States",
                        wins: 0,
                        loses: 0,
                        ties: 0,
                        gf: 0,
                        ga: 0,
                        tibreakers: [0,0,0,0,0,0,10],
                        tiedWith: []
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