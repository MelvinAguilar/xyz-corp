import BackButton from "../components/buttons/BackButton";
import { Container } from "../components/Container";
import UserForm from "../components/form/UserForm";
import SectionIntro from "../components/SectionIntro";
import ThemeSwitcher from "../components/ThemeSwitcher";

const AddUser = () => {
  return (
    <Container className="py-10 text-black dark:text-white">
      <div className="flex justify-between">
        <BackButton />
        <ThemeSwitcher />
      </div>

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
