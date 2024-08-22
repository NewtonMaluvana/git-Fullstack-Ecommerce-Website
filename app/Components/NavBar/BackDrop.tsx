interface BackDropProps {
  onClick: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-screen h-screen fixed z-10 top-0 left-0 bg-slate-600 opacity-80"
    ></div>
  );
};
export default BackDrop;
