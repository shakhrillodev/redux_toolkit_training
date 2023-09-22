import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0)

  const Plus = ()=>{
    setCount(c =>c+1)
  }

  const Minus = ()=>{
    setCount(c =>c-1)
  }

  const Reset = ()=>{
    setCount(0)
  }


  return (
    <div className="container p-5" >
      <p className="fs-3" >Count: {count}</p>
      <div className="btn-group">
        <div className="btn btn-primary" onClick={Plus} >Plus</div>
        <div className="btn btn-secondary" onClick={Minus} >Minus</div>
        <div className="btn btn-danger"  onClick={Reset}  >Reset</div>
      </div>
    </div>
  )
}

export default App
