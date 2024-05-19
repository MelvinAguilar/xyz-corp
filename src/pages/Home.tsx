import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/xyzcorp.service'

const Home = () => {
  // Fetch data from API
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
      console.log(data);
    };
    
    fetchData();
  }, []);

  return (
    <div className='text-red-600'>
      Hello word
    </div>
  )
}

export default Home
