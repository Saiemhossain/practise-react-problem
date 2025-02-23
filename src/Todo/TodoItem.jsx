/* eslint-disable react/prop-types */


function TodoItem({text, onDelete}) {
  return (
    <div>
      <h2> {text} </h2>
      <button onClick={onDelete} > Delete </button>
    </div>
  )
}

export default TodoItem