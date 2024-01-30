import Image from "next/image.js";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding-top: 0.25rem;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => (props.$isFavorite ? "lightpink" : "white")};
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button onClick={onToggleFavorite} $isFavorite={isFavorite}>
      <Image src="/assets/heart.svg" width={32} height={32} alt="Heart" />
    </Button>
  );
}
