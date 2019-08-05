import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>

            <nav class = "header">
                <div className="logo">
                    <img  className="logoImage" src={require("../../Assets/resources/logo.png")}/>
                </div>
                <a href="/">Home</a>
                <a href="/Experience">Experience</a>
                <a href="/Schedule">Schedule</a>
                <a href="/Contact">Contact</a>
                <a href="/Courses">Courses</a>
            </nav>
        </header>
    );
  }
}

export default Header;