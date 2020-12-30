import React from 'react';
import "./RoundedIcon.css";


export default function RoundedIcon(props) {

    return(
        <span className="rounded-icon">
            <a href={props.href} target="_blank">
            <img className="rounded-icon" src={props.src} alt={props.alt}/>
            </a>
        </span>
    );

}