import React from 'react'
import ReactDOM from 'react-dom'

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

  /* const course = 'Half Stack application development'
  const parts = [
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
  */
  /*  
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
    */

    /*
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    */

  
  const Header = (props) => {
    console.log(props)
    return(
        <h1>{props.course.name}</h1>
    )}

    const Part = (props) => {
      console.log(props)
      return(
      <p>{props.name} {props.exercises}</p>
      )
        }

    const Content = (props) => {
      console.log(props)
      return(
            <div>
            <Part name={course.parts[0].name} exercises={course.parts[0].exercises}/>
            <Part name={course.parts[1].name} exercises={course.parts[1].exercises}/>
            <Part name={course.parts[2].name} exercises={course.parts[2].exercises}/>
            </div>
        )
    }

    const Total = (props) => {
      console.log(props)  
      return(
            <>
            <p>Number of exercises {props.total}</p>
            </>
        )
    }
 

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))