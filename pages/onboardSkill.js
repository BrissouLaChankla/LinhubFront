import DraggableComponent from "@/components/DraggableComponent";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function OnboardSkill() {
  return (
    <div>
      <div>
        <h3>Super ! vous êtes un Développeur(rajouter le props)</h3>
        <p>Quelles sont vos technos de prédilections ?</p>
      </div>
      <DndProvider backend={HTML5Backend}>
        <DraggableComponent></DraggableComponent>
      </DndProvider>
    </div>
  );
}
