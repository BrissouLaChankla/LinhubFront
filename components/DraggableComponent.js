import LogoSkill from "./logoSkill";
import { android, react } from "../utils/images";
import { BookFill, PatchCheckFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useDrop } from "react-dnd";

//https://react-dnd.github.io/react-dnd/docs/api/use-drop
//https://www.youtube.com/watch?v=4bzJrEETW4w

export default function DraggableComponent() {
  const [skills, setSkills] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.alt, item.categorie),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (item) => {
    console.log(item);
  };

  const allSkills = [
    {
      name: "React Native",
      url: react,
      categorie: "Mobile",
    },
    {
      name: "Android",
      url: android,
      categorie: "Mobile",
    },
  ];

  const logos = allSkills.map((logo, i) => {
    return (
      <LogoSkill
        key={i}
        url={logo.url}
        name={logo.name}
        categorie={logo.categorie}
      />
    );
  });

  return (
    <div>
      <div>{logos}</div>
      <div className="container">
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className="bg-light p-4 position-relative rounded">
              <span
                className="position-absolute translate-middle top-0 start-0 rounded-circle p-3 "
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <BookFill className="fs-2" />
              </span>
              <h2>En apprentissage</h2>
              <div className="d-flex gap-4 justify-content-around mt-4 flex-wrap">
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded p-4 position-relative">
              <span
                className="position-absolute translate-middle top-0 start-0 rounded-circle p-3"
                style={{ backgroundColor: "#D9D9D9" }}
              >
                <PatchCheckFill className="fs-2" />
              </span>
              <h2>Maitrisé</h2>
              <div className="d-flex gap-4 justify-content-around mt-4 flex-wrap">
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
                <div
                  ref={drop}
                  className=" border-primary rounded"
                  style={{ height: 50, width: 50, border: "2px dashed" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
