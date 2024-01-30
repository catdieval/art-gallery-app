import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

const Figure = styled.figure`
  position: relative;
`;

const FigCaption = styled.figcaption`
  line-height: 1.3;
  margin-top: 0.75rem;
  gap: 0.25rem;
`;

const StyledImage = styled(Image)`
  width: 400px;
  height: 400px;
  object-fit: cover;
  @media screen and (max-width: 390px) {
    width: 100%;
    height: auto;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: underline;
  color: green;
  margin-top: 0.5rem;
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Figure>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <StyledImage
        src={image}
        alt={title}
        sizes="100vw"
        width={400}
        height={400}
        priority
      />
      <FigCaption>
        <h4>{title}</h4>
        <small>{artist}</small>
        <StyledLink href={`art-pieces/${slug}`}>Details</StyledLink>
      </FigCaption>
    </Figure>
  );
}
