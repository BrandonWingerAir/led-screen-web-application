import Dimensions from "./Dimensions/Dimensions"
import Notes from "./Notes/Notes"
import Information from "./Information/Information"
import "./Details.css"

function Details() {
  return (
    <div className="led-screen-details-section">
      <Dimensions/>
      <div className="led-screen-flex-bottom">
        <Notes/>
        <Information/>
      </div>
    </div>
  )
}

export default Details
  