import { Container } from "../components/Container";
import UserForm from "../components/form/UserForm";
import SectionIntro from "../components/SectionIntro";

const AddUser = () => {
  return (
    <Container className="py-10 text-white">
      <SectionIntro
        title="Crear usuario"
        subtitle="Completa los campos para crear un nuevo usuario"
        generalClassName="!pt-0"
      />
      <UserForm />
    </Container>
  );
};

export default AddUser;
