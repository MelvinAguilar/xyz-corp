type ContainerProps<T extends React.ElementType> = {
    as?: T;
    className?: string;
    children: React.ReactNode;
  };
  
  export const Container = <T extends React.ElementType = "div">({
    as,
    className = "",
    children,
  }: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
    ContainerProps<T>) => {
    const Component = as ?? "div";
  
    return (
      <Component
        className={`w-full mx-auto max-w-[84rem] px-6 md:px-10 ${className}`}
      >
        {children}
      </Component>
    );
  };