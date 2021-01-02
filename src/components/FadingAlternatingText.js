import React from 'react';
import'./FadingAlternatingText.css';


export default class FadingAlternatingText extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            currentText: props.textArray[0],
            className: "alternating-text"
        }
    }

    changeIndex() {
        let currentIndex = this.state.index;
		if(currentIndex >= this.props.textArray.length -1) {
			currentIndex = -1;
		}
        this.setState({index: currentIndex+1, currentText: this.props.textArray[this.state.index]});
    }

    changeText() {
        this.setState({className: "alternating-text hide"});
        setTimeout(() => {
            this.changeIndex();
            this.setState({className: "alternating-text"});
        }, 500);
        
    }

    componentDidMount() {
		this.interval = setInterval(() => {
			this.changeText();
		}, this.props.interval);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

    render() {
        return(
            <p className={this.state.className}>
                {this.state.currentText}
            </p>
        );
    }
}