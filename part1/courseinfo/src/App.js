import React from 'react';

/* 
const Title = ({course}) => <h1>{}
*/
const Header = ({course}) => <h1>{course}</h1>;
const Content = ({parts}) => {
  return (
    <div>
     {parts.map((part) => (
     <p>{part.name} {part.exercises}</p>
      ))}
    </div>
  );
}
const Total = ({parts}) => {
  return (
    <div>
     <p><b> Total of {parts[0].exercises + parts[1].exercises + parts[2].exercises} exercises </b></p>
    </div>
  );
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <div>
     <Header course = {course.name} />
     <Content parts={course.parts}/>
     <Total parts={course.parts}/>
    </div>
  );
}

 export default App;