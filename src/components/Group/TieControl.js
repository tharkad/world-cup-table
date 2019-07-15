import React from 'react';
import upArrowImg from '../../assets/up.png';
import downArrowImg from '../../assets/down.png';
import noneArrowImg from '../../assets/none.png';


const TieControl = (props) => {
    let arrow = noneArrowImg;
    if (props.arrow === "up")
        arrow = upArrowImg;
    else if (props.arrow === "down")
        arrow = downArrowImg;

    return (
        <img src={arrow} alt="Arrow"></img>
    );
}

export default TieControl;