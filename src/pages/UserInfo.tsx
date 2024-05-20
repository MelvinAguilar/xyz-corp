import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { getUser, getPosts } from "../services/xyzcorp.service";
import { PostType } from "../types/Post";
import { UserType } from "../types/User";
import { getImageUrl } from "../lib/utils";
import SectionIntro from "../components/SectionIntro";

const UserInfo = () => {
  const { id } = useParams();
  // Fetch data from API
  const [user, setUser] = useState<UserType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser(Number(id));
      setUser(userData);

      if (userData) {
        const postData = await getPosts(userData.id);
        setPosts(postData);
      }
    };

    fetchData();
  }, [id]);

  if (!user) {
    return (
      <Container as="main" className="py-8 text-white">
        <h1>User Info</h1>
        <p>User not found</p>
      </Container>
    );
  }

  const urlimage = getImageUrl(user);

  return (
    <Container as="main" className="py-8 text-white">
      <SectionIntro
        title="Información del usuario"
        subtitle="Detalles del usuario y sus publicaciones"
        generalClassName="!pt-0"
      />
      <div className="bg-secondary/50 grid gap-8 rounded-2xl border border-[#363749]/[.9] p-8 px-4 py-6 sm:grid-cols-[auto,1fr]">
        <img
          className="size-32 rounded-full border-2 border-[#03BFCB] p-2"
          src={urlimage}
          alt="user"
        />
        <section>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="mb-4 text-sm text-[#A1A1AA]">{user.email}</p>
          {user.status.toLowerCase() === "active" ? (
            <>
              <span className="mr-1 text-2xl text-green-500">•</span>
              Active
            </>
          ) : (
            <>
              <span className="mr-1 text-2xl text-red-500">•</span>
              Inactive
            </>
          )}
          <p className="text-[#A1A1AA]">
            {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
          </p>
        </section>
      </div>
      <SectionIntro
        title="Publicaciones"
        subtitle="Publicaciones del usuario"
        generalClassName="!pt-16"
      />

      {posts.length > 0 ? (
        <ul className="grid gap-8">
          {posts.map((post, index) => (
            <li
              key={index}
              className="bg-secondary/50 rounded-2xl border border-[#363749]/[.9] p-8"
            >
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-[#A14A1AA]">{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No posts found</p>
      )}
    </Container>
  );
};

export default UserInfo;
