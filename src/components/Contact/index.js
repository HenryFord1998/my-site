import "./index.scss"
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import emailjs from "@emailjs/browser";

function Contact(){

    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm(
            'gmail',
             'template_jruio14',
              refForm.current, 
              'Wpt45gNqRCA7HJpVR'
              )
          .then(
            () => {
          alert("Message sent successfully. I will get back to you as soon as possible! 😊");
          window.location.href="/"
        },
          () => {
            alert("Failed to send message. Please try again.");
          }
      )};

    const [letterClass, setLetterClass] = useState("text-animate");


    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        idx={15} 
                        strArray={["C","o","n","t","a","c","t"," ","m","e"]}/>
                    </h1>
                    <p>I would love to hear from you, so reach out and contact me via Email, give me a call or send me a WhatsApp. Whichever works for you!</p>
                    <div className="contact-form">
                        <form onSubmit={sendEmail} ref={refForm}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="email" required />
                                </li>
                                <li>
                                    <input className="subject" type="text" name="subject" placeholder="Subject..." required />
                                </li>
                                <li>
                                    <textarea placeholder="message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-contact-button" value="SEND" ></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="right-content">
                    <div className="info-map">

                        Henry Ford<br/>
                        Kraaifontein, Cape Town<br/>
                        <a href="tel:+2771-880-3005" > 071 880 3005 </a>
                        <br/>
                        <a href="mailto:henryford1998@gmail.com" >henryford1998@gmail.com</a> </div>
                    <div className="map-wrap">
                    <MapContainer center={[-33.846269, 18.717435]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-33.846269, 18.717435]}>
                        <Popup>
                        Henry lives somewhere here. <br /> Contact him for a coffee 😊
                        </Popup>
                    </Marker>
                    </MapContainer>
                    </div>
                        
                        

                </div>
            </div>
        <Loader type="ball-grid-beat"/>;
        </>
    )
}

export default Contact;
