import React from 'react';
import './Header.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return(
        <header >
            <div className="header-logo">
                <a className="im-logo" href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix" />
                </a>
            
            </div> 
        </header>
    );
}