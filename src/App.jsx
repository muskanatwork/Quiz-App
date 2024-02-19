import { useState } from "react"
import Question from "./Components/question"
import Option from "./Components/Option"
import data from "./data.json"
import "./CSS/App.css"
function App() {
  const [count, setCount] = useState(0)
  const [selectOption, setSelectOption] = useState(null)
  let correctAnswer = data[count].answer;

  function handleClickButton() {
    if (count === 3) {
      setCount(0)
    }
    else {
      setCount(count + 1)
    }
    setSelectOption(null)
  }

  function optionClick(currentIndex) {
    setSelectOption(currentIndex)
  }
  return (
    <div className="container">
      <h1 className="heading">Quiz</h1>
      <Question question={data[count].question} />

      {data[count].options.map((content, index) => {
        return (<Option key={index}
          option={content}
          currentIndex={index}
          optionClick={optionClick}
          answer={correctAnswer}
          selectOption={selectOption} />
        )
      })}
      <button onClick={handleClickButton}>Next</button>
    </div>
  )
}

export default App
