import React from 'react'
import { useParams } from "react-router-dom";
import { Container } from '../components/Container';

const UserInfo = () => {
    const { id } = useParams();

  return (
    <Container>
        <h1>User Info</h1>
        <p>User ID: {id}</p>
    </Container>
  )
}

export default UserInfo
