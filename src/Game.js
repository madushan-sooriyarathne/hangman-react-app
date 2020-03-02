import React, { Component } from "react";
import Button from "./Button";
import ScoreBoard from "./ScoreBoard";
import Hangman from "./Hangman";
import Word from "./Word";
import "./css/Game.css";
import { getAlphabets, getRandomWord } from "./helpers";

export default class Game extends Component {
    static defaultProps = {
        chances: 10,
        alphabets: getAlphabets()
    };

    constructor(props) {
        super(props);
        this.state = {
            word: getRandomWord().split(""),
            lettersFigured: new Set(),
            noOfLettersFigured: 0,
            wrongMoves: 0,
            status: undefined,
            availableLetters: getAlphabets()
        };

        //Event Handler method bindings
        this.click = this.click.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    // Reset Event handler
    handleReset(event) {
        this.reset();
    }

    // Reset function
    reset() {
        this.setState(
            {
                word: getRandomWord().split(""),
                lettersFigured: new Set(),
                noOfLettersFigured: 0,
                wrongMoves: 0,
                status: undefined,
                availableLetters: getAlphabets()
            }
        );
    }

    // Alphabet click handler function => this will pass to Button child components
    click(le) {
        this.setState(st => {
            
            // Update the figured letters in state.lettersFigured set
            if (st.word.includes(le)) {
                for (let i = 0; i < st.word.length; i++) {
                    if (st.word[i] === le) {
                        st.noOfLettersFigured++;
                        st.lettersFigured.add(st.word[i]);
                    }
                }
            } else {
                st.wrongMoves++;
            }

            // Update the status of game; win/lose/playing (plying will set as undefined)
            st.status =
                st.wrongMoves === this.props.chances
                    ? false
                    : st.noOfLettersFigured === st.word.length
                    ? true
                    : undefined;

            // Update the key availability
            // in state.availableLetters array, set the clicked key's position to undefined.
            let updatedLetterSet = st.availableLetters.map(item => {
                if (item !== le) {
                    return item;
                } else {
                    return undefined;
                }
            });
            st.availableLetters = updatedLetterSet;
            return st;
        });
    }

    render() {
        return (
            <div className="Game">
                <Hangman stage={this.state.wrongMoves} />
                {this.state.status === true || this.state.status === undefined
                    ? <Word lettersFigured={this.state.word.map(item => this.state.lettersFigured.has(item)? item: undefined)} />
                    : <Word lettersFigured={this.state.word} />}
                
                <ScoreBoard
                    chances={this.props.chances - this.state.wrongMoves}
                    wrongMoves={this.state.wrongMoves}
                    won={this.state.status}
                />
                <section className="Game-buttonPad">
                    {this.props.alphabets.map((letter, index) => {
                        if (
                            this.state.status === true ||
                            this.state.status === false
                        ) {
                            return (
                                <Button
                                    letter={letter}
                                    click={this.click}
                                    isActivated={false}
                                    key={index}
                                />
                            );
                        } else if (
                            this.state.availableLetters[index] === undefined
                        ) {
                            return (
                                <Button
                                    letter={letter}
                                    click={this.click}
                                    isActivated={false}
                                    key={index}
                                />
                            );
                        } else {
                            return (
                                <Button
                                    letter={letter}
                                    click={this.click}
                                    isActivated={true}
                                    key={index}
                                />
                            );
                        }
                    })}
                </section>
                <button onClick={this.handleReset} className="Game-reset">Reset</button>
            </div>
        );
    }
}
