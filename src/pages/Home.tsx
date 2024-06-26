import { useState, useEffect } from "react";
import { getUsers } from "../services/xyzcorp.service";
import UserCard from "../components/cards/UserCard";
import { UserType } from "../types/User";
import { Container } from "../components/Container";
import SearchBar from "../components/SearchBar";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import SectionIntro from "../components/SectionIntro";
import { LinkComponent } from "../components/buttons/Button";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query") || "";

  const [loading, setLoading] = useState(false);

  // Fetch data from API
  const [users, setUsers] = useState<UserType[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
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
    <main className="py-10 text-black dark:text-white">
      <Container className="min-h-[80vh]">
        <div className="flex justify-end">
          <ThemeSwitcher />
        </div>
        <div className="flex flex-wrap items-center lg:flex-nowrap">
          <SectionIntro
            title="Usuarios"
            subtitle="Lista de usuarios"
            generalClassName="!pt-0 w-full"
          />
          <div>
            <LinkComponent href="/add-user" className="w-max">
              Crear usuario
            </LinkComponent>
          </div>
        </div>

        <section className="mb-8 mt-8 flex w-full flex-wrap items-center justify-end gap-8 md:mt-0">
          <p>Buscador</p>
          <SearchBar />
        </section>

        {loading ? (
          <Loading />
        ) : filteredUsers.length > 0 ? (
          <ul className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user, index) => (
              <UserCard key={index} user={user} />
            ))}
          </ul>
        ) : (
          <div className="min-h-inherit flex items-center justify-center">
            <p className="text-center">No se encontraron usuarios</p>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Home;
