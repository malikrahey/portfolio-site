import React from 'react';
import "./PortfolioHeader.css";
import TextLoop from 'react-text-loop';
import { Fade } from 'react-reveal';


const  SUBTITLE_TEXTS = ["Fullstack developer", "Student", "Automation", "Machine Learning"];


export default class PortfolioHeader extends React.Component {	

	constructor() {
		super();
		this.state = {index: 0}

		this.subtitles = [];
		SUBTITLE_TEXTS.forEach(subtitle => {
			let descriptionClassName = "portfolio-header-description " + subtitle;
			this.subtitles.push(<Fade><div className={descriptionClassName}>{subtitle}</div></Fade>)
		});

	}

	changeArrayIndex() {
		let currentIndex = this.state.index;
		if(currentIndex >= SUBTITLE_TEXTS.length -1) {
			currentIndex = -1;
		}
		this.setState({index: currentIndex+1});
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.changeArrayIndex();
		}, 1500);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render()
	{

		return (
			<div className="portfolio-header">
				<div className = "portfolio-header-title"> Malik Rahey </div>
				{this.subtitles[this.state.index]}
			</div>
		);
	}

}


