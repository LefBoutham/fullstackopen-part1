import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
	return (
		<button onClick={props.handleClick}>{props.text}</button>
	)
}

  const StatRow = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
  
  const Statistics = ({data}) => {
    const { good, neutral, bad } = data
    const totalFeedbacks = good + bad + neutral
    const averageFeedback = (good - bad) / (good + neutral + bad)
    const positiveFeedbacks = 100 * (good / (good + neutral + bad)) + ' %'
  
    if ( totalFeedbacks !== 0 ) {
      return (
        <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatRow text='Good' value={good} />
            <StatRow text='Neutral' value={neutral} />
            <StatRow text='Bad' value={bad} />
            <StatRow text='Total' value={good + neutral + bad} />
            <StatRow text='Average' value={averageFeedback} />
            <StatRow text='Positive' value={positiveFeedbacks} />
          </tbody>
        </table>
        </>
      )
    } 
      return (
        <>
        <p>No feedback given</p>
        </>
      )
    
  }

  

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (newValue) => () => {
	  setGood(newValue)
  }
  const setNeutralValue = (newValue) => () => {
	  setNeutral(newValue)
  }
  const setBadValue = (newValue) => () => {
	  setBad(newValue)
  }

  const allFeedback = {
	good: good,
	neutral: neutral,
	bad: bad
  }

  return (
    <div>
		<h1>Give Feedback</h1>
		<Button handleClick={setGoodValue(good + 1)} text='good' />
		<Button handleClick={setNeutralValue(neutral + 1)} text='neural' />
		<Button handleClick={setBadValue(bad + 1)} text='bad' />
		<Statistics data={allFeedback}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))