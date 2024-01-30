import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: white;
  border-top: 2px solid lightgrey;
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ $isActive }) => ($isActive ? "purple" : "black")};
  font-weight: bold;
  padding: 1rem 1.5rem;
  &:hover {
    background-color: lightgrey;
  }
`;

export default function Navigation() {
  const router = useRouter();

  return (
    <NavWrapper>
      <List>
        <li>
          <NavLink href="/" $isActive={router.pathname === "/"}>
            Spotlight
          </NavLink>
        </li>
        <li>
          <NavLink
            href="/art-pieces"
            $isActive={router.pathname === "/art-pieces"}
          >
            Art Pieces
          </NavLink>
        </li>
      </List>
    </NavWrapper>
  );
}
