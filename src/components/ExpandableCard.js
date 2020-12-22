import React from 'react';
import './ExpandableCard.css';

/*
Expandable Card:
title
subTitle
dateRange
body
*/
class ExpandableCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

    }


    render() {
        return (
            <div className="card" onClick={() => this.setState({isExpanded: !this.state.isExpanded})}>
                <span className="card-title">{this.props.title}</span>
                <span className="card-subtitle">{this.props.subTitle}</span>
                {(this.state.isExpanded ? 
                <Fade>
                <div className="card-body">{this.props.body}</div>
                </Fade> 
                :<></>)}
            </div>
        );
    }
}

ExpandableCard.propTypes = {

};

export default ExpandableCard;