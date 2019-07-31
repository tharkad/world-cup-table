import React, { Component } from 'react';
import classes from './Group.module.css';
import TieControl from './TieControl';

class Group extends Component {
    tieControl = (index, upArrow) => {
        let localTiedWith = null;
        if (this.props.thirdGroup)
            localTiedWith = this.props.group.teams[index].thirdTiedWith;
        else
            localTiedWith = this.props.group.teams[index].tiedWith;
        if (localTiedWith.length === 0) {
            return <TieControl arrow="none" />
        }
        else {
            let canMoveUp = false;
            let canMoveDown = false;
            for (const i of localTiedWith) {
                if (i < index)
                    canMoveUp = true;
                if (i > index)
                    canMoveDown = true;
            }

            if (upArrow) {
                if (canMoveUp)
                    return <TieControl 
                        arrow="up" 
                        arrowClicked = {this.props.arrowClicked}
                        group = {this.props.group}
                        teamIndex = {index}
                    />;
                else
                    return <TieControl arrow="none" />;
            } else {
                if (canMoveDown)
                    return <TieControl 
                        arrow="down" 
                        group = {this.props.group}
                        teamIndex = {index}
                        arrowClicked = {this.props.arrowClicked}
                    />;
        else
                    return <TieControl arrow="none" />;
            }

        }
    }

    render() {
        let fixtureRows = null
        if (this.props.renderFixtures) {
            fixtureRows = this.props.group.games.map((game, index) => {
                let team1Goals = 0;
                let team2Goals = 0;
                
                team1Goals = Number.parseInt(game[1][0]);
                if (Number.isNaN(team1Goals))
                    team1Goals = 0;

                team2Goals = Number.parseInt(game[1][1]);
                if (Number.isNaN(team2Goals))
                    team2Goals = 0;

                let team1Class = classes.Normal;
                let team2Class = classes.Normal;
                if (team1Goals > team2Goals)
                    team1Class = classes.Winner;
                if (team2Goals > team1Goals)
                    team2Class = classes.Winner;

                return (
                    <tr key={game[0][0] + game[0][1]}>
                        <td className={classes.GameLeftTeamName}>
                            <span className={team1Class}>{this.props.teamsDB[game[0][0]].name}</span>
                        </td>
                        <td className={classes.GameScore}>
                            { 
                                game[1][0] == null ?
                                    <input 
                                        className={classes.LeftScoreInput}
                                        size="2"
                                        type="text"
                                        pattern="^[0-9]*$"
                                        onChange={(event) => this.props.changed(event, [this.props.groupName,index,0])}
                                        value="" /> :
                                    <input 
                                        className={classes.LeftScoreInput}
                                        size="2"
                                        type="text"
                                        pattern="^[0-9]*$"
                                        onChange={(event) => this.props.changed(event, [this.props.groupName,index,0])}
                                        value={game[1][0]} />
                            }
                        </td>
                        <td className={classes.ScoreDivider}>-</td>
                        <td className={classes.GameScore}>
                        { 
                                game[1][1] == null ?
                                    <input 
                                        className={classes.LeftScoreInput}
                                        size="2"
                                        type="text"
                                        pattern="^[0-9]*$"
                                        onChange={(event) => this.props.changed(event, [this.props.groupName,index,1])}
                                        value="" /> :
                                    <input 
                                        className={classes.LeftScoreInput}
                                        size="2"
                                        type="text"
                                        pattern="^[0-9]*$"
                                        onChange={(event) => this.props.changed(event, [this.props.groupName,index,1])}    
                                        value={game[1][1]} />
                            }
                        </td>
                        <td className={classes.GameRightTeamName}>
                            <span className={team2Class}>{this.props.teamsDB[game[0][1]].name}</span>
                        </td>
                    </tr>
                )
            });
        }

        let groupDisplay = null;
        if (!this.props.editing) {
            let teamRows = this.props.group.teams.map((team, index) => {
                let teamNameTD = null;
                if (this.props.thirdGroup) {
                    teamNameTD = <td 
                        className={classes.ThirdTeamName}
                        >{this.props.teamsDB[team.id].name}</td>
        } else {
                    teamNameTD = <td 
                        className={classes.TeamName}
                        title="Click to edit team inforamtion."
                        onClick={(event) => this.props.teamClicked(event, [this.props.groupName, index])}
                        >{this.props.teamsDB[team.id].name}</td>
        }

                return (
                    <tr key={team.id}>
                        {/* <td className={classes.TeamName}>{team.name} {team.tibreakers.join(",")} {team.tiedWith.join(",")}</td> */}
                        {teamNameTD}
                        <td className={classes.TieControl}>
                            {this.tieControl(index, true)}
                        </td>
                        <td className={classes.TieControl}>
                            {this.tieControl(index, false)}
                        </td>
                        <td className={classes.Number}>{team.wins}</td>
                        <td className={classes.Number}>{team.loses}</td>
                        <td className={classes.Number}>{team.ties}</td>
                        <td className={classes.Number}>{team.gf}</td>
                        <td className={classes.Number}>{team.ga}</td>
                        <td className={classes.Number}>{team.gf - team.ga}</td>
                        <td className={classes.Number}>{(team.wins * 3) + (team.ties)}</td>
                    </tr>
                )
            });

            groupDisplay = <table className = {classes.Table}><tbody>
                <tr className = {classes.GroupHeading}>
                    <td className = {classes.GroupHeadingTeam}>Team</td>
                    <td></td>
                    <td></td>
                    <td>W</td>
                    <td>L</td>
                    <td>T</td>
                    <td>GF</td>
                    <td>GA</td>
                    <td>GD</td>
                    <td>Pts</td>
                </tr>
                {teamRows}
            </tbody></table>
        } else {
            groupDisplay = <div className={classes.EditingArea}>
                <p className={classes.Label}>Team: </p>
                <input 
                    className={classes.TeamInput}
                    type="text"
                    onChange={(event) => 
                        this.props.teamNameChanged(event, [this.props.groupName,this.props.editingTeamIndex])}    
                    value={this.props.teamsDB[this.props.group.teams[this.props.editingTeamIndex].id].name} 
                />
                <p></p>
                <button onClick={(event) =>
                    this.props.doneEditing(event, this.props.groupName)}>Done</button>
            </div>
        }


        return (
            <div className = {classes.Group}>
                <div className = {classes.GroupTable}>
                    <p className = {classes.GroupName}>{this.props.group.name}</p>
                    {groupDisplay}
                </div>
                {
                    this.props.renderFixtures ?
                        <div className={classes.Fixtures}>
                            <table className = {classes.FixtureTable}><tbody>
                                {fixtureRows}
                            </tbody></table>
                        </div> :
                        <div></div>
                }
            </div>
        )
    }
}

export default Group;