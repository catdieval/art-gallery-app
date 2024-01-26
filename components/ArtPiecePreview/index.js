import Image from "next/image";

export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <figure>
      <Image src={image} width={200} height={200} alt={title} />
      <figcaption>
        <h4>{title}</h4>
        <small>{artist}</small>
      </figcaption>
    </figure>
  );
}
