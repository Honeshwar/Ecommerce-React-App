import React from 'react'
import "../styles/totalPrize.css";
function TotalPrize({totalPrize}) {
  return (
    <div className="nav-item">    
        <button className="btn btn-warning my-2 my-sm-0" type="submit"  style={{color:"green",padding :"10px"}}>
        <span style={{color:"black",fontSize:"1.2rem" , fontWeight:"600"}}>Total : </span>
        Rs {totalPrize}
        </button>
    </div>
  )
}

export default TotalPrize;