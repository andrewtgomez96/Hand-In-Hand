import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div class="container marketing">
                <div className="container-fluid">
                    <h1>
                        Welcome to Hand-In-Hand
                    </h1>
                    <h2>
                        CPR, AED and First-Aid Training
                    </h2>
                    <p>
                        Hand-In-Hand was started by Daniel Gomez, a retired firefighter. He teaches his classes to American Red Cross standards and uses the most up to date manikins which have instrumented directive feedback. These devices provide real-time audiovisual and corrective evaluation and instruction on chest compression, rate, depth, chest recoil and propper hand placement. Training with this new device ensures confidence while performing CPR.
                    </p>
                </div>


                <div class="row">
                    <div class="col-lg-4">
                        <svg class="rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        
                            {/*<defs>
                                <clipPath id="circleView">
                                    <circle cx="140" cy="140" r="70" />
                                </clipPath>
                            </defs>*/}
                        <image className="pngImage" width="140" height="140" href={require("../../Assets/resources/medical-box.png")} clipPath="url(#circleView)" />
                        </svg>
                        <h2>Hands on Training</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a class="btn btn-secondary" href="/Experience" role="button">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <svg class="rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <image className="pngImage" width="140" height="140" href={require("../../Assets/resources/books.png")} clipPath="url(#circleView)" />
                        </svg>
                        <h2>Courses Offered</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        <p><a class="btn btn-secondary" href="/Courses" role="button">View details &raquo;</a></p>
                    </div>
                    <div class="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <image className="pngImage" width="140" height="140" href={require("../../Assets/resources/firehydrant.png")} clipPath="url(#circleView)" />
                        </svg>
                        <h2>My Experience</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a class="btn btn-secondary" href="/Experience" role="button">View details &raquo;</a></p>
                    </div>
                </div>




                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect fill="#eee" width="100%" height="100%" /><text fill="#aaa" dy=".3em" x="50%" y="50%">500x500</text></svg>
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect fill="#eee" width="100%" height="100%" /><text fill="#aaa" dy=".3em" x="50%" y="50%">500x500</text></svg>
                    </div>
                </div>

                <hr class="featurette-divider" />

                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect fill="#eee" width="100%" height="100%" /><text fill="#aaa" dy=".3em" x="50%" y="50%">500x500</text></svg>
                    </div>
                </div>

                <hr class="featurette-divider" />
            </div>

        );
    }
}

export default HomePage;