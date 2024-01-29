import Image from "next/image";

export default function Spotlight({ artist, image, title }) {
  return (
    <div>
      <Image src={image} width={200} height={200} alt={title} />
      <h2>{artist}</h2>
    </div>
  );
}
