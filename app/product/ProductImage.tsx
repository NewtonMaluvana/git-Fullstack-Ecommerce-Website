import Image from "next/image";
// import { SelctedImage } from "./[productId]/ProductDetails";
import data from "@/lib/data";

interface ProductImgProps {
  product: any;
}

const ProductImage: React.FC<ProductImgProps> = ({ product }) => {
  return (
    <div className="grid m-3 grid-cols-6 gap-3 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
      <div className="col-span-5 relative aspect-square">
        <Image
          alt=""
          fill
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
          src={product.image}
        />
      </div>
    </div>
  );
};
export default ProductImage;
