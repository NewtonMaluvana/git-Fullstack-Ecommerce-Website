interface ContainerProp {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProp> = ({ children }) => {
  return (
    <div className="max-w-full  py-6 xl:px-20 md:px-2 px-4">{children}</div>
  );
};
export default Container;
