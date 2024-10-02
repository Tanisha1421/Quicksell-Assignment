import React from 'react';
import './loader.css'

function Loader(fullscreen = true ) {
    return (
        <div className={`loader-box ${fullscreen && "fullscreen"}`}>
            <span className='loader'>Loading...</span>
        </div>
    );
}

export default Loader;