import DimensionBoxes from "./DimensionBoxes/DimensionBoxes";
import Notes from "./Notes/Notes";
import DescriptionBoxes from "./DescriptionBoxes/DescriptionBoxes";
import ConfigDetailsPDF from "./ConfigDetailsPDF/ConfigDetailsPDF"
import "./DetailsContainer.css";

function DetailsContainer() {
  return (
    <div className="led-screen-details-section">
      <DimensionBoxes/>
      <div className="led-screen-flex-bottom">
        <Notes/>
        <DescriptionBoxes/>
      </div>
      <ConfigDetailsPDF/>
    </div>
  )
}

export default DetailsContainer
  