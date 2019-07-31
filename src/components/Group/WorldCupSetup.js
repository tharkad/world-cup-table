import React from 'react';
import classes from './WorldCupSetup.module.css';

const worldCupSetup = (props) => {
    return (
        <div className={classes.Setup}>
            <h3>Choose World Cup Setup</h3>
            <p>
                Chosing a setup will erase your current World Cup. &nbsp;
                <button onClick={props.setupCancel}>Cancel</button>
            </p>
            <p>
                Reset the scores of your current World Cup. &nbsp;
                <button onClick={props.resetCurrentWorldCup}>Reset</button>
            </p>
            <table className={classes.SetupTable}><tbody>
                <tr>
                    <th>Historical</th>
                    <th>Build Your Own</th>
                </tr>    
                <tr>
                    <td><button onClick={props.setupMens2018}>Men's 2018</button></td>
                    <td><button onClick={props.setupGeneric32}>32 Team</button></td>
                </tr>
                <tr>
                    <td><button onClick={props.setupWomens2019}>Womens 2019</button></td>
                    <td><button onClick={props.setupGeneric24}>24 Team</button></td>
                </tr>
            </tbody></table>
            <hr></hr>
        </div>
    )
}

export default worldCupSetup;