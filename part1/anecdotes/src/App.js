import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
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
  ];

  const points = new Uint8Array(anecdotes.length);

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(points);
  
  const handleVoteClick = () => {
    const points = [...voted];
    points[selected]++;
    setVoted(points);
  };
  const handleNextClick = () => {
    if (selected < anecdotes.length - 1) setSelected(selected + 1);
  };
  const handleBackClick = () => {
    if (selected > 0) setSelected(selected - 1);
  };

  const max = Math.max(...voted);

  /**
   *  iMax - the best index so far (the index of the max element so far, on the first iteration iMax = 0 because the second argument to reduce() is 0, we can't omit the second argument to reduce() in our case)
     x - the currently tested element from the array
     i - the currently tested index
     voted - our array ([0, 0, 0...])
  */
  const indexOfMaxValue = voted.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p> {anecdotes[selected]} </p>
        <p>This anectodes has: <strong> {voted[selected]} </strong> votes</p>
        <Button handleClick={handleBackClick} text= 'go back' />
        <Button handleClick={handleVoteClick} text= 'vote' />
        <Button handleClick={handleNextClick} text= 'next anecdote' />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p> {anecdotes[indexOfMaxValue]} </p>
        <p>This anecdote has <strong>{max}</strong> votes</p>
      </div>
    </div>
  );
};

export default App;