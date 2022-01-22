import react from "react";
import "./Contactus.scss";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import  FileUploader  from "../Courses/FileUploader";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Alert from "../Alert/Alert";
// Contact Us Component
class Contactus extends react.Component {
    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_674tzmo", "template_ezzufiu", e.target, "user_LyaJLtj8MJKAlcpMFsFwS").then(res => {
            console.log(res);
        }).catch(err=> console.log(err));
    }


      alertMsg(){
        alert("Thank you for your feedback. We heard you!!")
        
      }
    

    render() {
        return (
            <section className="contactUs_container" >
                <div className="contactUs_subContainer" >
                    <div className="contactUs_form">
                        <div className="contactUS_subForm">
                            <h2 className="contactUS_heading">CONTACT FORM</h2>
                            <form action="#" name="FORM" onSubmit={this.sendEmail}>
                                <div>
                                    <label className="cu_lbl">Name</label>
                                    <input type="text" name="name" className="contactUs_formInput" ></input>
                                    <br></br>

                                    <label className="cu_lbl">Email ID</label>
                                    <input type="email" name="user_email" className="contactUs_formInput"></input>
                                    <br></br>
                                    <div className="contactUS_msg">
                                    <label for="contactMsg" id="contactMsg2" className="cu_lbl">Message</label>
                                    <br></br>
                                    <textarea id="contactMsg" className="contactUs_formInput" name="message" rows='5'  />
                                    </div>
                                    <input type='submit' value='Send' className="submitBtn" onClick={this.alertMsg}/>
                                     
                                </div>
                              
                            </form>
                            
                            {/* <FileUploader /> */}
                            {/* <FileDownload /> */}
                            {/* <button type="submit" className="submitBtn">Send</button> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contactus;
