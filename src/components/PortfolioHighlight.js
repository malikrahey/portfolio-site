import React from "react";

export default function PortfolioHighlight(props) {

	return(
		<>
			<div className="portfolio-highlight">
			<img className="portfolio-highlight-img" src={props.src} alt ="hightlight"/>
			<div className="portfolio-highlight-title">
				{this.title}
			</div>
			<div className="portfolio-highlight-description">
				{this.description}
			</div>
			</div>
		</>
	);

}
