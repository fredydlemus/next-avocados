import { useContext } from "react";
import { CartItemsContext, getCartCount, getCartSubTotal } from "store/Cart";

export const useCart = () => {
    const itemsById = useContext(CartItemsContext);
    const items = Object.values(itemsById);
    const count = items.reduce(getCartCount, 0);
    const subTotal = items.reduce(getCartSubTotal, 0);

    return { items, itemsById, count, subTotal };
}