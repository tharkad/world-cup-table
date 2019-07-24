import React from 'react';
import classes from './KnockoutFixture.module.css';

const knockoutFixture = (props) => {

    return (
        <div className={classes.KnockoutFixture}>
            <table className={classes.FixtureTable}><tbody>
                <tr>
                    <td>{props.team1}</td>
                    <td className={classes.LeftScoreInput}>
                        <input
                            className={classes.LeftScoreInput}
                            size="2"
                            type="text"
                            pattern="^[0-9]*$"
                            value="" /> 
                    </td>
                </tr>
                <tr>
                    <td>{props.team2}</td>
                    <td className={classes.LeftScoreInput}>
                        <input
                            className={classes.LeftScoreInput}
                            size="2"
                            type="text"
                            pattern="^[0-9]*$"
                            value="" /> 
                    </td>
                </tr>
            </tbody></table>
        </div>
    )
}

export default knockoutFixture;