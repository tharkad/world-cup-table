import React, { Component } from 'react';
import classes from './Group.module.css';
import TieControl from './TieControl';

class Group extends Component {
    tieControl = (index, upArrow) => {
        if (this.props.group.teams[index].tiedWith.length === 0) {
            return <TieControl arrow="none" />
        }
        else {
            let canMoveUp = false;
            let canMoveDown = false;
            for (const i of this.props.group.teams[index].tiedWith) {
                console.log(this.props.group.teams[index].name, this.props.group.teams[index].tiedWith, i, index);
                if (i < index + 1)
                    canMoveUp = true;
                if (i > index + 1)
                    canMoveDown = true;
            }

            if (upArrow) {
                if (canMoveUp)
                    return <TieControl arrow="up" />;
                else
                    return <TieControl arrow="none" />;
            } else {
                if (canMoveDown)
                    return <TieControl arrow="down" />;
                else
                    return <TieControl arrow="none" />;
            }

        }
    }

    render() {
        const teamRows = this.props.group.teams.map((team, index) => {
            return (
                <tr key={team.name}>
                    {/* <td className={classes.TeamName}>{team.name} {team.tibreakers.join(",")} {team.tiedWith.join(",")}</td> */}
                    <td className={classes.TeamName}>{team.name}</td>
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

        const fixtureRows = this.props.group.games.map((game, index) => {
            return (
                <tr key={game[0][0] + game[0][1]}>
                    <td className={classes.GameLeftTeamName}>{game[0][0]}</td>
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
                    <td className={classes.GameRightTeamName}>{game[0][1]}</td>
                </tr>
            )
        });

        return (
            <div className = {classes.Group}>
                <div className = {classes.GroupTable}>
                    <p className = {classes.GroupName}>{this.props.group.name}</p>
                    <table className = {classes.Table}><tbody>
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
                </div>
                <div className={classes.Fixtures}>
                    <table className = {classes.FixtureTable}><tbody>
                        {fixtureRows}
                    </tbody></table>
                </div>
            </div>
        )
    }
}

export default Group;