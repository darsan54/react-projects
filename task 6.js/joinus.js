import React from "react";
import Arp from "./Images/Asus Rog Phone.jpeg";

class Join extends React.Component{
    render(){
        return(
            <div>
                <h1>Join us</h1>
                <p>Welcome to the Join page</p>
                <img src={Arp} className="p1" alt="Asus" width={300} height={300}/>
            </div>
        );
    }}

    export default Join;