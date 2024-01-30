import ArtPiecePreview from "../ArtPiecePreview";
import styled from "styled-components";

const ArtPiecesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 0 1rem;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ArtPiecesList>
      {pieces?.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={
              artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                ?.isFavorite
            }
            onToggleFavorite={() => onToggleFavorite(piece.slug)}
          />
        </li>
      ))}
    </ArtPiecesList>
  );
}
