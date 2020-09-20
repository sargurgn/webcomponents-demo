import React, { useState } from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

function TestableComponentLoadingComponent() {
    const [hostColor, setHostColor] = useState('');
    document.addEventListener('parentColorUpdated', (event) => {
        setHostColor(event.detail.parentColor);
    });
    const classes = useStyles();
    return (
        <div data-testid="App" className="App" style={divStyle}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <span name='accordian_text' style={{ 'color': hostColor }}>
                            I am the parent app and i'm hosting webcomponents.
                </span>
                        <span name='host_message'>Color is {hostColor}</span>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Load webcomponent in this section
                        <testable-component />
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

export default TestableComponentLoadingComponent;