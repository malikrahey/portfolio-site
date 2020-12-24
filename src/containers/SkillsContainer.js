import React from 'react';
import {skillsData} from '../data/skillsData';
import Skill from '../components/Skill';
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
        <div className="skill-container-title">Skills</div>
        <ul className="skill-container">
        {skills}
        </ul>
        </>
    );
}