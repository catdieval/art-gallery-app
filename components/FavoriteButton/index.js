import Image from "next/image";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <button onClick={onToggleFavorite}>
      <Image src="/assets/heart.svg" width={32} height={32} alt="Heart" />
    </button>
  );
}
