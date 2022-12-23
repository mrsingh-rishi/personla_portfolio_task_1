import React from 'react'
import "./intro.css"
import boy from "../../images/boy.png"
export default function intro() {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, I am</h2>
                <h1 className='i-name'>Rishi Singh</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item i-mobile-student">
                            Student
                        </div>
                        <div className="i-title-item i-mobile-web">
                            Web Developer
                        </div>
                        <div className="i-title-item i-mobile-prog">
                            Programmer
                        </div>
                        <div className="i-title-item">
                            Android Developer
                        </div>
                    </div>
                </div>
                <p className="i-desc">
                    I develop Websites and Android App.
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={boy} className='i-img' alt="" />
        </div>
    </div>
  )
}
