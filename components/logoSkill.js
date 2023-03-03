import Image from "next/image";
import tooltip from "@/styles/Tooltip.module.scss"

export default function LogoSkill({ url, name, categorie, addSkill }) {
  return (
      <span className={tooltip.tooltip} >
        <Image src={url} alt={name} categorie={categorie} width={75} height={75} onClick={() => addSkill({name, url, categorie})}/>
        <span className={tooltip.tooltiptext}>{name}</span>
      </span>
  );
}
