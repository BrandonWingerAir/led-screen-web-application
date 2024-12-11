import "./ConfigurationSection.css"
import SelectScreen from './SelectScreen/SelectScreen';
import SelectMount from './SelectMount/SelectMount';
import FloorLineTextBox from "./FloorLineTextBox/FloorLineTextBox";
import NicheRadioBtn from "./NicheRadioBtn/NicheRadioBtn";
import NicheGapTextBox from "./NicheGapTextBox/NicheGapTextBox";

function ConfigurationSection() {

    return (
      <div className="led-screen-form-configuration">
        <h3>Configuration</h3>
        <SelectScreen/>
        <SelectMount/>
        <FloorLineTextBox/>
        <NicheRadioBtn/>
        <NicheGapTextBox/>
      </div>
    )
  }
  
  export default ConfigurationSection
  