import React, { Component } from 'react';
import ScanditBarcodeScanner from "scandit-sdk-react";
import {
	Barcode,
	BarcodePicker,
	CameraAccess,
	CameraSettings,
	ScanSettings
  } from "scandit-sdk";



class App extends Component {
	constructor(props) {
		super(props);
	}

	getScanSettings = () => {
		return new ScanSettings({
			 enabledSymbologies: [
				 Barcode.Symbology.CODE128, 
				 Barcode.Symbology.UPCA, 
				 Barcode.Symbology.UPCE, 
				 Barcode.Symbology.EAN13, 
				 Barcode.Symbology.EAN8, 
				 Barcode.Symbology.EAN2] 
			});
	  };

  render() {
    return (
      <div>
		<ScanditBarcodeScanner
			licenseKey={"AYv8aTXbKQb5DckwewtncGYN1lZiEUK4gH0h6MNcQKWfCmimEzjLc+wRMCh7YetKYFgOOmdJV2zxQxCguChDq6wq8hGBbxNF/nDWDIxhiOQUQSXXtkac1UtUL1S8Tt1tbgLn5TAAYAIlPyWn91nx53iUBsgsbLKIkUScTtAvIEjOLzOO2PUQ0QX8ExiTz5KH2VLCfOKOCaM5BUhCYaM2vQcY/U0vZ8/f6OypsLGpztO0zs0eLFy727G/0rQHlO1Uri188ORT1eomkGvQMgYw5X9APkhXSIW4TI6fcNwirH4o+n128MMdCbiNYTS9z1pQqp5VSPHkF3Q5S4e2ILyA0GPbUdaBeY7QglvDj7TztwH6giTbhaJv/Jhuw8zPNL2JOExl5JU6tb87OZNXiaZbyAFWvDhaiTj5Qk3IizVJ9VkyUiPreysmlGP9ROSaErilo8YjDguB2rRhQhQUqNhckYsYKOt/hgUTl817E+1MITCcyLCHscBSugZ1Ob8cYkACTdDp7DDflmfiCBaEDLAQjQAIFOFfqwYz6CmbdRbSpZGaLJZVrUwY/7XdXgJBxNQltjKhCWmeX/aOQXuw7ppw22fC4Zq1oGAorXPcr5kG0qd9LTkCiCz2f6XD6kWRAUpDSqWT/tqyl9IhebPSEuD0rjlZRj6+hEbtPBnHX8LnVdscC16WKR1frPwK021CD7N2kIWoJYKHsSkyw67XGGbFOPYS3kwqoT7c6hCWtmkeuO36TARN3DHSD1FtoAekUM4yIhDuxCN/bwh4a4fCn1DjhybFW/qernTVuCocLfuAcEGvUPn5wHC3rXsaeQ=="}
			engineLocation="https://unpkg.com/scandit-sdk@^3.1.0/build" // could also be a local folder, e.g. "build"
			
			// Picker events
			onReady={() => this.setState({ scannerReady: true })}
			onScan={console.log}
			onScanError={console.log}
			
			// Picker options
			scanSettings={this.getScanSettings()}
			/>
      </div>
    );
  }
}

export default App;
