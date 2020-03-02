import React, {Component} from 'react';
import './css/Button.css';

export default class Button extends Component {
    static defaultProp = {
        letter: 'X',
        isActivated: true
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.click(this.props.letter);
    }

    render() {
        let clsName = `Button ${this.props.isActivated? 'Activated': 'Deactivated'}`;
        return (
            <button className={clsName} onClick={this.handleClick} disabled={this.props.isActivated? false: true}>{this.props.letter}</button>
        )
    }
}