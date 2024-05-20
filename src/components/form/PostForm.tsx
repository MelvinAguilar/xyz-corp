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
          className="my-8 flex w-fit items-center gap-2 rounded-md border border-[#363749]/[.3] bg-gray-100 px-6 py-4 shadow-md hover:bg-gray-300/50 dark:border-[#363749]/[.9] dark:bg-secondary dark:hover:bg-secondary-hover"
        >
          Borrar datos
        </button>
        <button
          type="submit"
          className="my-8 flex w-fit items-center gap-2 rounded-md border border-[#363749]/[.3] bg-gray-100 px-6 py-4 shadow-md hover:bg-gray-300/50 dark:border-[#363749]/[.9] dark:bg-secondary dark:hover:bg-secondary-hover"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default PostForm;
