import React, { Component } from "react";
import "./css/Word.css";

export default class Word extends Component {
    render() {
        return (
            <div className="Word">
                {this.props.lettersFigured.map(item => {
                    return (
                        <div className="Word-letter">
                            {item === undefined ? "" : item}
                        </div>
                    );
                })}
            </div>
        );
    }
}
