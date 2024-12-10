import ScreenDimensions from "./ScreenDimensions/ScreenDimensions"
import Notes from "./Notes/Notes"
import Information from "./Information/Information"
import "./DetailsContainer.css"

function DetailsContainer() {
  return (
    <div className="led-screen-details-section">
      <ScreenDimensions/>
      <div className="led-screen-flex-bottom">
        <Notes/>
        <Information/>
      </div>
    </div>
  )
}

export default DetailsContainer
  