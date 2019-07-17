import React from 'react';
import classes from './KnockoutFixture.module.css';

const knockoutFixture = (props) => {

    return (
        <div className={classes.KnockoutFixture}>
            <p>{props.team1}</p>
            <p>{props.team2}</p>
        </div>
    )
}

export default knockoutFixture;