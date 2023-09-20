import React from 'react'

function Placeholders() {
  return (
  <div class="card" aria-hidden="true" style={{width: "18rem", margin:" 20px"}}>
    <div  class="card-img-top" style={{width: "100%",height:"9rem",backgroundColor:"slategray",}}></div>
    <div class="card-body">
        <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
        </h5>
        <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
        </p>
        <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
    </div>
</div>
  )
}

export default Placeholders;

