import Cart from "../Cart/page";

interface SetQuantityProp {
  cartCounter?: boolean;
  cartProduct: any;
  handleQtyIncrease: () => void;
  handleQtyDecrease: () => void;
}
const SetQuantity: React.FC<SetQuantityProp> = ({
  cartCounter,
  cartProduct,
  handleQtyIncrease,
  handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-5 items-center">
      {cartCounter ? null : (
        <div className="font-semibold text-lg">QUANTITY</div>
      )}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => handleQtyDecrease()}
          className="p-2 w-10 h-10 border bottom-1 rounded-md"
        >
          -
        </button>
        <div className="">{cartProduct.qty}</div>
        <button
          onClick={() => handleQtyIncrease()}
          className="p-2 w-10 h-10 border bottom-1 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};
export default SetQuantity;
