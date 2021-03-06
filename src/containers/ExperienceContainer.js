import React from 'react';
import './ExperienceContainer.css';
import Experience from "../components/Experience.js";
import {jobsData} from "../data/jobsData";
import { Fade } from 'react-reveal';

function ExperienceContainer() {

    let experiences = [];

    jobsData.forEach(job => {
       
        experiences.push(
            <div className="experience-container-item">
                <Experience
                experienceImage={job.experienceImage}
                companyName={job.companyName}
                jobTitle={job.jobTitle}
                dateRange={job.dateRange}
                jobDescription={job.jobDescription}
                />
            </div>
        )
    });

    return (
        <Fade>
        <div className="experience-container-title">
            Experience
        </div>
        <div className = "experience-container"> 
        {experiences}
	    </div>
        </Fade>
    );
}


export default ExperienceContainer;
