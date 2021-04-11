import React, { useState } from 'react'

const Button = (props) => ( 
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => (
  <table>
    <tr>
      <td>{props.text} {props.value}</td>
      </tr>
  </table>    
);

const WarningNotUse = () => <p>No feedback given</p>

const Header = props => <h1>{props.text}</h1>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + bad + neutral;

  const setToGood= newGood => {
    setGood(newGood + 1);
  }

  const setToNeutral= newNeutral => {
    setNeutral(newNeutral + 1);
  }

  const setToBad= newBad => {
    setBad(newBad + 1);
  }

  return (
    <div>
        <Header text={"Give Feedback"}/>
  
        <Button handleClick={() => setToGood(good)} text="Good" />
        <Button handleClick={() => setToNeutral(neutral)} text="Neutral" />
        <Button handleClick={() => setToBad(bad)} text="Bad" />

        <Header text={"Statistics"}/>
          {(total === 0)
          ? <WarningNotUse/>
          : 
        <div>
          <Statistics text={"Good:"} value={good}/> 
          <Statistics text={"Neutral:"} value={neutral}/> 
          <Statistics text={"Bad:"} value={bad}/> 
          <Statistics text={"Total:"} value={total}/> 
          <Statistics text={"Average:"} value={total / 3}/> 
          <Statistics text={"Positive:"} value={good / total * 100}/>
        </div>
          }

     </div>
 );
}

export default App;