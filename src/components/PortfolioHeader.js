import React from 'react';
import "./PortfolioHeader.css";
import TextLoop from 'react-text-loop';
import { Fade } from 'react-reveal';
import RoundedIcon from './RoundedIcon';
import linkedinIcon from "../data/images/linkedin-icon.png";
import githubIcon from '../data/images/github-icon.png';
import FadingAlternatingText from './FadingAlternatingText';


const  SUBTITLE_TEXTS = ["Fullstack developer", "Student", "Automation", "Machine Learning"];


export default function PortfolioHeader() {	


		return (
			<div className="portfolio-header">
				<div className = "portfolio-header-title"> Malik Rahey </div>
				<div className="portfolio-header-description">
					<FadingAlternatingText
					textArray={SUBTITLE_TEXTS}
					interval={1500}
					/>
				</div>
				<div className="portfolio-header-links">
					<RoundedIcon
					className="portfolio-header-img"
					src={linkedinIcon}
					alt="linkedin"
					href="https://www.linkedin.com/in/malikrahey/"
					/>
					<RoundedIcon
					src={githubIcon}
					alt="github"
					href="https://github.com/malikrahey"
					/>
				</div>
			</div>
		);

}


