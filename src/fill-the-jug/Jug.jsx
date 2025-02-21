/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function Jug({fillBy}) {
  return (
    <div className="jug">
      <div className="water"style={{height : `${fillBy}%`}} >
        <span className="filled-by"  > {Math.round(fillBy)}% </span>
      </div>
    </div>
  )
}


