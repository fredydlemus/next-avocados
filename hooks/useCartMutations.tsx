import { useContext } from "react";
import { CartDispatchContext } from "store/Cart";

export const useCartMutations = () => {
    const dispatch = useContext(CartDispatchContext);

    const addToCart = (product: TProduct, quantity?: number) =>
        dispatch({
            type: 'add',
            item: product,
            quantity
        });


    const removeFromCart = (product: TProduct) =>
        dispatch({
            type: 'remove',
            item: product
        });

    return {
        addToCart,
        removeFromCart
    }
}