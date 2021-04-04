import React from 'react';

/* 
const Title = ({course}) => <h1>{}
*/
const Title = ({course}) => <h1>{course}</h1>;
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
     <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [ 
    { 
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]
}  
  return (
    <div>
     <Title course = {course.name} />
     <Content parts={course.parts}/>
     <Total parts={course.parts}/>
    </div>
  );
}

 export default App;