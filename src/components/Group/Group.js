import React from 'react';
import classes from './Group.module.css';

const group = (props) => {
    const teamRows = props.group.teams.map(team => {
        return (
            <tr key={team.name}>
                <td className={classes.TeamName}>{team.name}</td>
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

    const fixtureRows = props.group.games.map((game, index) => {
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
                                onChange={(event) => props.changed(event, [props.groupName,index,0])}
                                value="" /> :
                            <input 
                                className={classes.LeftScoreInput}
                                size="2"
                                type="text"
                                pattern="^[0-9]*$"
                                onChange={(event) => props.changed(event, [props.groupName,index,0])}
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
                                onChange={(event) => props.changed(event, [props.groupName,index,1])}
                                value="" /> :
                            <input 
                                className={classes.LeftScoreInput}
                                size="2"
                                type="text"
                                pattern="^[0-9]*$"
                                onChange={(event) => props.changed(event, [props.groupName,index,1])}    
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
                <p className = {classes.GroupName}>{props.group.name}</p>
                <table className = {classes.Table}><tbody>
                    <tr className = {classes.GroupHeading}>
                        <td>Team</td>
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

export default group;