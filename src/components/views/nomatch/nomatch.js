import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";

import nofound from '../../../public/nofound.webp';

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>

            <img src={nofound} />
            <p style={{ textAlign: "center" }}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>
    );
}

export default NoMatch;