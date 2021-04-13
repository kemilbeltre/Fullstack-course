import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);
const Votes = ({handleClick}) => (
  <div>
    has {handleClick} votes
  </div>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Every big computing disaster has come from taking too many ideas and putting them in one place.',
    'Conceptual integrity is the most important consideration in system design.',
    'No matter what the problem is, its always a people problem.',
    'Hiring people to write code to sell is not the same as hiring people to design and build durable, usable, dependable software.'
  ]

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(0);

  const handleClick = () => {
    if (selected <= anecdotes.length - 2) setSelected(selected + 1);
  }
  const handleVoteClick = () => {
    setVoted(voted + 1);
  }
  const handleBackClick = () => {
    if (selected > 0) setSelected(selected - 1);
  }     

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br></br>
      <Votes handleClick = {voted}/>
      <Button handleClick={handleBackClick} text= 'go back' />
      <Button handleClick={handleVoteClick} text= 'vote' />
      <Button handleClick={handleClick} text= 'next anecdote' />

      <h1>Anecdote with most votes</h1>
      <p>TODO</p>
    </div>
  )
}

export default App;