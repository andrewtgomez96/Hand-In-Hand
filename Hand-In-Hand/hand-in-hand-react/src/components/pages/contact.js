import React, { Component } from 'react';
import axios from 'axios'

class Contact extends Component {
  constructor(props) {
      super(props);
      this.state = {name: '',
                    email: '',
                    phone: '',
                    message: '',
                    modalMessage: '',
                    modalState: false};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
    event.preventDefault();
  }

  async handleSubmit(event) {
    event.preventDefault()

    const {name, email, phone, message} = this.state;

    axios.post('/api/form', {
        name: name,   
        email: email,
        phone: phone,  
        message: message
    }).then((response) => {
        if (response.data.msg === 'success') {
            this.setState({
                modalMessage: 'Thank you for submitting your comment! Our team will be in touch with you soon.'
            });
            this.toggleModal(event);
        } else if(response.data.msg === 'fail') {
            this.setState({
                modalMessage: 'We apologize, something to appears to have gone wrong. Please submit again or contact us through social media.'
            });
            this.toggleModal(event);
        }
    });

    this.resetForm();
  }

  toggleModal(event) {
    this.setState({
        modalState: !this.state.modalState
    });
    event.preventDefault();
  }

  resetForm(){
    this.setState({
        name: '',
        email: '',
        phone: '',
        message: '',
        modalState: false
    });
  }

  render() {
    let modalState = this.state.modalState ? "ModalOpen" : "ModalClosed";
    return (
        <div class = "content">
        {/* THE MODAL */}
        <div id={modalState} class="modal">
        {/* MODAL CONTENT */}
        <div class="modalContent">
            <div class="modalHead">
            <span class="close" onClick={this.toggleModal}>
            &times;
            </span>
            <h2>Contact Us</h2>
            </div>
            <div class="modalBody">
            <p>{this.state.modalMessage}</p>
            </div>
            <div class="modalFoot">
            <h3>Hand-In-Hand (2019)</h3>
            </div>
        </div>
        </div>
        {/* END OF MODAL */}
        <form id="contact_form" class = "form-signin" onSubmit={this.handleSubmit} method="POST">
            <h2 class="headerContact">Connect With Us!</h2>
            <p className="paragraphBody"> Please feel free to contact us on any of our social media platforms. We are always available to address your concerns or answer any questions you may have. 
                You may also contact us directly through our phone number or e-mail. 
            </p>
            <div className="contactSocials">
                <div className="facebook">
                    <a target="_blank" href={"http://facebook.com"}><img src={require("../../Assets/resources/facebook.png")}></img></a>
                </div>
                <div className="instagram">
                    <a target="_blank" href={"http://instagram.com"}><img src={require("../../Assets/resources/instagram.png")}></img></a>
                </div>
                <div className="yelp">
                    <a target="_blank" href={"http://yelp.com"}><img src={require("../../Assets/resources/yelp.png")}></img></a>
                </div>
            </div>
    
            <h1 className="headerContact">Contact Us</h1>
            <div class="form-container">
                <label for="name"><b>Name</b></label>
                    <input type="text" name="name" size="50" placeholder="Name" value={this.state.name} onChange={this.handleChange} required/>
                <label for="email"><b>Email</b></label>
                    <input type="text" id="exampleInputEmail" name="email" size="50" placeholder="name@example.com" value={this.state.email} onChange={this.handleChange} required/>
                <label for="phone"><b>Phone</b></label>
                    <input type="text" name="phone" size="20" placeholder="2528675309" value={this.state.phone} onChange={this.handleChange} />
                <label for="message"><b>Message</b></label>
                    <textarea type="text" name="message" placeholder="Message Here..." value={this.state.message} onChange={this.handleChange}/>
                <input class="submitStyles" id="submitButton" type="submit" value="Submit" name = "submit" />
                <input class="submitStyles" type="reset" value ="Reset" onClick={this.resetForm}/>
            </div>
        </form>
        </div>
    );
  }
}

export default Contact;