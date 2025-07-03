import { Badge } from "react-bootstrap";
import { BsCartPlusFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {

    return(
    <div>
        <BsCartPlusFill fontSize= {"3 rem"} color ="white"/>
        <Badge bg="danger">0</Badge>
    </div>
    )
}

export default CartWidget 