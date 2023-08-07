import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  const [data, setdata] = useState()

  async function getAdvice () {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    console.log(data.slip.advice)
    setdata(data.slip.advice)
    setCount(count + 1)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <>
      <div className='card'>

        <Message count={count} />
        <button onClick={getAdvice}>Advice</button>
        <div>
          <h1>{data}</h1>
        </div>
      </div>
    </>
  )
}

function Message (props) {
  return <p>You have got {props.count}</p>
}

export default App
