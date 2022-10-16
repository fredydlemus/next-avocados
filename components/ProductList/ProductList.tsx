import React from 'react';
import { Card } from 'semantic-ui-react';
import Link from 'next/link';

type ProductListProps = {
    products: TProduct[];
};

const ProductList = ({ products }: ProductListProps) => {

    const mapProductsToCards = (products: TProduct[]) => {
        return products.map(({ name, id, price, image }) => (
            <Link key={id} href='/product/[id]' as={`/product/${id}`} passHref>
                <Card
                    as='a'
                    header={name}
                    image={image}
                    meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>}
                />
            </Link>
        )

        )
    }

    return (
        <Card.Group itemsPerRow={2} stackable>
            {mapProductsToCards(products)}
        </Card.Group>
    )
}

export default ProductList