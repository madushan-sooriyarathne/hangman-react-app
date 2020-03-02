import React, { Component } from "react";
import "./css/ScoreBoard.css";
import audioClipFail from "./audio/fail.mp3";
import audioClipWin from "./audio/win.mp3";

export default class ScoreBoard extends Component {
    render() {
        return (
            <section className="ScoreBoard">
                {this.props.won === undefined ? (
                    <div className="ScoreBoard-score">
                        <h1 className="ScoreBoard-left">
                            Moves Left: {this.props.chances}
                        </h1>
                        <h1 className="ScoreBoard-wrong">
                            Wrong Moves: {this.props.wrongMoves}
                        </h1>
                    </div>
                ) : this.props.won ? (
                    <div>
                        <h1 className="ScoreBoard-winner">We have a winner</h1>
                        <audio autoPlay="true">
                            <source
                                src={audioClipWin}
                                type="audio/mp3"
                            ></source>
                        </audio>
                    </div>
                ) : (
                    <div>
                        <h1 className="ScoreBoard-looser">Sorry! you lose</h1>
                        <audio autoPlay="true">
                            <source
                                src={audioClipFail}
                                type="audio/mp3"
                            ></source>
                        </audio>
                    </div>
                )}
            </section>
        );
    }
}
