import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            menuState: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(event) {
        this.setState({
            menuState: !this.state.menuState
        });
        event.preventDefault();
    }
  render() {
    let menuState = this.state.menuState ? "menuOpen" : "menuClosed";
    return (
        <header>

            <nav class = "header">
                <div className="logo">
                    <img  className="logoImage" src={require("../../Assets/resources/logo.png")}/>
                </div>
                <div class="barsIcon" onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
            <div id={menuState} class="linkContainer">
                <a href="/">Home</a>
                <a href="/Experience">Experience</a>
                <a href="/Schedule">Schedule</a>
                <a href="/Contact">Contact</a>
                <a href="/Courses">Courses</a>
            </div>  
            
        </header>
    );
  }
}

export default Header;