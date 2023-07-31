import React, { Component } from "react";
import Iphone14 from "./Images/Iphone14.jpeg";
import Arp from "./Images/Asus Rog Phone.jpeg";
import op from "./Images/oneplus.jpeg";
import './about.css'
import R from "./Images/RadoHR.webp";
import video1 from './Vid/V2.mp4';
class Phone extends Component{
    render(){
        return(
            <div>
                <img src={op} className="p1" alt="oneplus" width={300} height={300}/>
                <img src={R} className="p2" alt="Rado HR" width={300} height={300}/>
                <p style={{color:"white"}}>
                    We are a team who believe that the customer is king and strive to make sure you are treated like a king. Our efforts and drive doesn’t just come from one person but from all of our partners and employees.
                    We believe that together we can make your experience one that you never forget. That’s why our website is your one stop shop for two wheelers.
                    On our site, you can get the on-road price of the bike you’re looking for. We pride ourselves on giving you everything that you need to make a decision while buying a bike.
                    So on our site, you can buy new bikes,helmets and you can also calculate your EMI(easy monthly instalment) options, find tyres for your bike and also write your own personal review of a bike.
                    We love what we do and our passion for motorcycles and people is what drives us to constantly better ourselves to help you. Innovation, Reliability and Client-friendliness are the key values that we hold.
                    AK BIKES provides you with all the information you need to make a well informed buying decision.
                </p>

               
            </div>
           
           
        );
    }
}

export default Phone;
