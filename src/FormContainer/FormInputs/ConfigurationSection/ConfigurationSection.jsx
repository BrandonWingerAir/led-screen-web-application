import "./ConfigurationSection.css"
import SelectScreen from './SelectScreen/SelectScreen';
import SelectMount from './SelectMount/SelectMount';

function ConfigurationSection() {

    return (
      <div className="led-screen-form-configuration">
        <h3>Configuration</h3>
        <label htmlFor="led_screen">Screen</label>
        <SelectScreen/>
        <SelectMount/>
      </div>
    )
  }
  
  export default ConfigurationSection
  