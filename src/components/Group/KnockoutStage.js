import React from 'react';
import classes from './KnockoutStage.module.css';
import KnockoutFixture from './KnockoutFixture';

const knockoutStage = (props) => {
    let row1 = null;
    let row2 = null;
    let row3 = null;
    let row4 = null;
    let row5 = null;
    let row6 = null;
    let row7 = null;
    let row8 = null;

    if (Object.keys(props.knockout).length > 0) {
        console.log("quarters", props.knockout);
        const rdOf16 = [];
        for (let i = 0; i < 8; i++) {
            rdOf16.push(
                <KnockoutFixture className={classes.Fixtures}
                    key = {props.knockout.roundOf16[i].teams[0].name + 
                        props.knockout.roundOf16[i].teams[1].name}
                    team1 = {props.knockout.roundOf16[i].teams[0].name}
                    team2 = {props.knockout.roundOf16[i].teams[1].name} />
            );
        }

        const quarters = [];
        for (let i = 0; i < 4; i++) {
            let name1 = "-----";
            let name2 = "-----";

            if (props.knockout.quarterFinals[i].teams[0] !== "")
                name1 = props.knockout.quarterFinals[i].teams[0].name;
            if (props.knockout.quarterFinals[i].teams[1] !== "")
                name2 = props.knockout.quarterFinals[i].teams[1].name;
            
            quarters.push(
                <KnockoutFixture className={classes.Fixtures}
                    key = {name1 + name2}
                    team1 = {name1}
                    team2 = {name2} />
            );
        }
    
        // 16 G1, QF G1, SF G1, Third Place Heading
        console.log("here", props.knockout);

        row1 = <React.Fragment>
        <td>{rdOf16[0]}</td>
        <td rowSpan="2">{quarters[0]}</td>
        <td rowSpan="4">
            <KnockoutFixture className={classes.Fixtures}
                key = {props.knockout.roundOf16[0].teams[0].name + 
                    props.knockout.roundOf16[2].teams[0].name}
                team1 = {props.knockout.roundOf16[0].teams[0].name}
                team2 = {props.knockout.roundOf16[2].teams[0].name} />
        </td>
        <th className={classes.ThirdPlaceHeading}>Third Place Game</th></React.Fragment>
        
        // 16 G2, Third Place Game
        row2 = <React.Fragment>
            <td>{rdOf16[1]}</td>
        <td>
            <KnockoutFixture className={classes.Fixtures}
                key = {props.knockout.roundOf16[2].teams[0].name + 
                    props.knockout.roundOf16[6].teams[0].name}
                team1 = {props.knockout.roundOf16[2].teams[0].name}
                team2 = {props.knockout.roundOf16[6].teams[0].name} />
        </td></React.Fragment>
        
        // 16 G3, GF G2
        row3 = <React.Fragment>
            <td>{rdOf16[2]}</td>
        <td rowSpan="2">
            <KnockoutFixture className={classes.Fixtures}
                key = {props.knockout.roundOf16[2].teams[0].name + 
                    props.knockout.roundOf16[3].teams[0].name}
                team1 = {props.knockout.roundOf16[2].teams[0].name}
                team2 = {props.knockout.roundOf16[3].teams[0].name} />
        </td></React.Fragment>

        // 16 G4, Final Game
        row4 = <React.Fragment>
            <td>{rdOf16[3]}</td>
        <td rowSpan="2">
            <p className={classes.GameTitleHeading}>Final Game</p>
            <KnockoutFixture className={classes.Fixtures}
                key = {props.knockout.roundOf16[0].teams[0].name + 
                    props.knockout.roundOf16[4].teams[0].name}
                team1 = {props.knockout.roundOf16[0].teams[0].name}
                team2 = {props.knockout.roundOf16[4].teams[0].name} />
        </td></React.Fragment>

        // 16 G5, GF G3, SF G2
        row5 = <React.Fragment>
            <td>{rdOf16[4]}</td>
        <td rowSpan="2">
            <KnockoutFixture className={classes.Fixtures}
                key = {props.knockout.roundOf16[4].teams[0].name + 
                    props.knockout.roundOf16[5].teams[0].name}
                team1 = {props.knockout.roundOf16[4].teams[0].name}
                team2 = {props.knockout.roundOf16[5].teams[0].name} />
        </td>
        <td rowSpan="4">
            <KnockoutFixture className={classes.Fixtures}
                key = {props.knockout.roundOf16[4].teams[0].name + 
                    props.knockout.roundOf16[6].teams[0].name}
                team1 = {props.knockout.roundOf16[4].teams[0].name}
                team2 = {props.knockout.roundOf16[6].teams[0].name} />
        </td></React.Fragment>

        // 16 G6
        row6 = <td>{rdOf16[5]}</td>

        // 16 G7, QF G4
        row7 = <React.Fragment>
            <td>{rdOf16[6]}</td>
        <td rowSpan="2">
            <KnockoutFixture className={classes.Fixtures}
                key = {props.knockout.roundOf16[6].teams[0].name + 
                    props.knockout.roundOf16[7].teams[0].name}
                team1 = {props.knockout.roundOf16[6].teams[0].name}
                team2 = {props.knockout.roundOf16[7].teams[0].name} />
        </td></React.Fragment>
        
        // 16 G8
        row8 = <td>{rdOf16[7]}</td>

}



    return (
        <div className={classes.KnockoutStage}>
            <table className={classes.FixtureTable}>
                <tbody>
                    <tr>
                        <th>Round of 16</th>
                        <th>Quater Finals</th>
                        <th>Semi Finals</th>
                        <th>Finals</th>
                    </tr>
                    <tr>
                        {row1}
                    </tr>
                    <tr>
                        {row2}
                    </tr>
                    <tr>
                        {row3}
                    </tr>
                    <tr>
                        {row4}
                    </tr>
                    <tr>
                        {row5}
                    </tr>
                    <tr>
                        {row6}
                    </tr>
                    <tr>
                        {row7}
                    </tr>
                    <tr>
                        {row8}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default knockoutStage;