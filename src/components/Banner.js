import React from "react";
import { Link } from "react-router-dom";

import "../styles/Banner.css"
import logo from "../assets/logo.jpg"

/**
 * Banner on each page
 * @param pageTitle {string}
 * @param linkContent {string}
 * @param linkSrc {string}
 * @return {JSX.Element}
 * @constructor
 */

const Banner = ({ pageTitle, linkContent, linkSrc }) => {
    return (
        <div className="banner">
            <h1>HRNet</h1>
            <img src={logo} alt='Wealth health logo'/><br/>
            <Link to={linkSrc}>{linkContent}</Link>
            <h2>{pageTitle}</h2>
        </div>
    );
};


export default Banner;