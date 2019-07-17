import React from 'react';
import classes from './KnockoutStage.module.css';
import KnockoutFixture from './KnockoutFixture';

const knockoutStage = (props) => {
    let rdOf16 = null;
    if (Object.keys(props.knockout).length > 0) {
        rdOf16 = props.knockout.roundOf16.map((fixture, index) => {
            return (
                <tr>
                    <td>
                        <KnockoutFixture className={classes.Fixtures}
                            key = {fixture.teams[0].name}
                            team1 = {fixture.teams[0].name}
                            team2 = {fixture.teams[1].name} />
                    </td>
                </tr>
            );
        });
    }

    return (
        <div className={classes.KnockoutStage}>
            <table className={classes.FixtureTable}>
                <tbody>
                    {rdOf16}
                </tbody>
            </table>
        </div>
    )
}

export default knockoutStage;