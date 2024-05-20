import { useParams } from "react-router-dom";
import { Container } from "../components/Container";
import PostForm from "../components/form/PostForm";
import SectionIntro from "../components/SectionIntro";
import BackButton from "../components/buttons/BackButton";

const AddPost = () => {
  const { id } = useParams();
  const postId = id || "";

  return (
    <Container className="py-10 text-white">
      <BackButton />
      <SectionIntro
        title="Crear un nuevo post"
        subtitle="Completa los campos para crear un nuevo usuario"
        generalClassName="!pt-0"
      />
      <PostForm id={postId} />
    </Container>
  );
};

export default AddPost;
