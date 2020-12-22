import React from "react";
import "./Experience.css";
import Fade from 'react-reveal/Fade';


export default class Experience extends React.Component {
	
	constructor(props) {

		super(props);

		this.state = {
			isExpanded: false
		}
	   }

	   render() {
		return(
			<div className="experience" onClick={() => this.setState({isExpanded: !this.state.isExpanded})}>
				<img className="experience-image" src={this.props.experienceImage} alt="experience"/>
				<div className="experience-text">
					<span className="experience-job-title"> {this.props.jobTitle}</span>
					<span className="experience-job-date-range">{this.props.dateRange}</span>
					{(this.state.isExpanded ?
					<Fade> 
						<div className="experience-job-description">
						{this.props.jobDescription}
						</div>
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

