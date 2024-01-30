import { Wrapper } from "../Wrapper.js";
import { ImageContainer } from "../ImageContainer.js";
import { StyledImage } from "../StyledImage.js";
import FavoriteButton from "../FavoriteButton/index.js";
import styled from "styled-components";

const BackButton = styled.button`
  background-color: purple;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const List = styled.ul`
  margin: 1.5rem 0 3rem;
  li {
    line-height: 1.5;
  }
`;

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  isFavorite,
  onToggleFavorite,
  onBack,
}) {
  return (
    <>
      <BackButton type="button" onClick={onBack}>
        &laquo; Go back
      </BackButton>
      <Wrapper>
        <h2>{title}</h2>
        <ImageContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
          <StyledImage
            src={image}
            sizes="100vw"
            width={580}
            height={580}
            alt={`${artist}: ${title}`}
            priority
          />
        </ImageContainer>
        <List>
          <li>Artist: {artist}</li>
          <li>Year: {year}</li>
          <li>Genre: {genre}</li>
        </List>
      </Wrapper>
    </>
  );
}
