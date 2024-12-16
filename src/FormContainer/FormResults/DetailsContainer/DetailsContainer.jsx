import DimensionBoxes from "./DimensionBoxes/DimensionBoxes";
import ResultsNotes from "./ResultsNotes/ResultsNotes";
import DescriptionBoxes from "./DescriptionBoxes/DescriptionBoxes";
import ConfigDetailsPDF from "./ConfigDetailsPDF/ConfigDetailsPDF"
import "./DetailsContainer.css";

function DetailsContainer() {
  return (
    <div className="led-screen-details-section">
      <DimensionBoxes/>
      <div className="led-screen-flex-bottom">
        <ResultsNotes/>
        <DescriptionBoxes/>
      </div>
      <ConfigDetailsPDF/>
    </div>
  )
}

export default DetailsContainer
  