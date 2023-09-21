import React from 'react'

function NavigationTopAndBottom() {
  return (
    <div  style={{position:"fixed",top:"30vh",zIndex:"2"}}>
          <div class="scroll-btn">
              <a href="#navbar">↑</a>
          </div>
          <div class="scroll-btn">
              <a href="#footer"> ↓</a>
          </div>
    </div>     
  )
}

export default NavigationTopAndBottom