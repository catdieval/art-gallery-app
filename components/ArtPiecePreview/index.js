import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <figure>
      <Image src={image} width={200} height={200} alt={title} />
      <figcaption>
        <h4>{title}</h4>
        <small>{artist}</small>
      </figcaption>
      <Link href={`art-pieces/${slug}`}>Details</Link>
    </figure>
  );
}
