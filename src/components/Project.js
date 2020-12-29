import React from 'react';
import './Project.css';
import pythonLogo from '../data/images/python-logo.png';
import csLogo from '../data/images/cs-logo.png';
import reactLogo from '../data/images/react-logo.svg';


const LOGO_MAP = {
    "python": pythonLogo,
    "cs": csLogo,
    "react": reactLogo
}


export default class Project extends React.Component {


    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="project">
                <div>
                <img className="project-icon" src={LOGO_MAP[this.props.icon]} alt="icon"/>
                </div>
                <div className="project-title">{this.props.title}</div>
                <div className="project-description">{this.props.description}</div>
            </div>
        );
    }

}