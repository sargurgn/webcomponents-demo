import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const divStyle = {
    width: '400px'
};

function TestableFormComponentLoadingComponent() {
    const [colors, setColors] = useState();
    document.addEventListener('colorFormSubmitted', (event) => {
        console.log('Object is ', event.detail);
        setColors(event.detail);
    });
    const classes = useStyles();

    const hostColorDiv = () => {
        return (
            <div id="host_color_list">
                <span>Received colors in host:</span>
                <li style={{color: colors.color1}}>{colors.color1}</li>
                <li style={{color: colors.color2}}>{colors.color2}</li>
                <li style={{color: colors.color3}}>{colors.color3}</li>
            </div>
        );
    }

    return (
        <div>
            <div style={{padding: '20px'}}>
                {
                    colors && hostColorDiv()
                }
            </div>
            <testable-formcomponent />
        </div>
    );
}

export default TestableFormComponentLoadingComponent;