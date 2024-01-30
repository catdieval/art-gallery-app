import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useState, useEffect } from "react";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const [selectedArtPiece, setSelectedArtPiece] = useState(null);

  useEffect(() => {
    setSelectedArtPiece(pieces.find((piece) => piece.slug === slug));
  }, [setSelectedArtPiece, pieces, slug]);
  if (!selectedArtPiece) {
    return null;
  }

  return (
    <ArtPieceDetails
      image={selectedArtPiece.imageSource}
      title={selectedArtPiece.title}
      artist={selectedArtPiece.artist}
      year={selectedArtPiece.year}
      genre={selectedArtPiece.genre}
      onBack={() => router.back()}
      isFavorite={
        artPiecesInfo.find((piece) => piece.slug === selectedArtPiece.slug)
          ?.isFavorite
      }
      onToggleFavorite={() => onToggleFavorite(selectedArtPiece.slug)}
    />
  );
}
