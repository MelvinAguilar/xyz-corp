import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { toast } from "sonner";
import { postSchema } from "../../validations/PostSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "../../services/xyzcorp.service";

const PostForm = ({ id }: { id: string }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof postSchema>> = async (data) => {
    const dataProcessed = {
      ...data,
      user_id: Number(id),
    };

    const response = await createPost(dataProcessed);

    if (response) {
      toast.success("Post creado correctamente");
      reset();
    } else {
      toast.error("Error al crear el post");
    }
  };

  if (id === "") {
    return <p>Id no encontrado</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        innerRef={register("title")}
        name="title"
        placeholder="Título"
        errors={errors.title}
      />
      <Input
        innerRef={register("body")}
        name="body"
        placeholder="Cuerpo del post"
        inputType="textarea"
        errors={errors.body}
      />

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

export default PostForm;