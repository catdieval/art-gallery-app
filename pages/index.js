import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";
import Spotlight from "@/components/Spotlight";

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

export default function ArtGallery() {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
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

  const randomArtPiece = data[Math.floor(Math.random() * data.length)];

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
      <ArtPieces pieces={data} />
    </div>
  );
}
