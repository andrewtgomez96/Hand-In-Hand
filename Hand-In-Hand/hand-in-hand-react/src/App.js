import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//components
import Header from './components/header-components/header';
import Footer from './components/footer-components/footer';
import HomePage from './components/pages/homepage';
import Carousel from './components/carousel-component/carousel';
import Calendar from './components/calendar-component/calendar';

//mobile components
import MobileHeader from './components/header-components/mobile_header';
import MobileFooter from './components/footer-components/mobile_footer';
import Experience from './components/pages/experience';
import Schedule from './components/pages/schedule';
import Contact from './components/pages/contact';
import Courses from './components/pages/courses';

//includes
import './Assets/css/default.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,  
    };

    this.handleWindowSize = this.handleWindowSize.bind(this);
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSize);
  }

  handleWindowSize() {
    this.setState({ width: window.innerWidth});
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;

    if(!isMobile) {
    return (
      <Router>
      <div class="App">
        <Header />
        <div className="bodyContainer">
          <Route exact path='/' component={Carousel}/>
          <Route exact path='/' component={HomePage} />
          
          <Route exact path='/Experience' component={Experience} />
          <Route exact path='/Schedule' component={Schedule} />
          {/*<Route exact path='/Schedule' component={Calendar} />*/}
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Courses' component={Courses} />
        </div>
        <Footer />
      </div>
      </Router>
    );
    } else {
      return (
        <Router>
        <div class="App">
          <MobileHeader />
          <div className="bodyContainer">
          
            <Route exact path='/' component={Carousel}/>
            <Route exact path='/' component={HomePage} />
            
            <Route exact path='/Experience' component={Experience} />
            <Route exact path='/Schedule' component={Schedule} />
            {/*<Route exact path='/Schedule' component={Calendar} />*/}
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Courses' component={Courses} />
          </div>
          <MobileFooter />
        </div>
        </Router>
      );
    }
  }
}

export default App;
