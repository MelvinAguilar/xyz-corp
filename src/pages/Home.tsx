import React, { useState, useEffect } from "react";
import { getUsers } from "../services/xyzcorp.service";
import UserCard from "../components/cards/UserCard";
import { UserType } from "../types/User";
import { Container } from "../components/Container";
import SearchBar from "../components/SearchBar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  // Fetch data from API
  const [users, setUsers] = useState<UserType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("se esta buscando uno nuevo", users);
    if (users.length > 0) {
      // Filter users by query, by all fields
      if (query) {
        const filteredUsers = users.filter((user: UserType) => {
          return Object.values(user).some((value) => {
            if (typeof value === "string") {
              return value.toLowerCase().includes(query.toLowerCase());
            }
  
            return false;
          });
        });

        setFilteredUsers(filteredUsers);
      } else {
        setFilteredUsers(users);
      }
    }
  }, [query, users]);

  return (
    <main className="text-white py-8">
      <Container>
        <SearchBar />
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </Container>
    </main>
  );
};

export default Home;
