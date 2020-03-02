import React, { Component } from "react";
import "./css/Hangman.css";
import stage0 from "./img/0.jpg";
import stage1 from "./img/1.jpg";
import stage2 from "./img/2.jpg";
import stage3 from "./img/3.jpg";
import stage4 from "./img/4.jpg";
import stage5 from "./img/5.jpg";
import stage6 from "./img/6.jpg";
import stage7 from "./img/7.jpg";
import stage8 from "./img/8.jpg";
import stage9 from "./img/9.jpg";
import stage10 from "./img/10.jpg";

export default class Hangman extends Component {
    constructor(props) {
        super(props);
        this.images = [
            stage0,
            stage1,
            stage2,
            stage3,
            stage4,
            stage5,
            stage6,
            stage7,
            stage8,
            stage9,
            stage10
        ];
    }
    render() {
        return (
            <div className="Hangman">
                <img
                    className="Hangman-img"
                    src={this.images[this.props.stage]}
                    alt={this.props.stage}
                ></img>
            </div>
        );
    }
}
