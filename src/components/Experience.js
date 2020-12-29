import React from "react";
import "./Experience.css";
import Fade from 'react-reveal/Fade';
import nokiaLogo from '../data/images/nokia-logo.png';
import protocaseLogo from '../data/images/protocase-logo.png';
import totaliQLogo from '../data/images/totaliQ-logo.png';

const LOGO_MAP = {
	"nokia": nokiaLogo,
	"totaliq": totaliQLogo,
	"protocase": protocaseLogo
}


export default class Experience extends React.Component {
	
	constructor(props) {

		super(props);

		this.descriptionList = [];
		props.jobDescription.forEach(element => {
			this.descriptionList.push(
				<li>{element}</li>
			)
		});
		this.state = {
			isExpanded: false
		}
	   }

	   render() {
		return(
			<div className="experience" onClick={() => this.setState({isExpanded: !this.state.isExpanded})}>
				<img className="experience-image" src={LOGO_MAP[this.props.experienceImage]} alt="experience"/>
				<div className="experience-text">
					<span className="experience-job-title"> {this.props.jobTitle}</span>
					<span className="experience-job-date-range">{this.props.dateRange}</span>
					{(this.state.isExpanded ?
					<Fade> 
						<ul className="experience-job-description">
						{this.descriptionList}
						</ul>
					</Fade> :
					 <></>)}
				</div>
			</div>
		);
	   }
}

Experience.defaultProps = {
	experienceImage: "",
	   companyName:"",
	   jobTitle: "",
	   dateRange: "",
	   jobDescription: ""
}

