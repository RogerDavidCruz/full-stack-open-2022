//Exercise 1.6 - 1.12: Unicafe, Steps 1-6 combined
//https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>;

const Statistic = ({text, counter}) => {
  <tr>
    <td>{text}</td>
    <td>{counter}</td>
  </tr>
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0){
    return (
      <p>No Feedback given</p>
    )
  }else{
    return (
      <div>
        {
          <table>
            <tbody>
              <Statistic text='good' counter={good}/>
              <Statistic text='neutral' counter={neutral}/>
              <Statistic text='bad' counter={bad}/>
              <Statistic text='sum' counter={good + neutral + bad}/>
              <Statistic text = "average" counter = {(good + (bad * -1)) / total}/>
              <Statistic text = "positive" counter = {`${(good / total) * 100}%`}/>
            </tbody>
          </table>
        }
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const title = "give feedback"
  const subTitle = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={title}></Header>
      <Button text='Good' handleClick={()=> setGood(good + 1)}></Button>
      <Button text='Neutral' handleClick={()=> setNeutral(neutral + 1)}></Button>
      <Button text='Bad' handleClick={()=> setBad(bad + 1)}></Button>
      
      <Header title={subTitle}></Header>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
