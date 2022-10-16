import React, { Dispatch, useReducer, useContext } from "react";

export type CartItemType = TProduct & { quantity: number };

export type CartState = {
    [key: string]: CartItemType;
}

export type CartAction = {
    type: 'add' | 'remove';
    item: TProduct
    quantity?: number;
}

const defaultState = {} as CartState;

export const CartItemsContext = React.createContext(defaultState);
export const CartDispatchContext = React.createContext((() => { }) as Dispatch<CartAction>);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducers, defaultState);

    return (
        <CartItemsContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartItemsContext.Provider>
    );
}

function cartReducers(state: CartState, { item, type, quantity: qtyToAdd = 1 }: CartAction) {
    const existingCartItem = state[item.id];

    switch (type) {
        case 'add': {
            if (existingCartItem != undefined) {
                const quantity = existingCartItem.quantity + qtyToAdd
                return {
                    ...state,
                    [item.id]: {
                        ...existingCartItem,
                        quantity
                    }
                }
            }

            return {
                ...state,
                [item.id]: {
                    ...item,
                    quantity: qtyToAdd
                }

            }
        }
        case 'remove': {
            if (existingCartItem == undefined) {
                return state;
            }

            const quantity = existingCartItem.quantity - qtyToAdd - 1;
            if (quantity > 0) {
                return {
                    ...state,
                    [item.id]: {
                        ...existingCartItem,
                        quantity
                    }
                }
            }

            const newCartItems = { ...state };
            delete newCartItems[item.id];
            return newCartItems;
        }

        default: {
            throw new Error(`Unhandled action type: ${type}`)
        }
    }
};

export const getCartSubTotal = (sum: number, item: CartItemType) => {
    sum += item.price * item.quantity;
    return sum;
}

export const getCartCount = (sum: number, item: CartItemType) => sum + item.quantity;


export default CartProvider;