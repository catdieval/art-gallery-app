import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import useLocalStorageState from "use-local-storage-state";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  const [artPieceInfo, setartPieceInfo] = useLocalStorageState(
    "Art-Piece-Info",
    { defaultValue: [] }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <>
        <h1>{error.status}</h1>
        <p>Error: {error.message}</p>
      </>
    );
  }

  function handleToggleFavorite(slug) {
    const artPiece = artPieceInfo.find((piece) => piece.slug === slug);
    if (artPiece) {
      setartPieceInfo(
        artPieceInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setartPieceInfo([...artPieceInfo, { slug, isFavorite: true }]);
    }
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        onToggleFavorite={handleToggleFavorite}
      />
    </Layout>
  );
}
