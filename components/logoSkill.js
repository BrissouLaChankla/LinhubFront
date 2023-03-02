import Image from "next/image";

export default function LogoSkill({ url, name, categorie }) {
  return (
    <Image src={url} alt={name} categorie={categorie} width={50} height={50} />
  );
}
