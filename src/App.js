import React, { Component } from 'react';
import Push from './Push/Push.js';
import Clear from './Clear/Clear.js';
import ClearScreen from './ClearScreen/ClearScreen.js';
import ClearAll from './ClearAll/ClearAll.js';
import Action from './Action/Action.js';
import Footer from './Text/Footer/Footer.js';
import Instructions from './Text/Instructions/Instructions.js';
import Button from './Button/Button'
import './App.css';

class App extends Component {
  state = {
    stack: [0,0,0,0,0,0,0,0,0],
    width: window.innerWidth
  }

  pushToStackHandler = () => {
    const stackVals = this.state.stack;
    this.setState({stack: [0,...stackVals]});
    console.log("Value pushed to stack.");
  }

  appendToInputActive = (value) => {
    const stackVals = this.state.stack;
    let inputActive = stackVals[0];
    inputActive = inputActive ? inputActive.toString() +value.toString() : value.toString();
    this.setState({stack: [inputActive,...stackVals.slice(1)]});
    console.log(inputActive);
  }

  clearHandler = () => {
    const stackVals = this.state.stack
    let inputActive = stackVals[0]
    inputActive = inputActive ? inputActive.toString().slice(0,-1) : inputActive
    inputActive = inputActive ? inputActive : 0
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  clearScreen = () => {
    const stackVals = this.state.stack
    let inputActive = stackVals[0]
    inputActive = 0
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  clearAll = () => {
    this.setState({stack: [0,0,0,0]})
    console.log(0)
  }

  decimalToInputActive = () => {
    const stackVals = this.state.stack;
    let inputActive = stackVals[0];
    inputActive = inputActive.toString();

    // Prevent more than one decimal in inputActive (e.g. 192.34.02)
    // Fails silently and prints issue to log.
    if (inputActive.includes('.')) {
      console.log("A . is already in the display.");
    }
    else {
      inputActive = inputActive +'.';
      this.setState({stack: [inputActive,...stackVals.slice(1)]});
      console.log(inputActive);
    } 
  }

  additionHandler = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) +parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(2)]})
    console.log(inputActive)
  }

  subtractionHandler = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) -parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(2)]})
    console.log(inputActive)
  }

  multiplicationHandler = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10) *parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(2)]})
    console.log(inputActive)
  }

  divisionHandler = () => {
    const stackVals = this.state.stack
    let inputActive = parseFloat(stackVals[1], 10)/parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(2)]})
    console.log(inputActive)
  }

  actionSquare = () => {
    const stackVals = this.state.stack
    let inputActive = Math.pow(parseFloat(stackVals[0], 10), 2)
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  actionSQRT = () => {
    const stackVals = this.state.stack
    let inputActive = Math.sqrt(parseFloat(stackVals[0], 10))
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  actionSIN = () => {
    const stackVals = this.state.stack
    let inputActive = Math.sin(parseFloat(stackVals[0], 10))
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  actionCOS = () => {
    const stackVals = this.state.stack
    let inputActive = Math.cos(parseFloat(stackVals[0], 10))
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  actionTAN = () => {
    const stackVals = this.state.stack
    let inputActive = Math.tan(parseFloat(stackVals[0], 10))
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  actionPM = () => {
    const stackVals = this.state.stack
    let inputActive = -1*parseFloat(stackVals[0], 10)
    inputActive = inputActive.toString()
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  keyDownHandler = (event) => {

    // Letter keys may be used to input Operands.
    const kbControls = {
      'v' : 0,
      'b' : 1,
      'n' : 2,
      'm' : 3,
      'h' : 4,
      'j' : 5,
      'k' : 6,
      'y' : 7,
      'u' : 8,
      'i' : 9
    }

    let { key } = event

    if (key in kbControls) {
      key = kbControls[key]
    } 
    
    if ((/\d/).test(key)) {
      console.log(key)
      event.preventDefault()
      this.appendToInputActive(parseInt(key, 10))
    }
    else if (key === '+') {
      this.additionHandler()
    }
    else if (key === '-') {
      this.subtractionHandler()
    }
    else if (key === '*') {
      this.multiplicationHandler()
    }
    else if (key === '/') {
      this.divisionHandler()
    }
    else if (key === 'Enter') {
      this.pushToStackHandler()
    }
    else if (key === 'Backspace') {
      this.clearHandler()
    }
    else if (key === '.') {
      this.decimalToInputActive()
    }
    else if (key === '[') {
      this.clearScreen()
    }
    else if (key === ']') {
      this.clearAll()
    }
    else if (key === 'q') {
      this.actionSquare()
    }
    else if (key === 'w') {
      this.actionSQRT()
    }
    else if (key === 'a') {
      this.actionSIN()
    }
    else if (key === 's') {
      this.actionCOS()
    }
    else if (key === 'z') {
      this.actionTAN()
    }
    else if (key === 'x') {
      this.actionPM()
    }
  }

  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth});
    console.log(this.state.width)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler)
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  render() {
    let operations = null
    let panelButtons = null

    if (this.state.width <= 570) {
      operations = (
        <div>
          <div className="row">
            <div className="col-2"><Button symbol='+' click={()=>this.additionHandler()}/></div>
            <div className="col-2"><Button symbol='–' click={()=>this.subtractionHandler()}/></div>
            <div className="col"></div>
            <div className="col-2"><Clear click={() => this.clearHandler()}/></div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-2"><Button symbol='×' click={()=>this.multiplicationHandler()}/></div> 
            <div className="col-2"><Button symbol='÷' click={()=>this.divisionHandler()}/></div>
            <div className="col"></div>
            <div className="col-2"><Push click={() => this.pushToStackHandler()}/></div>
            <div className="col-1"></div>
          </div>
        </div>
      )
      panelButtons = (
        <div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2"><Button symbol='7' click={() => this.appendToInputActive(7)}/></div>
            <div className="col"></div>
            <div className="col-2"><Button symbol='8' click={() => this.appendToInputActive(8)}/></div>
            <div className="col"></div>
            <div className="col-2"><Button symbol='9' click={() => this.appendToInputActive(9)}/></div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2"><Button symbol='4' click={() => this.appendToInputActive(4)}/></div>
            <div className="col"></div>
            <div className="col-2"><Button symbol='5' click={() => this.appendToInputActive(5)}/></div>
            <div className="col"></div>
            <div className="col-2"><Button symbol='6' click={() => this.appendToInputActive(6)}/></div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2"><Button symbol='1' click={() => this.appendToInputActive(1)}/></div>
            <div className="col"></div>
            <div className="col-2"><Button symbol='2' click={() => this.appendToInputActive(2)}/></div>
            <div className="col"></div>
            <div className="col-2"><Button symbol='3' click={() => this.appendToInputActive(3)}/></div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>  
            <div className="col-2"><Button symbol='.' click={() => this.decimalToInputActive()}/></div>
            <div className="col"></div>
            <div className="col-2"><Button symbol='0' click={() => this.appendToInputActive(0)}/></div>
            <div className="col"></div>
            <div className="col-4"></div>
          </div>
          <hr/>
          <div className="row">
            <div className="col-1"></div> 
            <div className="col-2"><ClearScreen symbol='C' click={() => this.clearScreen()}/></div>
            <div className="col-1"></div> 
            <div className="col-2"><ClearAll symbol='AC' click={() => this.clearAll()}/></div>
            <div className="col"></div> 
          </div>
          <div className="row">
            <div className="col-1"></div> 
            <div className="col-2"><Button symbol='x²' click={() => this.actionSquare()}/></div>
            <div className="col-1"></div> 
            <div className="col-2"><Button symbol='√' click={() => this.actionSQRT()}/></div>
            <div className="col-1"></div>
            <div className="col-2"><Button symbol='+/-' click={() => this.actionPM()}/></div>
            <div className="col"></div> 
          </div>
          <div className="row">
            <div className="col-1"></div> 
            <div className="col-2"><Button symbol='SIN' click={() => this.actionSIN()}/></div>
            <div className="col-1"></div> 
            <div className="col-2"><Button symbol='COS' click={() => this.actionCOS()}/></div>
            <div className="col-1"></div> 
            <div className="col-2"><Button symbol='TAN' click={() => this.actionTAN()}/></div>
            <div className="col"></div> 
          </div>
        </div>
      )
    }
    else {
      operations = (
        <div className="row">
          <div className="col-2"><Button symbol='+' click={()=>this.additionHandler()}/></div> 
          <div className="col-2"><Button symbol='–' click={()=>this.subtractionHandler()}/></div> 
          <div className="col-2"><Button symbol='×' click={()=>this.multiplicationHandler()}/></div> 
          <div className="col-2"><Button symbol='÷' click={()=>this.divisionHandler()}/></div>
          <div className="col-2"><Clear click={() => this.clearHandler()}/></div>
          <div className="col-2"><Push click={() => this.pushToStackHandler()}/></div> 
        </div>
      )
      panelButtons = (
        <div>
          <div className="row">
            <div className="col-2"><ClearScreen symbol='C' click={() => this.clearScreen()}/></div>
            <div className="col-2"><ClearAll symbol='AC' click={() => this.clearAll()}/></div>
            <div className="col-2"/>
            <div className="col-2"><Button symbol='7' click={() => this.appendToInputActive(7)}/></div>
            <div className="col-2"><Button symbol='8' click={() => this.appendToInputActive(8)}/></div>
            <div className="col-2"><Button symbol='9' click={() => this.appendToInputActive(9)}/></div>
          </div>
          <div className="row">
            <div className="col-2"><Action symbol='x²' click={() => this.actionSquare()}/></div>
            <div className="col-2"><Action symbol='√' click={() => this.actionSQRT()}/></div>
            <div className="col-2"/>
            <div className="col-2"><Button symbol='4' click={() => this.appendToInputActive(4)}/></div>
            <div className="col-2"><Button symbol='5' click={() => this.appendToInputActive(5)}/></div>
            <div className="col-2"><Button symbol='6' click={() => this.appendToInputActive(6)}/></div>
          </div>
          <div className="row">
            <div className="col-2"><Action symbol='SIN' click={() => this.actionSIN()}/></div>
            <div className="col-2"><Action symbol='COS' click={() => this.actionCOS()}/></div>
            <div className="col-2"/>
            <div className="col-2"><Button symbol='1' click={() => this.appendToInputActive(1)}/></div>
            <div className="col-2"><Button symbol='2' click={() => this.appendToInputActive(2)}/></div>
            <div className="col-2"><Button symbol='3' click={() => this.appendToInputActive(3)}/></div>
          </div>
          <div className="row">
            <div className="col-2"><Action symbol='TAN' click={() => this.actionTAN()}/></div>
            <div className="col-2"><Action symbol='+/-' click={() => this.actionPM()}/></div>
            <div className="col-2"/>
            <div className="col-2"><Button symbol='.' click={() => this.decimalToInputActive()}/></div>
            <div className="col-2"><Button symbol='0' click={() => this.appendToInputActive(0)}/></div>
            <div className="col-2"/>
          </div>
        </div>
      )
    }

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col"/>
            <div className="col-xl-6 col-lg-8 col-md-10 col-12">
              <div className="panel-stack">
                <h2 className="input">{this.state.stack[3]}</h2>
                <h2 className="input">{this.state.stack[2]}</h2>
                <h2 className="input">{this.state.stack[1]}</h2>
              </div>
              <div className="jumbotron panel-buttons">
                <div className="jumbotron panel-input">
                  <h1 className="input-active">{this.state.stack[0]}</h1>
                  <hr/>
                  <div>{operations}</div>
                </div>
                <div>{panelButtons}</div>
              </div>
              <h3>Reverse Polish Calculator</h3>
              <Instructions/>
            </div>
            <div className="col"/>
          </div>          
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
