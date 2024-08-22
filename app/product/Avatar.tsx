import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  if (src) {
    return (
      <Image
        alt=""
        width={30}
        height={30}
        className="rounded-full object-contain"
        src={src}
      />
    );
  }
  return (
    <div>
      <FaUserCircle />
    </div>
  );
};
export default Avatar;
