import ConfigurationSection from "./ConfigurationSection/ConfigurationSection"
import DescriptionSection from "./DescriptionSection/DescriptionSection"
import DownloadBtn from "./DownloadBtn/DownloadBtn"

function FormInputs() {

    return (
      <div>
        <ConfigurationSection/>
        <DescriptionSection/>
        <DownloadBtn/>
      </div>
    )
  }
  
  export default FormInputs