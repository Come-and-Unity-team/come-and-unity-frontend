import React from 'react';
import Spinner from "../spinner";

const Loading = () => {
    return (<div style={{position: 'fixed',top: '50%',left: '50%'}}>
                <Spinner/>
             </div>)
};

export default Loading;
