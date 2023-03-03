import TabsNavSkills from "../components/TabsNavSkills";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
};

export default function OnboardSkill() {
  const router = useRouter();

  const user = useSelector((state) => state.user.value);

  const [selectedSkills, setSelectedSkills] = useState([]);

  const submitSkills = () => {
    const body = selectedSkills.map((e) => (e = e.name));
    console.log(body);
    fetch("http://localhost:3000/skills/create/" + user.token, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skills: body }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const addSkill = (skill) => {
    let skillFind = selectedSkills.find((e) => e.name === skill.name);
    if (skillFind !== undefined) {
      const update = selectedSkills.filter((item) => item !== skillFind);
      setSelectedSkills(update);
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <h2>Super ! vous êtes un {router.query.job}</h2>
          <p>Quelles sont vos technos de prédilections ?</p>
          <TabsNavSkills
            addSkill={addSkill}
            selectedSkills={selectedSkills}
          ></TabsNavSkills>
          <div className="text-end">
            <Link
              href="/admin"
              onClick={() => submitSkills()}
              className="btn btn-outline-primary mt-5"
            >
              Continuer
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="border-start p-4 h-100">
            <h2 className="mb-4">Voici vos technos :</h2>
            {selectedSkills.map((e, i) => (
              <AnimatePresence key={i}>
                <motion.div
                  className="pointer d-inline-block"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  onClick={() => addSkill(e)}
                >
                  <Image
                    src={e.url}
                    alt={e.name}
                    className="p-3"
                    width={100}
                    height={100}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
