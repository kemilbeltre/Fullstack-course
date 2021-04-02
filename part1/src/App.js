import React from 'react';

/* 
const Title = ({course}) => <h1>{}
*/
const Title = ({course}) => <h1>{course}</h1>;
const Content = (part) => { 
return (<p>{part.name} {part.exercises}</p>
  );
}
const Total = (part) => <p>Number of exercise {part.exercises}</p>;

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
     <Title course = {course} />
     <Content name = {part1.name} exercise = {part1.exercises}/>
     <Content name = {part2.name} exercise = {part2.exercises}/>
     <Content name = {part3.name} exercise = {part3.exercises}/>
     <Total exercises = {part1.exercises + part2.exercises + part3.exercises}/>

    </div>
  );
}

 export default App;