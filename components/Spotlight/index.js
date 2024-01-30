import { Wrapper } from "../Wrapper.js";
import { ImageContainer } from "../ImageContainer.js";
import { StyledImage } from "../StyledImage.js";
import FavoriteButton from "../FavoriteButton/index.js";

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <Wrapper>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <StyledImage
          src={image}
          width={580}
          height={580}
          alt={`spotlight: ${artist}`}
        />
      </ImageContainer>
      <h2>{artist}</h2>
    </Wrapper>
  );
}
