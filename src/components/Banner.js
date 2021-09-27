import React from "react";
import { Link } from "react-router-dom";

import "../styles/Banner.css"

const Banner = ({ pageTitle, linkImg, linkContent, linkSrc }) => {
    return (
        <div className="banner">
            <h1>HRNet</h1>
            <img src={linkImg}/>
            <Link to={linkSrc}>{linkContent}</Link>
            <h2>{pageTitle}</h2>
        </div>
    );
};


export default Banner;