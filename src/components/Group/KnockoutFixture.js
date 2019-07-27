import React from 'react';
import classes from './KnockoutFixture.module.css';

const knockoutFixture = (props) => {
    let input1 = "";
    let input2 = "";
    let team1Goals = 0;
    let team2Goals = 0;

    if (props.team1 !== "-----") {
        input1 = <input
            className={classes.LeftScoreInput}
            size="2"
            type="text"
            pattern="^[0-9]*$"
            onChange={(event) => props.changed(event, {
                round: props.round,
                gameIndex: props.gameIndex,
                teamIndex: 0
            })}
            value={props.fixture["result"][0]} />
        team1Goals = Number.parseInt(props.fixture["result"][0]);
        if (Number.isNaN(team1Goals))
            team1Goals = 0;
    }

    if (props.team2 !== "-----") {
        input2 = <input
        className={classes.LeftScoreInput}
        size="2"
        type="text"
        pattern="^[0-9]*$"
        onChange={(event) => props.changed(event, {
            round: props.round,
            gameIndex: props.gameIndex,
            teamIndex: 1
        })}
        value={props.fixture["result"][1]} />
        team2Goals = Number.parseInt(props.fixture["result"][1]);
        if (Number.isNaN(team2Goals))
            team2Goals = 0;
    }

    let team1Class = classes.Normal;
    let team2Class = classes.Normal;
    if (team1Goals > team2Goals)
        team1Class = classes.Winner;
    if (team2Goals > team1Goals)
        team2Class = classes.Winner;

    return (
        <div className={classes.KnockoutFixture}>
            <table className={classes.FixtureTable}><tbody>
                <tr>
                    <td className={team1Class}>{props.team1}</td>
                    <td className={classes.LeftScoreInput}>
                        {input1}
                    </td>
                    <td className={classes.LeftScoreInput}>
                    </td>
                </tr>
                <tr>
                    <td className={team2Class}>{props.team2}</td>
                    <td className={classes.LeftScoreInput}>
                        {input2}
                    </td>
                </tr>
            </tbody></table>
        </div>
    )
}

export default knockoutFixture;