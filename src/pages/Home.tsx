import React from 'react'
import { getUsers } from '../services/xyzcorp.service'

const Home = () => {
  // Fetch data from API
  getUsers().then((data) => {
    console.log(data)
  })


  return (
    <div className='text-red-600'>
      Hello word
    </div>
  )
}

export default Home
