import React, { Component } from 'react';

class Courses extends Component {
  render() {
    return (
        <div class="courses_content">
            <img class="courses-image" src={require("../../Assets/resources/cpr-single-edit.jpg")}></img>
            <div className="content">
                <h1 class = "image-hover">Courses Offered</h1>
                <div class="courses-container">
                    <div class="vertical-flex">
                        <h2 class="header-courses">Adult</h2>
                        <ol>
                            <li><p>First Aid/CPR/AED: $95/person</p></li>
                            <li><p>CPR/AED: $95/person</p></li>
                        </ol>
                    </div>
                    <div class="vertical-flex">
                        <h2 class="header-courses">Adult and Pediatric</h2>
                        <ol>
                            <li><p>First Aid/CPR/AED: $110/person</p></li>
                            <li><p>CPR/AED: $95/person</p></li>
                        </ol>
                    </div>
                    <div class="vertical-flex">
                        <h2 class="header-courses">Pediatric</h2>
                        <ol>
                            <li><p>First Aid/CPR/AED: $95/person</p></li>
                            <li><p>CPR/AED: $95/person</p></li>
                        </ol>
                    </div>
                </div>
                
            </div>
        </div>
    );
  }
}

export default Courses;