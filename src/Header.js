import React from 'react';
import logo from './logo.svg';

class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Mi primer React</h1>
            </header>
        )
    }
}
export default Header;