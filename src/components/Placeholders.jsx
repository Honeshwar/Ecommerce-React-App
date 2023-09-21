import React from 'react'

function Placeholders() {
  return (
  <div className="card" aria-hidden="true" style={{width: "18rem", margin:" 20px"}}>
    <div  className="card-img-top" style={{width: "100%",height:"9rem",backgroundColor:"slategray",}}></div>
    <div className="card-body">
        <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
        </p>
        <button tabindex="-1" className="btn btn-primary disabled placeholder col-6"></button>
    </div>
</div>
  )
}

export default Placeholders;

/*
 What does rel Noreferrer do?//error come use anchor tag and target=_blank
 
Noreferrer (rel=“noreferrer”) is a keyword in the “rel” HTML link attribute that instructs the browser not to send any referrer information to the target resource when the user clicks the link on a page. It also instructs the browser to behave as if the “noopener” is specified in the “rel” attribute. 
*/