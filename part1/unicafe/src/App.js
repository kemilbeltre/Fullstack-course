import React, { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral;
  const average = total / 3;
  const positive = good / total * 100;

  const handleClick = () => {
        setGood(good + 1);
    }
    const handleClick2 = () => {
        setNeutral(neutral + 1);
    }
    const handleClick3 = () => {
        setBad(bad + 1);
    }

  return (
    <div>
        <h1>give feedback</h1>
        <button onClick={handleClick}>good</button>
        <button onClick={handleClick2}>neutral</button>
        <button onClick={handleClick3}>bad</button>

        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {total} </p>
        <p>Average: {average} </p>
        <p>Positive: {positive}% </p>
     </div>
  )
}

export default App;