import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("../../Assets/resources/cpr-2-bigred.jpg")} class="d-block w-100" alt="..."></img>
                        
                        <div class="carousel-caption d-none d-md-block">
                            <h3>CPR Training</h3>
                            <p>All training manikins are state of the art with feedback systems</p>
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                        <img src={require("../../Assets/resources/Defibrillator-2.jpg")} class="d-block w-100" alt="..."></img>
                        
                        <div class="carousel-caption d-none d-md-block">
                            <h3>First Aid Training</h3>
                            <p>Learn how to always be prepared for any injury or accident</p>
                        </div>
                        
                    </div>
                    <div class="carousel-item">
                        <img src={require("../../Assets/resources/Defibrillator-2.jpg")} class="d-block w-100" alt="..."></img>
                        
                        <div class="carousel-caption d-none d-md-block">
                            <h3>AED Training</h3>
                            <p>Learn how and when to use an AED on someone</p>
                        </div>
                        
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    
    );
  }
}

export default Carousel;