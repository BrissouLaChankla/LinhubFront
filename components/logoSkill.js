import Image from "next/image";
import { useDrag } from "react-dnd";

export default function LogoSkill({ url, name, categorie }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { alt: name, categorie: categorie },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Image
      ref={drag}
      src={url}
      alt={name}
      categorie={categorie}
      width={50}
      height={50}
      style={{ border: isDragging ? "4px solid orange" : "0px" }}
    />
  );
}
