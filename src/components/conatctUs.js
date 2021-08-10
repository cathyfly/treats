import React, {useState} from 'react';
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";
import validation from './validation';




export const ContactUs = () => {

   /* const [values,setValues]=useState({
        fname:"",
        email:"",
        sweetname:"",
        location:"",
        description:"",
    });*/

    /*const [errors,setErrors]=useState({});*/

    

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit } = useForm();
    /*const validateInputs = (event) => {
        setErrors(validation(values));
    }*/

   /* const handleChange= (event) => {
        setValues({
            ...values, [event.target.name]: event.target.value
        })*/
    
    

    const serviceID = "service_id";
    const templateID = "template_r8ao5jg";
    const userID = "user_J1X8ftNx4zVTRt9mnFr7J";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {    
            fname: data.fname,
            email: data.email,
            sweetname: data.sweetname,
            location: data.location,
            description: data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully. Thank You For Your Suggestion!.");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

        
            
    

    return (

        <div className="text-center" id="contactUs">
        <div className="contactUs">
            <h1> Let Us Know</h1>

            <p> Let us know where your favourite sweet treat can be found</p>
                <span className="success-message">{successMessage}</span>
            
        
        
        <div className="container" id="contactForm">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
               
            <div className="col-md-6 col-xs-12">
                {/*name input*/}
                                <input type="text" className="form-control" /*value={values.fname} onChange={handleChange}*/
                    placeholder="name"
                    name="fname" id="fname"
                    />

                {/*{errors.name && <p className="error">{errors.name}</p>}*/}
                    
                    {/*email input*/}
                                <input type="email" className="form-control" /*value={values.email} onChange={handleChange}*/
                    placeholder=" your email"
                    name="email" id="phone"
                    />
                    {/*sweet treat input*/}
                                <input type="text" className="form-control" /*value={values.sweetname} onChange={handleChange} */
                    placeholder="Name of your fave sweet treat seller"
                    name="sweetname" id="sweetname"
                    />

                    {/*location input*/}
                                <input type="text" className="form-control" /*value={values.location} onChange={handleChange}*/
                    placeholder="Where are these treats located"
                    name="location" id="location"
                    />
                </div>
                    <div className="col-md-6 col-xs-12">
                        {/*description input*/}
                                <textarea type="text" className="form-control" /*value={values.description} onChange={handleChange}*/
                            placeholder="Tell us about these treats"
                            name="description" id="description"
                        />
                        <line></line>
                        {/*submit button*/}
                        <button className="btn-main-offer btn-contact" type="submit" id="button">Send!</button>
        </div>
        </div>
        </form>
        </div>
        
        </div>
        </div>
        
    )
}


export default ContactUs
