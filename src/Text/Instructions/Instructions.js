import React from 'react';
import keyboard from './Keyboard.png'

const footer = () => {
  return (
    <div>
      <h4>Instructions</h4>
      <p>
        This calculator uses Reverse Polish or Postfix notation. Values are followed by operators. To see this in action, let's try adding 4 and 5 together. In the more common Infix notation, this would be written as <code>4 + 5</code>. However, in Reverse Polish notation, we write it <code>4 5 +</code>. To calculate this we
      </p>
      <ol>
        <li>Type <code>4</code>. It should show up on the display.</li>
        <li>Press the <i className="fas fa-arrow-up"></i> button or the "Return" key. This pushes the value onto our stack of numbers and resets the display to zero.</li>
        <li>Type <code>5</code>.</li>
        <li>Press the + button or "+" key. This evaluates the value at the top of the stack (currently 4) with the value on the display using the addition operator. The display should now read 9.</li>
      </ol>
      <p>
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
  )
};

export default footer;
              
                
             
              