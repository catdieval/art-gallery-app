import { useState, useEffect } from "react";
import Spotlight from "../components/SpotLight";

export default function SpotLightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState(
    pieces[Math.floor(Math.random() * pieces.length)]
  );

  useEffect(() => {
    setRandomArtPiece((prevRandomArtPiece) => {
      const updatedArtPiece = pieces.find(
        (piece) => piece.slug === prevRandomArtPiece.slug
      );

      return updatedArtPiece || prevRandomArtPiece;
    });
  }, [artPiecesInfo, pieces]);

  return (
    <div>
      <Spotlight
        image={randomArtPiece.imageSource}
        artist={randomArtPiece.artist}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === randomArtPiece.slug)
            ?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(randomArtPiece.slug)}
      />
    </div>
  );
}
