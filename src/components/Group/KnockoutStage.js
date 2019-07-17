import React from 'react';
import classes from './KnockoutStage.module.css';
import KnockoutFixture from './KnockoutFixture';

const knockoutStage = (props) => {

    return (
        <div className={classes.KnockoutStage}>
            <KnockoutFixture
                team1 = "USA"
                team2 = "Canada" />
        </div>
    )
}

export default knockoutStage;