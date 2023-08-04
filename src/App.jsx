import { useState } from 'react'
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

  return (
    <>
      <div className='card'>

        <p>
          You have got {count}
        </p>
        <button onClick={getAdvice}>Advice</button>
        <div><h1>{data}</h1></div>
      </div>
    </>
  )
}

export default App
