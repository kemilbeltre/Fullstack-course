import React from "react";
import {courses, Header, Content, Total} from "./Courses";

const App = () => {
  return (
    <div>
      <Header course={courses[0].name} />
      <Content parts={courses[0].parts} />
      <Total parts={courses[0].parts} />
      <Header course={courses[1].name} />
      <Content parts={courses[1].parts} />
      <Total parts={courses[1].parts} />
    </div>
  );
};

export default App;
