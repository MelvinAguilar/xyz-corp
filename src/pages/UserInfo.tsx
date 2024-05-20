import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { getUser, getPosts } from "../services/xyzcorp.service";
import { PostType } from "../types/Post";
import { UserType } from "../types/User";
import { getImageUrl } from "../lib/utils";
import SectionIntro from "../components/SectionIntro";
import Loading from "../components/Loading";
import PostCard from "../components/cards/PostCard";
import { LinkComponent } from "../components/buttons/Button";
import BackButton from "../components/buttons/BackButton";

const UserInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  // Fetch data from API
  const [user, setUser] = useState<UserType | null>(null);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const userData = await getUser(Number(id));
      setUser(userData);

      if (userData) {
        const postData = await getPosts(userData.id);
        setPosts(postData);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

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
    <Container as="main" className="py-10 text-white">
      <BackButton title="Volver al listado de usuarios" />
      <SectionIntro
        title="Información del usuario"
        subtitle="Detalles del usuario y sus publicaciones"
        generalClassName="!pt-0"
      />
      <div className="bg-secondary/50 grid gap-8 rounded-2xl border border-[#363749]/[.9] p-8 px-8 py-6 sm:grid-cols-[auto,1fr]">
        <img
          className="size-32 rounded-full border-2 border-[#03BFCB] p-2"
          src={urlimage}
          alt="user"
        />
        <section className="flex gap-8 justify-between flex-wrap">
          <div>
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
          </div>
          <div>

          <LinkComponent href={`/posts/new/${user.id}`}>
            Agregar un nuevo post
          </LinkComponent>
          </div>
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
            <PostCard key={index} post={post} />
          ))}
        </ul>
      ) : (
        <p className="text-center">No posts found</p>
      )}
    </Container>
  );
};

export default UserInfo;
