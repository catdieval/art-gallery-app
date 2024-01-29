import ArtPieces from "../components/ArtPieces";
import Spotlight from "../components/SpotLight";

export default function SpotLightPage({ pieces }) {
  const randomArtPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
      />
      {/* <ArtPieces pieces={data} /> */}
    </div>
  );
}
