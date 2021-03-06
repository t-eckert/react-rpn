import React from 'react';

const footer = () => {
  return (
	<div className="Footer">
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
  )
};

export default footer;