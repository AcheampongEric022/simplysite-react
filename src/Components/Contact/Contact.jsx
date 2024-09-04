import "./Contact.css"
import message from "../../images/msg-icon.png"
import mail from "../../images/mail-icon.png"
import phone from "../../images/phone-icon.png"
import location from "../../images/location-icon.png"
import arrow from "../../images/white-arrow.png"
import React, {useState} from 'react'



function Contact(){

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "41def7c7-f329-4d33-a040-9a65eb319147");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    return(
        <div className="contact container" id="Contact">
            <div className="contactColumn">

                <h3>Send Us A Message <img src={message} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our 
                    contact information below. Your feedback, questions, and suggestions 
                    are important to us as we strive to provide exceptional service to our 
                    university community.
                </p>
                <ul>
                    <li><img src={mail} alt="" />ericacheampong022@gmail.com</li>
                    <li><img src={phone} alt="" />+233-556-762-407 </li>
                    <li><img src={location} alt="" /><a target="blank" href="https://wa.me/+233556762407">Whatsapp Me Now</a></li>
                </ul>
            </div>

            <div className="contactColumn">
                <form onSubmit={onSubmit} action="">
                    <label htmlFor="">Your name</label>
                    <input type="text" name='name' placeholder="Enter your name...." required/>
                    <label htmlFor="">Your Phone number</label>
                    <input type="tel" name='Phone' placeholder="Enter your Phone number...." required/>
                    <label htmlFor="">Write your Messages Here</label>
                    <textarea name="message" id="" cols="30" rows="6" placeholder="Enter your Message..." required></textarea>
                    <button type="submit" className="btn darkbtn">Submit now<img src={arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact