import React from "react";

const Header = (props) => <h1>{props.course}</h1>;
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <p>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  );
};
const Total = (props) => {
  const total = props.parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <p>
      {" "}
      <b> Total of {total} exercises</b>{" "}
    </p>
  );
};

const App = () => {
  const firstCourse = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  const secondCourse = {
    id: 2,
    name: "Nodejs",
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 5,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 6,
      },
    ],
  };

  return (
    <div>
      <Header course={firstCourse.name} />
      <Content parts={firstCourse.parts} />
      <Total parts={firstCourse.parts} />

      <Header course={secondCourse.name} />
      <Content parts={secondCourse.parts} />
      <Total parts={secondCourse.parts} />
    </div>
  );
};

export default App;
