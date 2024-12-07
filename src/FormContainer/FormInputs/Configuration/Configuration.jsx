import "./Configuration.css"

function Configuration() {

    return (
      <div className="led-screen-form-configuration">
        <h3>Configuration</h3>
        <label htmlFor="led_screen">Screen</label>
        <select name="led_screen">
          <option value="LH43QMBTBGCXZA">LH43QMBTBGCXZA</option>
          <option value="10BDL4151T">10BDL4151T</option>
          <option value="43TNF5J">43TNF5J</option>
        </select>
      </div>
    )
  }
  
  export default Configuration
  