import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
  	super(props);
    const {value1, value2, value3, proposedAnswer} = this.question();
    this.state = {
      value1,
      value2,
      value3,
      proposedAnswer,
      numQuestions: 1,
      numCorrect: 0
    };
    this.answerTrue = this.answerTrue.bind(this);
    this.answerFalse = this.answerFalse.bind(this);
  }
  
  question() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
	const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return { value1, value2, value3, proposedAnswer };
  }
  
  answerTrue() {
    this.evaluateAnswer(true);
  }
  
  answerFalse() {
    this.evaluateAnswer(false);
  }
  
  evaluateAnswer(answer) {
    const {value1, value2, value3, proposedAnswer} = this.question();
    const correctAnswer = this.state.value1 + this.state.value2 + this.state.value3;
	this.setState(state => {
    	return {
            value1,
      		value2,
      		value3,
      		proposedAnswer,
			numQuestions: state.numQuestions + 1,
          	numCorrect: (this.state.proposedAnswer === correctAnswer) === answer ? state.numCorrect + 1 : state.numCorrect
        }
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.answerTrue}>True</button>
          <button onClick={this.answerFalse}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
