import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000">
                Nuestro primer sitio web react js
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default Copyright;
