import React from 'react';
import StarRatings from 'react-star-ratings';
import './Skill.css'

export default function Skill(props) {

    return(
        <div className="skill">
        <span className="skill-name">{props.name}</span>
        <StarRatings className="skill-rating" rating={props.rating} numberOfStars={5} starDimension="28px"/>
        </div>
    );
}