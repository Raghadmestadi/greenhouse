import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
    <div className="Footer">
      <div>
        <footer>
          <div className="social">
            <FontAwesomeIcon icon={["fab", "facebook"]} />
            <FontAwesomeIcon icon={["fab", "instagram"]} />
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </div>
          <div className="fc">
            <p className="copyright">©2021</p>
            <div className="logoF">
              <p>Green</p>
              <img src="/images/leaf.svg" alt="leaf" className="leaf2"></img>
              <p>House</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
