import DateInputBox from "./DateInputBox/DateInputBox";
import DepartmentTextBox from "./DepartmentTextBox/DepartmentTextBox";
import DrawerTextBox from "./DrawerTextBox/DrawerTextBox";
import ScreenSizeTextBox from "./ScreenSizeTextBox/ScreenSizeTextBox";
import TitleTextBox from "./TitleTextBox/TitleTextBox";

function DescriptionSection() {

  return (
    <div className="led-screen-form-inputs">
      <h3>Description</h3>
      <TitleTextBox/>
      <DrawerTextBox/>
      <DepartmentTextBox/>
      <ScreenSizeTextBox/>
      <DateInputBox/>
    </div>
  )
}

export default DescriptionSection
  