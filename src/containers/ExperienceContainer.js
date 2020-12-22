import React from 'react';
import './ExperienceContainer.css';
import Experience from "../components/Experience.js";
import {jobsData} from "../data/jobsData";

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
        <>
        <div className = "experience-container"> 
        {experiences}
	    </div>
        </>
    );
}


export default ExperienceContainer;
