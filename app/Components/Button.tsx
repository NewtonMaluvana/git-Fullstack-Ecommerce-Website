import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <div className="my-4 w-full">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`disabled:opacity-65 disabled:cursor-not-allowed rounded-md hover:bg-slate-400 transition w-full border-purple-400 flex justify-center items-center gap-12 ${
          outline
            ? "bg-white border border-black"
            : "bg-purple-700 border border-white"
        } ${outline ? "text-black" : "text-white"} ${
          small ? "text-sm font-light" : "text-lg font-semibold"
        } ${small ? "py-1 px-2" : "py-3 px-4"} ${custom ? custom : ""}`}
      >
        {<Icon size={small ? 20 : 24} />}
        {label}
      </button>
    </div>
  );
};
export default Button;
