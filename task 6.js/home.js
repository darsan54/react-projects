import React, { Component } from "react";
import Iphone14 from "./Images/Iphone14.jpeg";
import Arp from "./Images/Asus Rog Phone.jpeg";
import op from "./Images/oneplus.jpeg";
import './about.css'
import video1 from './Vid/V2.mp4';
class Home extends Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <img src={Arp} className="p1" alt="Asus" width={300} height={300}/>
                        <img src={Iphone14} className="p2" alt="Iphone" width={300} height={300}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <video src={video1} width="600" height="300" controls="controls" autoplay="true" className="videos"/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <img src={op} className="p1" alt="oneplus" width={300} height={300}/>
                    <img src={op} className="p2" alt="oneplus" width={300} height={300}/>
                    </div>

                </div>
            </div>
           
           
        );
    }
}

export default Home;

import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, Switch } from 'react-router-dom';
import Home from './home';
import Phone from './about';
import Join from './joinus';

const routing = (
    <Router>
        <div>
            <h1>Hello</h1>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<Phone/>} />
                <Route path="/joinus" element={<Join/>} />
            </Routes>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
