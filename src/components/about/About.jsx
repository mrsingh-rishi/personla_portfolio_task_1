import React from 'react'
import "./about.css"
import mid from "../../images/img-mid-crop.png"
// import cpp from "../../images/cpp.png"
// import java from "../../images/java.png"
// import html from "../../images/html5.png"
// import css from "../../images/css.png"
// import js from "../../images/javascript.png"
// import rt from "../../images/react.png"
// import nodejs from "../../images/nodejs.png"
export default function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg">
                
            </div>
            <div className="a-card">
                <img src={mid} className="a-img" alt="" />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                Hi, I am Rishi Singh and I am a pre-final year Student at GL Bajaj Group of Institutions, Mathura.
            </p>
            <p className='a-desc'>
                I am a Self taught Programmer <br></br>
                My Skills are :- <br />
                <ul>
                    <li> JAVA, C++, C(beginner) </li>
                    <li> HTML, CSS, JavaScript </li>
                    <li> ReactJs, XML(beginner) </li>
                </ul>
            </p>
            <br />
            <br />
            <h3 className='a-title a-mobile'>Achievements</h3>
            <p className='a-sub'>
                <ul>
                    <li>
                        Participated in HacktoberFest 2022
                    </li>
                    <li>
                        Earn some <a className='a-link' target="-blank" href="https://www.cloudskillsboost.google/public_profiles/18099c67-d1d3-4af5-81dc-1df68fa1ca6e">Google Cloud QuickLabs</a> badges.
                    </li>
                </ul>
                
                
            </p>
            {/* <h2>Skills</h2>
            <div className="a-skills">
                <img src={cpp} className="a-skill-img" alt="" />
                <h4>C++</h4>
            </div>
            <div className="a-skills">
                <img src={java} className="a-skill-img" alt="" />
                <h4>Java</h4>
            </div>
            <div className="a-skills">
                <img src={html} className="a-skill-img" alt="" />
                <h4>HTML</h4>
            </div>
            <div className="a-skills">
                <img src={css} className="a-skill-img" alt="" />
                <h4>CSS</h4>
            </div>
            <div className="a-skills">
                <img src={js} className="a-skill-img" alt="" />
                <h4>JavaScript</h4>
            </div>
            <div className="a-skills">
                <img src={rt} className="a-skill-img" alt="" />
                <h4>ReactJs</h4>
            </div> */}
        </div>
    </div>
  )
}
