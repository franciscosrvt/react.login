import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tarjeta2 from '../cards2/card';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AutoGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>

                </Grid>
            </Grid>
        </div>
    );
}


/*
              < Tarjeta2
                        title={this.props.title}
                        subTitle={this.props.subTitle}
                        cuerpo={this.props.cuerpo}
                        link={this.props.link}
                        otherLink={this.props.otherLink}
                    />
*/