import { useState } from "react"


function Count() {

  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1)
  }


  return (
    <div>
      <h3> {count} </h3>

      <button onClick={handleCount} >Counter</button>
    </div>
  )
}

export default Count