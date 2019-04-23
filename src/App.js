import React, { Component } from "react";
import "./App.css";
import {getNewWord} from "./word";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "źółtodziub",
      mishits: "",
      hits: "",
      alphabet: "aąbcćdeęfghijklłmnńoópqrsśtuwvxyzżź"
    };
  }

  refreshStickman() {
    var svgDoc = document.getElementById("svg").contentDocument;
    console.log(svgDoc);
    for (var i = 1; i <= 13; i++) {
      var el = svgDoc.getElementById("p" + i);
      if (el) {
        if (this.state.mishits.length >= 13) {
          el.style.stroke = "red";
          el.style.strokeWidth = "1px";
        } else if (this.state.mishits.length > 10) {
          el.style.stroke = "#f4c842";
          el.style.strokeWidth = "1px";
        } else {
          el.style.stroke = "#000";
          el.style.strokeWidth = "0.2px";
        }

        if (i <= this.state.mishits.length) {
          el.style.display = null;
        } else {
          el.style.display = "none";
        }
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updating...: ");
    this.refreshStickman();
  }

  componentDidMount() {
    this.reset();
    // setTimeout(() => {
    //   this.refreshStickman();
    // }, 500);
  }

  reset() {
    // var word = "żółtodziub";
    var letters = "";
    var word = getNewWord();

    for (var i = 0; i < 2; i++) {
      var idx = Math.floor(Math.random() * word.length);
      letters += word[idx];
    }

    this.setState(state => {
      state.word = word;
      state.mishits = "";
      state.hits = letters;
      state.lost = false;
      return state;
    });
  }

  onLetterClicked(letter) {
    // console.log(letter);
    // if (this.state.word.indexOf(letter) > -1) {
    //   this.setState(state => {
    //     state.hits += letter;
    //     return state;
    //   });
    // } else {
    //   this.setState(state => {
    //     state.mishits += letter;
    //     return state;
    //   });
    // }

    // // WRONG
    // if (this.state.mishits.length >= 13)
    //   this.setState( {
    //     lost: true
    //   });

    if (this.checkWin() || this.state.lost)
      return;

    console.log(letter);
    var hits = this.state.hits; 
    var mishits = this.state.mishits; 
    if (this.state.word.indexOf(letter) > -1) {
      hits += letter;
    } else {
      mishits += letter;
    }

    if (mishits.length >= 13)
      this.setState( {
        lost: true
      });

    this.setState( {
        mishits: mishits,
        hits: hits
      })
  }

  checkWin() {
    // for (var i = 0; i < this.state.word.length; i++) {
    //   if (this.state.hits.indexOf(this.state.word[i]) == -1)
    //     return false;
    // }

    // return true;
    var res = true;
    [...this.state.word].forEach( l => {
      console.log(l);
      if (this.state.hits.indexOf(l) == -1)
        res = false;
    });
    return res;
  }

  render() {
    return (
      <div className="App">
        <h1> Stickman App! </h1>
        <div>
          <ul>
            <li>Level: 1</li>
            <li>Word: 1 / 5</li>
          </ul>

          <div className="word">
            <ul>
              {[...this.state.word].map((l, idx) => {
                return (
                  <li key={idx}>{this.state.hits.indexOf(l) > -1 ? l : "*"}</li>
                );
              })}
            </ul>
          </div>
          <div className="clear" />
          <div>
            <object
              id="svg"
              data="stickman-clean.svg"
              width="200"
              height="200"
              type="image/svg+xml"
              onLoad={() => this.refreshStickman()}
            />
            {this.state.lost && !this.checkWin() ? <span className="lost">You have lost!</span> : ""}
            {this.checkWin() ? <span className="lost">Congratulations! You WIN!</span> : ""}
          </div>
          <div className="alphabet">
            <ul>
              {[...this.state.alphabet].map((l, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => this.onLetterClicked(l)}
                    className={
                      this.state.mishits.indexOf(l) > -1 ? "mishit" : ""
                    }
                  >
                    {this.state.hits.indexOf(l) > -1 ? "\u00A0" : l}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="clear" />
          <div className="buttons">
            <button onClick={() => this.reset()}>Restart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
