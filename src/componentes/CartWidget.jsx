import { Badge } from "react-bootstrap";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div>
      <BsCartPlusFill fontSize={"3rem"} color="white" />
      <Badge bg="danger">{cartQuantity()}</Badge>
    </div>
  );
};

export default CartWidget;