import DimensionBoxes from "./DimensionBoxes/DimensionBoxes"
import Notes from "./Notes/Notes"
import Information from "./Information/Information"
import "./DetailsContainer.css"

function DetailsContainer() {
  return (
    <div className="led-screen-details-section">
      <DimensionBoxes/>
      <div className="led-screen-flex-bottom">
        <Notes/>
        <Information/>
      </div>
    </div>
  )
}

export default DetailsContainer
  