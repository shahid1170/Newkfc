import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
// import "./mystyle.css"

// import {result} from "./mylib/data"
import { product } from './data/products'

function App() {

  return (
    <div className="banner-image" style={{margintop:"50px;"}}>
     <img src="/bg.png" className="card-img-top" alt="..."/>
     
    <hr />   
    
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {product.map(product => (
        <div className="col" key={product.id}>
          <div className="card" >
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}
                {" "}<span className="badge text-bg-primary">Rs {product.price}</span></h5>
              <p className="card-text">{product.desc}</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
              
              <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
  <symbol id="check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
  </svg>

            </div>
          </div>
        </div>

      ))}

    </div>
    </div> 
    

  )
}

export default App;
