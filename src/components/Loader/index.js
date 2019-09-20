import React from "react";
import loaderSrc from '../../assets/loader.gif';
const Loader = props => (
    <div>
        <img
            style={{ width: 75 }}
            src={loaderSrc}
            alt="Loader Icon"/>
    </div>
);

export default Loader;
