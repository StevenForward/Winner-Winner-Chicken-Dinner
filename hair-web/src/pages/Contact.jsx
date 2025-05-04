import contact1 from '../images/contact1.png'; 
import '../css/Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-div">
        {/* Left Half - Form */}
        <div className="contact-left-div">
          <div className="contact-form-container">
            <h1>Contact Us!</h1>
            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your message..."></textarea>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>

        {/* Right Half - Image */}
        <div className="contact-right-div"></div>
      </div>
    </div>
  );
}

export default Contact;
