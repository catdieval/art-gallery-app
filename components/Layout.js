import Navigation from "./Navigation";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <h1>Art Gallery</h1>
      <main>{children}</main>
      <Navigation />
    </>
  );
}
