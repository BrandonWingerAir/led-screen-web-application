import "./Configuration.css"
import SelectBox from './SelectBox/SelectBox';

function Configuration() {

    return (
      <div className="led-screen-form-configuration">
        <h3>Configuration</h3>
        <label htmlFor="led_screen">Screen</label>
        <SelectBox/>
      </div>
    )
  }
  
  export default Configuration
  