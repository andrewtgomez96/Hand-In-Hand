import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
        <footer>
            <nav class = "footer">
                <div className="logo footerLinks">
                    <img  className="logoImage" src={require("../../Assets/resources/logo.png")}/>
                </div>
                <div class="footerLinks">
                    <p>Have any questions?</p>
                    <p>(209) 872-8464</p>
                </div>
                <div class="footerLinks">
                    <p>IMPORTANT LINKS</p>
                    <div class="flexColCenter">
                        <a href="/">Home</a>
                        <a href="/Experience">Experience</a>
                        <a href="/Schedule">Schedule</a>
                        <a href="/Contact">Contact</a>
                        <a href="/Courses">Courses</a>
                    </div>
                    
                </div>
                <div class="footerLinks">
                    <p>ACCREDIDATIONS</p>
                    <div class="addWrap">
                        Icons made by 
                        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                            Freepik
                        </a> 
                            from 
                        <a href="https://www.flaticon.com/"title="Flaticon">
                            www.flaticon.com
                        </a> 
                            is licensed by 
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
                            CC 3.0 BY
                        </a>
                        <a href="https://pngtree.com/free-vectors">free vectors from pngtree.com</a>
                    </div>
                </div>
                    
               
            </nav>
        </footer>
    );
  }
}

export default Footer;