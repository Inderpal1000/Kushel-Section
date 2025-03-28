import React from 'react';
import "./Animate.css";

const Animate = () => {
  return (
    <>
     <section className="work--process">
        <div className="container">
          <div className="title--group without--button center--text pb--64">
            <div className="title--content">
              <h3 className="title evReveal" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', opacity: 1, visibility: 'inherit'}}>EvinceDev’s Work Process</h3>
              <p className="details text--md evReveal" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0px, 0px)', opacity: 1, visibility: 'inherit'}}>Sneak Peek Behind The Scenes of Our Development Services.</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="switch--group width--100 flex justify-content-center pb--64">
              <input id="onOff--switch" type="checkbox" className="switch--input" />
              <label htmlFor="onOff--switch" className="switch">
                <span className="switch--label">Hybrid</span>
                <span className="switch--handle" />
                <span className="switch--label">Agile</span>
              </label>
            </div>
            <div id="switchOn">
              <div className="process-wrapper width--100 start">
                <div className="process-container">
                  <div className="process-wrapper start">
                    <ul className="flex flex-wrap">
                      <li style={{delay: '0s'}}>
                        <span>01</span>
                        <label>Research</label>
                      </li>
                      <li style={{delay: '1s'}}>
                        <span>02</span>
                        <label>Wireframe</label>
                      </li>
                      <li style={{delay: '2s'}}>
                      </li>
                      <li style={{delay: '3s'}}>
                        <label>Brand</label>
                        <label>Visual</label>
                      </li>
                      <li style={{delay: '4s'}}>
                        <span>03</span>
                        <label>Designing</label>
                      </li>
                      <li style={{delay: '5s'}}>
                        <span>04</span>
                        <label>Development</label>
                      </li>
                      <li style={{delay: '6s'}}>
                        <span>05</span>
                        <label>Testing</label>
                      </li>
                      <li style={{delay: '7s'}}>
                      </li>
                      <li style={{delay: '8s'}}>
                        <label>Validation</label>
                        <label>User Acceptance Testing</label>
                      </li>
                      <li style={{delay: '9s'}}>
                        <span>06</span>
                        <label>Deployment</label>
                      </li>
                      <li style={{delay: '10s'}}>
                        <span>07</span>
                        <label>Maintenance</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="switchOff" style={{display: 'none'}}>
              <div className="process-wrapper width--100 start">
                <div className="process-container">
                  <div className="process-wrapper start">
                    <ul className="flex flex-wrap">
                      <li style={{delay: '0s'}}>
                        <span>01</span>
                        <label>Ideation</label>
                      </li>
                      <li style={{delay: '1s'}}>
                        <span>02</span>
                        <label>Sprint Teams</label>
                      </li>
                      <li style={{delay: '2s'}}>
                      </li>
                      <li style={{delay: '3s'}}>
                        <label>Project Setup</label>
                        <label>Initiation</label>
                      </li>
                      <li style={{delay: '4s'}}>
                        <span>03</span>
                        <label>Sprint Planning</label>
                      </li>
                      <li style={{delay: '5s'}}>
                        <span>04</span>
                        <label>Design &amp; Development</label>
                      </li>
                      <li style={{delay: '6s'}}>
                        <span>05</span>
                        <label>Testing &amp; Iteration</label>
                      </li>
                      <li style={{delay: '7s'}}>
                      </li>
                      <li style={{delay: '8s'}}>
                        <label>Sprint Completed</label>
                        <label>Release</label>
                      </li>
                      <li style={{delay: '9s'}}>
                        <span>06</span>
                        <label>Production</label>
                      </li>
                      <li style={{delay: '10s'}}>
                        <span>07</span>
                        <label>Retirement</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Animate