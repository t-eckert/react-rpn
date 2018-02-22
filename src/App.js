import React, { Component } from 'react';
import Number from './Number/Number.js'
import Push from './Push/Push.js'
import Clear from './Clear/Clear.js'
import ClearScreen from './ClearScreen/ClearScreen.js'
import ClearAll from './ClearAll/ClearAll.js'
import Decimal from './Decimal/Decimal.js'
import Operation from './Operation/Operation.js'
import Action from './Action/Action.js'
import './App.css';
import keyboard from './Keyboard.png'

class App extends Component {
  state = {
    stack: [0,0,0,0,0,0,0,0,0]
  }

  pushToStackHandler = () => {
    const stackVals = this.state.stack
    this.setState({stack: [0,...stackVals]})
    console.log("ptsh")
  }

  appendToInputActive = (value) => {
    const stackVals = this.state.stack
    let inputActive = stackVals[0]
    inputActive = inputActive ? inputActive.toString() +value.toString() : value.toString()
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
  }

  piToInputActive = () => {
    const stackVals = this.state.stack
    let inputActive = (3.14159265359).toString()
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
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
    const stackVals = this.state.stack
    let inputActive = stackVals[0]
    inputActive = inputActive.toString() +'.'
    this.setState({stack: [inputActive,...stackVals.slice(1)]})
    console.log(inputActive)
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

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col"/>
            <div className="col-lg-6 col-md-10 col-12">
              <div className="panel-stack">
                <h2 className="input">{this.state.stack[3]}</h2>
                <h2 className="input">{this.state.stack[2]}</h2>
                <h2 className="input">{this.state.stack[1]}</h2>
              </div>
              <div className="jumbotron panel-buttons">
                <div className="jumbotron panel-input">
                  <h1 className="input-active">{this.state.stack[0]}</h1>
                  <hr/>
                  <div className="row">
                    <div className="col-2"><Operation symbol='+' click={()=>this.additionHandler()}/></div> 
                    <div className="col-2"><Operation symbol='–' click={()=>this.subtractionHandler()}/></div> 
                    <div className="col-2"><Operation symbol='×' click={()=>this.multiplicationHandler()}/></div> 
                    <div className="col-2"><Operation symbol='÷' click={()=>this.divisionHandler()}/></div>
                    <div className="col-2"><Clear click={() => this.clearHandler()}/></div>
                    <div className="col-2"><Push click={() => this.pushToStackHandler()}/></div> 
                  </div>
                </div>
                <div className="row">
                  <div className="col-2"><ClearScreen symbol='C' click={() => this.clearScreen()}/></div>
                  <div className="col-2"><ClearAll symbol='AC' click={() => this.clearAll()}/></div>
                  <div className="col-2"/>
                  <div className="col-2"><Number symbol='7' click={() => this.appendToInputActive(7)}/></div>
                  <div className="col-2"><Number symbol='8' click={() => this.appendToInputActive(8)}/></div>
                  <div className="col-2"><Number symbol='9' click={() => this.appendToInputActive(9)}/></div>
                </div>
                <div className="row">
                  <div className="col-2"><Action symbol='x²' click={() => this.actionSquare()}/></div>
                  <div className="col-2"><Action symbol='√' click={() => this.actionSQRT()}/></div>
                  <div className="col-2"/>
                  <div className="col-2"><Number symbol='4' click={() => this.appendToInputActive(4)}/></div>
                  <div className="col-2"><Number symbol='5' click={() => this.appendToInputActive(5)}/></div>
                  <div className="col-2"><Number symbol='6' click={() => this.appendToInputActive(6)}/></div>
                </div>
                <div className="row">
                  <div className="col-2"><Action symbol='SIN' click={() => this.actionSIN()}/></div>
                  <div className="col-2"><Action symbol='COS' click={() => this.actionCOS()}/></div>
                  <div className="col-2"/>
                  <div className="col-2"><Number symbol='1' click={() => this.appendToInputActive(1)}/></div>
                  <div className="col-2"><Number symbol='2' click={() => this.appendToInputActive(2)}/></div>
                  <div className="col-2"><Number symbol='3' click={() => this.appendToInputActive(3)}/></div>
                </div>
                <div className="row">
                  <div className="col-2"><Action symbol='TAN' click={() => this.actionTAN()}/></div>
                  <div className="col-2"><Action symbol='+/-' click={() => this.actionPM()}/></div>
                  <div className="col-2"/>
                  <div className="col-2"><Decimal symbol='.' click={() => this.decimalToInputActive()}/></div>
                  <div className="col-2"><Number symbol='0' click={() => this.appendToInputActive(0)}/></div>
                  <div className="col-2"/>
                </div>
              </div>
              <h3>Reverse Polish Calculator</h3>
              <h4>Instructions</h4>
              <p>
                This calculator uses Reverse Polish or Postfix notation. Values are followed by operators. To see this in action, let's try adding 4 and 5 together. In the more common Infix notation, this would be written as <code>4 + 5</code>. However, in Reverse Polish notation, we write it <code>4 5 +</code>. To calculate this we
                <ol>
                  <li>Type <code>4</code>. It should show up on the display.</li>
                  <li>Press the <i className="fas fa-arrow-up"></i> button or the "Return" key. This pushes the value onto our stack of numbers and resets the display to zero.</li>
                  <li>Type <code>5</code>.</li>
                  <li>Press the + button or "+" key. This evaluates the value at the top of the stack (currently 4) with the value on the display using the addition operator. The display should now read 9.</li>
                </ol>
                You can read more about Reverse Polish Notation <a href="https://en.wikipedia.org/wiki/Reverse_Polish_notation">here</a>.
              </p>
              <h3>Keyboard Shortcuts</h3>
              <p>
                The calculator may be operated using the number keys on your computer. Additionally, a layout of keys like those traditionally found on a calculator is emulated with the following keyboard setup:  
                <img src={keyboard} className="img-fluid rounded" alt="Responsive"/>
              </p>  
              <h3>A Note on Numerical Precision</h3>
              <p>
                This calculator uses the JavaScript math engine for computations. This is reliable for many every-day uses (e.g. taxes, homework) but should be avoided for high-precision calculations (e.g. nuclear cross sections, fluid simulations).
              </p>
            </div>
            <div className="col"/>
          </div>          
        </div>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col"/>
              <div className="col-lg-6 col-md-10 col-12">
                <br/>
                <h2>About</h2>
                <p>
                  My name is Thomas Eckert. This is my first web application in React. If you manage to break it, want to report issues, or have questions you can let me know by <a href="mailto:t_eckert@outlook.com">email</a>.
                </p>
                <p>
                  <a href="https://github.com/t-eckert/react-rpn">View the code for this app on GitHub</a>
                </p>  
                <p>
                  <a href="https://thomaseckert.org/">Learn more at my website</a>
                </p>
              </div>
              <div className="col"/>
            </div>
          </div> 
        </footer>
      </div>
    );
  }
}

export default App;