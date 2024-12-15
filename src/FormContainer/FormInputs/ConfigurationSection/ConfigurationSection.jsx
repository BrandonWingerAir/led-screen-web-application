import "./ConfigurationSection.css"
import SelectScreen from './SelectScreen/SelectScreen';
import SelectMediaPlayer from "./SelectMediaPlayer/SelectMediaPlayer";
import SelectMount from './SelectMount/SelectMount';
import FloorLineInputBox from "./FloorLineInputBox/FloorLineInputBox";
import NicheRadioBtn from "./NicheRadioBtn/NicheRadioBtn";
import NicheGapInputBox from "./NicheGapInputBox/NicheGapInputBox";
import OrientationRadioBtn from "./OrientationRadioBtn/OrientationRadioBtn";
import SelectReceptacleBox from "./SelectReceptacleBox/SelectReceptacleBox";

function ConfigurationSection() {

    return (
      <div className="led-screen-form-configuration">
        <h3>Configuration</h3>
        <SelectScreen/>
        <SelectMediaPlayer/>
        <SelectMount/>
        <SelectReceptacleBox/>
        <OrientationRadioBtn/>
        <NicheRadioBtn/>
        <FloorLineInputBox/>
        <NicheGapInputBox/>
      </div>
    )
  }
  
  export default ConfigurationSection
  