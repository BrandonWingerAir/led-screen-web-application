import "./DownloadBtn.css";
import { saveComponentsAsPdf } from './../../../pdfUtil';

function DownloadBtn() {
  const componentIds = [
    'led-screens-diagram-canvas', 
    'led-screens-dimension-boxes', 
    'led-screens-config-notes', 
    'led-screens-installation-desc'
  ];

  return (
    <div className="led-screen-form-download">
      <button 
        onClick={() => saveComponentsAsPdf(componentIds)}
      >
        Download
      </button>
    </div>
  )
}

export default DownloadBtn
  