import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { toast } from "sonner";
import { userSchema } from "../../validations/UserSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";
import { FilterType } from "../../types/common";
import { createUser } from "../../services/xyzcorp.service";

const genders: FilterType[] = [
  { id: 1, name: "Hombre", value: "male" },
  { id: 2, name: "Mujer", value: "female" },
];

const statuses: FilterType[] = [
  { id: 1, name: "Activo", value: "active" },
  { id: 2, name: "Inactivo", value: "inactive" },
];

const UserForm = () => {
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof userSchema>> = async (data) => {
    const response = await createUser(data);

    if (response) {
      toast.success("Usuario creado correctamente");
      reset();
    } else {
      toast.error("Error al crear el usuario");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        innerRef={register("name")}
        name="name"
        placeholder="Nombre"
        errors={errors.name}
      />
      <Input
        innerRef={register("email")}
        name="email"
        type="email"
        placeholder="Correo electrónico"
        errors={errors.email}
      />
      <div className="pt-8">
        <Select
          control={control}
          name="gender"
          labelname="Genero"
          options={genders}
        />
        {errors.gender && (
          <p className="text-irresistible mx-5 mt-2 text-base text-red-300">
            {errors.gender.message}
          </p>
        )}
      </div>

      <div className="py-8">
        <Select
          control={control}
          name="status"
          labelname="Estado"
          options={statuses}
        />
        {errors.status && (
          <p className="text-irresistible mx-5 mt-2 text-base text-red-300">
            {errors.status.message}
          </p>
        )}
      </div>
      
      <div className="flex gap-8">
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-full border border-white px-6 py-3 text-xl font-bold 
          transition-all hover:bg-white hover:text-black"
        >
          Borrar datos
        </button>

        <button
          type="submit"
          className="mt-8 rounded-full border border-white px-6 py-3 text-xl font-bold 
          transition-all hover:bg-white hover:text-black"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default UserForm;
