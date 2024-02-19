const Option = ({ option, currentIndex, optionClick, answer, selectOption }) => {

    let clicked = selectOption !== null && currentIndex === answer;
    let isCorrect = selectOption === currentIndex && selectOption !== answer
    return (
        <div className="option">
            <p className={clicked ? (
                "green"
            ) : isCorrect ? ("red")
                : "white"}
                onClick={() => optionClick(currentIndex)}>{option}</p>
        </div>
    )
}

export default Option