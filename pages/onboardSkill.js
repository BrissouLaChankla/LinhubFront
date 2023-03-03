import TabsNavSkills from "../components/TabsNavSkills";
import { useRouter } from "next/router";

export default function OnboardSkill() {
  const router = useRouter();
  return (
    <div>
      <div>
        <h2>Super ! vous êtes un {router.query.job}</h2>
        <p>Quelles sont vos technos de prédilections ?</p>
      </div>
      <TabsNavSkills></TabsNavSkills>
    </div>
  );
}
