import "./ConfigurationSection.css"
import SelectScreen from './SelectScreen/SelectScreen';
import SelectMount from './SelectMount/SelectMount';
import FloorLineTextBox from "./FloorLineTextBox/FloorLineTextBox";

function ConfigurationSection() {

    return (
      <div className="led-screen-form-configuration">
        <h3>Configuration</h3>
        <SelectScreen/>
        <SelectMount/>
        <FloorLineTextBox/>
      </div>
    )
  }
  
  export default ConfigurationSection
  