import ConfigurationSection from "./ConfigurationSection/ConfigurationSection";
import DescriptionSection from "./DescriptionSection/DescriptionSection";
import DownloadBtn from "./DownloadBtn/DownloadBtn";
import "./FormInputs.css"

function FormInputs() {

    return (
      <div className="led-screens-form-inputs">
        <ConfigurationSection/>
        <DescriptionSection/>
        <DownloadBtn/>
      </div>
    )
  }
  
  export default FormInputs