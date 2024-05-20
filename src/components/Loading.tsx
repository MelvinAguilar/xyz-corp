import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-inherit flex w-full items-center justify-center">
      <div
        className="inline-block size-24 animate-spin rounded-full border-4 border-solid border-current border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:border-white"
        role="status"
      >
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
};

export default Loading;
