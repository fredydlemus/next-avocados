import React from 'react';
import Layout from '@components/Layout/Layout';
import CartItemList from '@components/CartItemList/CartItemList';
import { Divider } from 'semantic-ui-react';
import CartSummary from '@components/CartSummary/CartSummary';
import { useCart } from '@hooks/useCart';
import { useCartMutations } from '@hooks/useCartMutations';

const CartPage = () => {

    const { items, count } = useCart();
    const { removeFromCart } = useCartMutations();

    return (
        <Layout>
            <CartItemList items={items} removeFromCart={removeFromCart} />
            <Divider />
            <CartSummary totalAmount={count} />
        </Layout>
    )
}

export default CartPage