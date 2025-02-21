/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"


function UserList() {

  
  const [users, setUsers] = useState([{
    id: 1,
    name: 'Saim',
    address : 'Dhaka'
  }])

  const changeUserName = (id) => {
    const newUser = users.map((user) => user.id === id ? { ...user, name: 'Karim' } : user)
    
    setUsers(newUser)
  }

  const addUser = () => {
    const newUser = {
      id:2,
      name: 'Abir',
      address : 'usa'
    }

    setUsers([...users, newUser])
  }


  return (
    <div>
      {
        users.map((user) => (
          <><div key={user.id}>
            <h2> {user.name} lives in {user.address} </h2>
          </div>
            <button onClick={(id) => changeUserName(user.id)}>ChageName </button>
          <button onClick={(id)=> addUser(user.id)} > AddUser </button>
          </>
        ))
      }
    </div>
  )
}

export default UserList