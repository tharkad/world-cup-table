import React from 'react';
import upArrowImg from '../../assets/up.png';
import downArrowImg from '../../assets/down.png';


const TieControl = (props) => {
    return (
        props.up ? 
            <img src={upArrowImg} alt="Up Arrow"></img> :
            <img src={downArrowImg} alt="Down Arrow"></img>
    );
}

export default TieControl;