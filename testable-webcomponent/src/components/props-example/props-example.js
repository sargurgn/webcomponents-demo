import React, { useEffect, useState } from "react";
import { useStyles } from './props-example.styles';

const PropsExample = (props) => {
    const classes = useStyles();
    const [buttonColor, setButtonColor] = useState(props.color);

    function getStandardLabel(label) {
        return label = "Click Here to " + label;
    }

    useEffect(() => {
        if (props.onLoadChange)
            props.onLoadChange();
    }, [buttonColor]);

    return (
        <div className={classes.propsDiv}>
            <label>Child component: </label><input name='enter_color' value={buttonColor} onChange={(e) => {setButtonColor(e.target.value)}}/>
            <button name='submit_color' className={classes.propsButton} value={buttonColor} style={{ backgroundColor: buttonColor }} onClick={props.printMsg}>{getStandardLabel(props.label)}</button>
        </div>
    );
};

export default PropsExample;