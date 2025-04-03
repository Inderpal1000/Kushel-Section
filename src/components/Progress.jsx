'use client'

import React, { useState ,useRef, useEffect} from 'react';
import "./Progress.css";

const Progress = () => {

    const [isSwitch, setIsSwitch] = useState(false);
    const phasesRef = useRef(null);

    const handleSwitchChange = () => {
        setIsSwitch(!isSwitch);
    }

    useEffect(() => {
        if (phasesRef.current) {
            setTimeout(() => {
                phasesRef.current.scrollLeft = 0;
            }, 50); 
        }
    }, [isSwitch]);

    return (
        <div className='progress-outer-container'>
            <div className="progress-inner-container">
                <h2 className='progress-heading'>Kushel Digi Solutions Work Process</h2>
                <h3 className='progress-sm-heading'>Sneak Peek Behind The Scenes of Our Development Services.</h3>

                <div className="progress-toggle-btn-div">
                    <h1 className={`progress-company-name first-copmpany ${isSwitch ? 'textOpacity' : ''}`}>HYBRID</h1>
                    <input onChange={() => handleSwitchChange()} type="checkbox" id="switch" />
                    <label id='switchLabel' htmlFor="switch">Toggle</label>
                    <h1 className={`progress-company-name second-copmpany ${!isSwitch ? 'textOpacity' : ''}`}>AGILE</h1>
                </div>

                <div className="phases-wrapper">
                <div key={isSwitch ? "agile" : "hybrid"} ref={phasesRef} className="phases">
                {
                    !isSwitch ? (
                        <>
                        <div id='phase1' className="button"></div>
                            <div id='phase1Name'>
                                <span className=''>01</span>
                                <span className=''>Research</span>
                            </div>

                            <div id='phase2' className="button"></div>
                            <div id='phase2Name'>
                                <span className=''>02</span>
                                <span className=''>Wireframe</span>
                            </div>

                            <div id='phase3' className="button"></div>
                            <div id='phase3Name'>
                                <span className=''>Brand</span>
                            </div>


                            <div id='phase4' className="button"></div>
                            <div id='phase4Name'>
                                <span className=''>Visual</span>
                            </div>


                            <div id='phase5' className="button"></div>
                            <div id='phase5Name'>
                                <span className=''>03</span>
                                <span className=''>Designing</span>
                            </div>

                            <div id='phase6' className="button"></div>
                            <div id='phase6Name'>
                                <span className=''>04</span>
                                <span className=''>Development</span>
                            </div>


                            <div id='phase7' className="button"></div>
                            <div id='phase7Name'>
                                <span className=''>05</span>
                                <span className=''>Testing</span>
                            </div>

                            <div id='phase8' className="button"></div>
                            <div id='phase8Name'>
                                <span className=''>Validation</span>
                            </div>


                            <div id='phase9' className="button"></div>
                            <div id='phase9Name'>
                                <span className=''>User Acceptance Testing</span>
                            </div>


                            <div id='phase10' className="button"></div>
                            <div id='phase10Name'>
                                <span className=''>06</span>
                                <span className=''>Deployment</span>
                            </div>
                            <div id='phase11' className="button"></div>
                            <div id='phase11Name'>
                                <span className=''>07</span>
                                <span className=''>Maintenance</span>
                            </div>
                        </>
                    ) : (
                       <>
                       <div id='phase1' className="button"></div>
                            <div id='phase1Name'>
                                <span className=''>01</span>
                                <span className=''>Ideation</span>
                            </div>

                            <div id='phase2' className="button"></div>
                            <div id='phase2Name'>
                                <span className=''>02</span>
                                <span className=''>Sprint Teams</span>
                            </div>

                            <div id='phase3' className="button"></div>
                            <div id='phase3Name' className='agile3phase'>
                                <span className=''>Project Setup</span>
                            </div>


                            <div id='phase4' className="button"></div>
                            <div id='phase4Name'>
                                <span className=''>Initiation</span>
                            </div>


                            <div id='phase5' className="button"></div>
                            <div id='phase5Name'>
                                <span className=''>03</span>
                                <span className=''>Sprint Planning</span>
                            </div>

                            <div id='phase6' className="button"></div>
                            <div id='phase6Name'>
                                <span className=''>04</span>
                                <span className=''>Design & Development</span>
                            </div>


                            <div id='phase7' className="button"></div>
                            <div id='phase7Name' className='agile7phase'>
                                <span className=''>05</span>
                                <span className=''>Testing & Iteration</span>
                            </div>

                            <div id='phase8' className="button"></div>
                            <div id='phase8Name' className='agile8phase'>
                                <span className=''>Sprint Completed</span>
                            </div>


                            <div id='phase9' className="button"></div>
                            <div id='phase9Name' className='agile9phase'>
                                <span className=''>Release</span>
                            </div>


                            <div id='phase10' className="button"></div>
                            <div id='phase10Name' className='agile10phase'>
                                <span className=''>06</span>
                                <span className=''>Production</span>
                            </div>
                            <div id='phase11' className="button"></div>
                            <div id='phase11Name' className='agile11phase'>
                                <span className=''>07</span>
                                <span className=''>Retirement</span>
                            </div>
                       </>
                    )
                }
                </div> 
                </div>

            </div>
        </div>
    )
}

export default Progress