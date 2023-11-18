import React from "react";
import './Home.css'
import img1 from '../../Profile/home.png'


export const Home = () => {
    return (
        <header>
            <div className="Home">
                <div>
                    <img src={img1} alt=""  className="mi-clase"/>
                </div>
            </div>
        </header>
    )
}