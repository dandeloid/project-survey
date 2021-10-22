import React from 'react'

const FifthQuestion = ({ ratingInput, onRatingInputChange, onStepChange, onStepChangeBack }) => {
    return (
        <form>
            Rate this survey
            <label>
                <input 
                    type="radio"
                    value="1"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "1"}
                />
                1
            </label>
            <label>
                <input 
                    type="radio"
                    value="2"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "2"}
                />
                2
            </label>
            <label>
                <input 
                    type="radio"
                    value="3"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "3"}
                />
                3
            </label>
            <label>
                <input 
                    type="radio"
                    value="4"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "4"}
                />
                4
            </label>
            <label>
                <input 
                    type="radio"
                    value="5"
                    onChange={onRatingInputChange}
                    checked={ratingInput === "5"}
                />
                5
            </label>
            <img src="./assets/q5.svg" alt="question-step-5"></img>
            <div className="buttons">
                <button onClick={onStepChangeBack}>&#9669; Previous Question</button>
                <button disabled={ratingInput === ''} onClick={onStepChange}>Next Question &#9659;</button>
            </div>
        </form>
    )
}

export default FifthQuestion