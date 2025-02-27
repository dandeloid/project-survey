import React from 'react'

const SixthQuestion = ({ sliderInput, onSliderInputChange, onStepChange, onStepChangeBack }) => {
    return (
        <form>
            <label htmlFor="sliderInput">How much do you slide?</label>
            <input className="slider" type="range" min="0" max="100" value={sliderInput} onChange={onSliderInputChange}/>
            <p className="slider-p">{sliderInput}%</p>
            <img className="progress" src="./assets/q6.svg" alt="question-step-6"></img>
            <div className="buttons">
                <button onClick={onStepChangeBack}>&#9669; Previous</button>
                <button disabled={sliderInput === ''} onClick={onStepChange}>Submit!</button>
            </div>
        </form>
    )
}

export default SixthQuestion