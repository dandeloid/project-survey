import React from 'react'

const ThirdQuestion = ({ ageInput, onAgeInputChange, onStepChange, onStepChangeBack }) => {
    return (
        <form>
            <label htmlFor="ageInput">Type your age</label>
            <input 
                className="input-field"
                id="ageInput"
                type="text"
                value={ageInput}
                onChange={onAgeInputChange}
            />
            <img className="progress" src="./assets/q3.svg" alt="question-step-3"></img>
            <div className="buttons">
                <button onClick={onStepChangeBack}>&#9669; Previous</button>
                <button disabled={ageInput === ''} onClick={onStepChange}>Next &#9659;</button>
            </div>
        </form>
    )
}

export default ThirdQuestion