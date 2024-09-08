import ProductDetails from "./ProductDetails";
import Container from "@/app/Components/Container";
import ListRating from "./ListRating";
import data from "@/lib/data";
import productService from "@/lib/services/getProduct";

interface Params {
  productId: string;
}

const Product = async ({ params }: { params: Params }) => {
  const produc = await productService.getProduct(params.productId);
  return (
    <div>
      <Container>
        <ProductDetails
          product={produc}
          item={{ ...produc, qty: 0, color: "", size: "" }}
        />
      </Container>
    </div>
  );
};
export default Product;
