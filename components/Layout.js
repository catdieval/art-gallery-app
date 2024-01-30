import Navigation from "./Navigation/index.js";
import { useRouter } from "next/router.js";
import Head from "next/head.js";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <Wrapper>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <h1>Art Gallery</h1>
      <main>{children}</main>
      <Navigation />
    </Wrapper>
  );
}
