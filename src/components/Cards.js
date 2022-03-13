import React from "react"

function services() {
  return (
    <div className="Cards">
      <div className="grid">
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1494537449588-7f07cede2556?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
            alt=""
            className="card-img"
          />
          <div className="card">
            <div className="card-content">
              <h1 className="card-title">Gift Wrap</h1>
              <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button className="card-btn">
                vist <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1549921288-75cb06d64ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
            alt=""
            className="card-img"
          />
          <div className="card">
            <div className="card-content">
              <h1 className="card-title">FREE DELIVERY</h1>
              <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button className="card-btn">
                vist <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="grid-item">
          <img
            src="https://images.unsplash.com/photo-1596435163709-b77cb27e49b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
            alt=""
            className="card-img"
          />
          <div className="card">
            <div className="card-content">
              <h1 className="card-title">PICK UP SERVICE</h1>
              <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button className="card-btn">
                vist <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services
