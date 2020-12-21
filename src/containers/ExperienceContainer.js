import React from 'react';
import './ExperienceContainer.css';
import Experience from "../components/Experience.js";
import nokiaLogo from "../images/nokia-logo.jpg";

function ExperienceContainer() {
    return (
        <>
        <div className = "experience-container"> 
        <Experience
         experienceImage={nokiaLogo}
          companyName="NOKIA" 
          jobTitle="nokia:)"
          dateRange=""
          jobDescription="this is what I do"
          />
	    </div>
        </>
    );
}


export default ExperienceContainer;
