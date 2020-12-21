import React from "react";
import "./Experience.css";
import ExpandableCard from "./ExpandableCard";

export default function Experience({
	 experienceImage = "",
	companyName = "",
	jobTitle = "",
	dateRange = "",
	jobDescription = ""}) {
	
		return(
			<div className="experience">
				<img className="experience-image" src={experienceImage} alt="experience"/>
				<div className="experience-text">
					<ExpandableCard
					title={companyName}
					subTitle={jobTitle}
					body={jobDescription}/>
				</div>
			</div>
		);
}


