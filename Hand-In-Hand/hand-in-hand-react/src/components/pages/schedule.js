import React, { Component } from 'react';



class Schedule extends Component {
    constructor(props) {
        super(props);
        this.setHeight = this.setHeight.bind(this);
    }
  
    setHeight(event) {
        document.getElementById('iFrame').style.height = document['body'].offsetHeight + 'px';
        event.preventDefault();
    }
    
  render() {
    return (
        <div class="content">
            <h1 class="mainTitle"> Hand-In-Hand Availability </h1>
            <p class="paragraphBody">
                The google calendar below is updated monthly with Hand-In-Hands availability. If you would like to schedule a class please submit your request through
                the contact page and we will get back to you as soon as possible. 
            </p>
            {/*width="800" height="580" onLoad={this.setHeight}*/}
            <iframe id="iFrame" src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=aGFuZGluaGFuZHNhZmV0eXRyYWluaW5nQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showCalendars=1&amp;showTz=0" frameborder="0" scrolling="no"></iframe>
                  
        {/*<a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MTA5cm44MXBudDNpZjIwOGNxZjFrOGJjMHQgaGFuZGluaGFuZHNhZmV0eXRyYWluaW5nQG0&amp;tmsrc=handinhandsafetytraining%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"/></a>*/} 
        
        </div>
    );
  }
}

export default Schedule;