import React from 'react';
import Project from '../components/Project';
import './ProjectsContainer.css';
import {projectsData} from '../data/projectsData';
import { Fade } from 'react-reveal';

export default function ProjectsContainer() {


    let projects = [];
    projectsData.forEach(project => {
        projects.push(
            <div className="projects-container-item">
            <Project
            icon={project.icon}
            title={project.title}
            description={project.description}
            />
            </div>
        )
    });


    return(
        <Fade>
        <div>
            <div className="projects-container-title">Projects</div>
            <div className="projects-container">
            {projects}
            </div>
        </div>
        </Fade>
    );

}