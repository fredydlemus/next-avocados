import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, Container } from "semantic-ui-react";
import { Avocado } from '@components/SVGIcons';
import ShoppingCartIcon from "@components/Navbar/ShoppingCartIcon";


const Navbar = () => {

  const { pathname } = useRouter();

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === "/"}
            title="Start | All products"
          >
            <Avocado />
            Avo Store
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" passHref>
            <Menu.Item active={pathname === '/cart'}>
              <ShoppingCartIcon cartCount={5} name="Basket" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  );
};

export default Navbar;
