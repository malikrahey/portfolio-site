import React from 'react';
import {skillsData} from '../data/skillsData';
import Skill from '../components/Skill';
import Fade from 'react-reveal';
import './SkillsContainer.css';


export default function SkillsContainer() {

    let skills = [];

    skillsData.forEach(skill => {
        skills.push(
            <div className="skill-list-item">
            <Skill
            name={skill.name}
            rating={skill.rating}
            />
            </div>
        )
    });

    return(
        <>
        <Fade>
        <div className="skill-container-title">Skills</div>
        <ul className="skill-container">
        {skills}
        </ul>
        </Fade>
        </>
    );
}