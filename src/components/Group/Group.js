import React from 'react';
import classes from './Group.module.css';

const group = (props) => {
    const rows = props.group.teams.map(team => {
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
    })

    return (
        <div className = {classes.Group}>
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
                {rows}
            </tbody></table>
        </div>
    )
}

export default group;