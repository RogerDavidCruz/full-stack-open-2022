//Exercise 1.1 - 1.5: Course Information, Steps 1-5 combined
//https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2

import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part part= {parts[0]} />
      <Part part= {parts[1]} />
      <Part part= {parts[2]} />
    </div>
  )
}

const Total = ({parts}) => {
  return (
  <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
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
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
