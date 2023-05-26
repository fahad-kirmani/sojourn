import React from 'react'
import logo from "../images/logo.png"

export const Footer = () => {
  return (<>
    <div className='foot'>
    <div className="call"><h3>Call Us Now To Book!</h3>
    <h3><i className="fa-solid fa-phone"></i> +91 9532782144</h3>
    </div>
    <div className="logo"><img src={logo} alt="logo" /></div>
    <p className="text">Shail's Sojourn The Homestay (Vasundhra)<br/>
    Mallital, Naninital</p>
    </div>
    </>
  )
}
