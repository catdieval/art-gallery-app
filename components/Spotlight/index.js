import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
  artist,
  image,
  title,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <div>
      <Image src={image} width={200} height={200} alt={title} />
      <h2>{artist}</h2>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}
