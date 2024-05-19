import React, { useState, useEffect } from "react";
import { getUsers } from "../services/xyzcorp.service";
import UserCard from "../components/cards/UserCard";
import { UserType } from "../types/User";
import { Container } from "../components/Container";

const Home = () => {
  // Fetch data from API
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <main className="text-white py-8">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <UserCard key={index} user={user} index={index} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Home;
