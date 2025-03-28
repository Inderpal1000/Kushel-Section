import React from 'react';
import "./Progress.css";

const Progress = () => {
    return (
        <div className='progress-outer-container'>
            <div className="progress-inner-container">
                <h2 className='progress-heading'>Kushel Digi Solutions Work Process</h2>
                <h3 className='progress-sm-heading'>Sneak Peek Behind The Scenes of Our Development Services.</h3>

                <div className="progress-toggle-btn-div">
                    <h1 className='progress-company-name'>HYBRID</h1>
                    <input type="checkbox" id="switch" />
                    <label for="switch">Toggle</label>
                    <h1 className='progress-company-name'>AGILE</h1>
                </div>


                <div className="phases">
                    <div id='phase1' class="button"></div>
                    <div id='phase1Name'>
                            <span className=''>01</span>
                            <span className=''>Research</span>
                        </div>
                   
                    <div id='phase2' class="button"></div>
                    <div id='phase3' class="button"></div>
                    <div id='phase4' class="button"></div>
                    <div id='phase5' class="button"></div>
                    <div id='phase6' class="button"></div>
                    <div id='phase7' class="button"></div>
                    <div id='phase8' class="button"></div>
                    <div id='phase9' class="button"></div>
                    <div id='phase10' class="button"></div>
                    <div id='phase11' class="button"></div>
                </div>

            </div>
        </div>
    )
}

export default Progress