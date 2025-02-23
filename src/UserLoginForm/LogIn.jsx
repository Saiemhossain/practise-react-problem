/* eslint-disable no-unused-vars */

import { useState } from 'react';

function LogIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
      })
      if (res.ok) {
        const data = await res.json()
        console.log('Loging successful', data);
      } else {
        const errorData = await res.json()
        console.log('login failed', errorData);
      }
    } catch (error) {
      setError('an error happen')
    } finally {
      setLoading(false)
    }


   }


  return (
    <form onSubmit={handleSubmit}>
      <input type='email' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      <input type='password' value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
      <button type='submit' >Submit</button>
 </form>
  )
}

export default LogIn