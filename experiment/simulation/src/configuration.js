resultJson = {};
timerMasterJson = {};
//function mainPage1(){
	$("#main-div-conf").html('');	
     $("#canvas-div").html('');	
     //$("#canvas-div1").html('');
      $("#centerText1").html('DIAGRAM');
      $("#centerText2").html('CONFIGURATION');
 			//var htm = '<center><img src="images/chipImg.png" class="img-fluid" style="width: 80%;" ></center>'
	   // $("#canvas-div1").html(htm);
	
 
var selection = '<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="sVal" >'
	+ '<label class="labelstyle">Select Input Pin For Sensor  : </label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="switchConfig"  style="height:auto;"  >'
	+ '<option value="0">--- Select input pin ---</option>'
	+ '<option value="1" name="PC0">PC0</option>'
	+ '<option value="2" name="PC1" >PC1</option>'
	+ '<option value="3" name="PC2" >PC2</option>'
	+ '<option value="4" name="PC3">PC3</option>'
	+ '<option value="5" name="PC4">PC4</option>'
	+ '<option value="6" name="PC5">PC5</option>'
	+ '</select>'
	+ '</div>'
	
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	
	+'<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="IpinSelection" >'
	+ '<label class="labelstyle">Select Output Pin For DC Motor :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="inputPinName"  style="height:auto;" disabled >'
	+ '<option value="0">--- Select output Pin ---</option>'
//	+ '<option value="1" name="PD1">PD1</option>'
	+ '<option value="2" name="PD2">PD2</option>'
	+ '<option value="3" name="PD3">PD3</option>'
	+ '<option value="4" name="PD4">PD4</option>'
	+ '<option value="5" name="PD5">PD5</option>'
	+ '<option value="6" name="PD6">PD6</option>'
	+ '<option value="7" name="PD7">PD7</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	
	+'<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	
	+ '<div class="col-sm-5" id="OpinSelection" >'
	+ '<label class="labelstyle">Select Output pin for LED  :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="outputPinName"  style="height:auto;" disabled>'
	+ '<option value="0">--- Select Output Pin ---</option>'
//	+ '<option value="1" name="PD1">PD1</option>'
	+ '<option value="2" name="PD2">PD2</option>'
	+ '<option value="3" name="PD3">PD3</option>'
	+ '<option value="4" name="PD4">PD4</option>'
	+ '<option value="5" name="PD5">PD5</option>'
	+ '<option value="6" name="PD6">PD6</option>'
	+ '<option value="7" name="PD7">PD7</option>'
	+ '</select>'
	+ '</div>'
	
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'
	

	
	+ '<div class="row selectConf" >'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '<div class="col-sm-5" id="ledSelect" >'
	+ '<label class="labelstyle">Select Detection :</label>'
	+ '</div>'
	+ '<div class="col-sm-5">'
	+ '<select  class="form-control selectConf" id="ledtype"  style="height:auto;" disabled>'
	+ '<option value="0">--- Select Detection ---</option>'
	+ '<option value="1" >Fire</option>'
//	+ '<option value="2" >Glass</option>'
	+ '</select>'
	+ '</div>'
	+ '<div class="col-sm-1">'
	+ '</div>'
	+ '</div>'


	+ '<div class="row" selectConf>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-danger btnStyle button5" id="generateCode" data-toggle="modal" data-target="#myModal" disabled><b>GENERATE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button4" id="compileCode" data-toggle="modal" data-target="#myModal" disabled><b>COMPILE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-success btnStyle button4" id="executeCode" data-toggle="modal" data-target="#myModal" disabled ><b>EXECUTE<br>CODE</b></button>'
	+ '</div>'
	+ '<div class="col-sm-3" id="buttonDiv">'
	+ '<button type="button" class="btn btn-primary btnStyle button2" id="downloadCode" data-toggle="modal"  disabled><i class="fa fa-download"></i> <b>DOWNLOAD<br>PROGRAM</b></button>'
	+ '</div>'
	+ '</div>'
	
	

    + '<div class="row  selectConf" id="codeview"   hidden>'
    + '<div class="col-sm-12 scrollable-text-container" >'
    + '<p id="demo" style="margin-top:10px ;border-style: double;"></p>'
    + '</div>'
    + '</div>'
    
    + '<div class="row  selectConf" id="errorview"   hidden>'
    + '<div class="col-sm-12" >'
    + '<p id="errordemo" style="margin-top:10px ; border-style: double;"></p>'
    + '</div>'
    + '</div>'


	+ ' <!-- Modal -->'
	+ '<div class="modal fade" id="myModal" role="dialog">'
	+ ' <div class="modal-dialog modal-md">'
	+ '    <div class="modal-content">'
	+ '     <div class="modal-header">'

	+ '       <h4 class="modal-title">Message box</h4>'
	+ '       <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
	+ '     </div>'
	+ '     <div class="modal-body">'
	+ '       <p id="modelMsg"></p>'
	+ '     </div>'
	+ '     <div class="modal-footer">'
	+ '       <button type="button" class="btn btn-danger" id = "nextPage" data-dismiss="modal" >Okay</button>'
	+ '     </div>'
	+ '   </div>'
	+ ' </div>'
	+ '</div>'
	+ '</div>'
	+ '</div>'
	+ ' </div>'
$("#main-div-conf").html(selection);

var iPinSelect;
var oPinSelect;
var switchConfigSelect;
var LedConSelect;

var id=0;
var inputPinVal;
var outputPinVal;
var ledTypeVAl;
var selectedValue;
var selectedOutput;
var wrongConfig = 0 ;
$("#inputPinName").change(function(){
		var selectEl = document.getElementById("inputPinName");
		var selectedOption = selectEl.options[selectEl.selectedIndex];

// get value and name
		 selectedValue = selectedOption.value; // e.g. "D2"
		var selectedName = selectedOption.getAttribute("name");
		$("body").css("padding","0px 0px 0px 0px");	
		inputPinVal = selectedName;
		if(inputPinVal<=0){
			toastr.warning("Select Input Pin.");
		}else{		  
		  $("#outputPinName").prop("disabled",false);			  
 		  $("#inputPinName").prop("disabled",true);	
 		  
		}
		
		
	});

$("#outputPinName").change(function(){
		var selectEl = document.getElementById("outputPinName");
		var selectedOption = selectEl.options[selectEl.selectedIndex];

// get value and name
		 selectedOutput = selectedOption.value; // e.g. "D2"
		var selectedName1 = selectedOption.getAttribute("name");
		$("body").css("padding","0px 0px 0px 0px");	
		outputPinVal = selectedName1;
		if(selectedOutput == 0){
			toastr.warning("Select Output Pin.");
		}else{
			 if (selectedOutput == 2 && selectedValue == 2){
//				toastr.warning("Input and output pin can not be same ");
				wrongConfig++;
				showSwal('Input and output pin can not be same','warning');
			 }else if (selectedOutput == 3 && selectedValue == 3){
//				toastr.warning("Input and output pin can not be same ");
				wrongConfig++;
				showSwal('Input and output pin can not be same','warning');
			 }else if (selectedOutput == 4 && selectedValue == 4){
				 wrongConfig++;
//				toastr.warning("Input and output pin can not be same ");
				showSwal('Input and output pin can not be same','warning');
			 }else if (selectedOutput == 5 && selectedValue == 5){
				 wrongConfig++;
//				toastr.warning("Input and output pin can not be same ");
				showSwal('Input and output pin can not be same','warning');
			 }else if (selectedOutput == 6 && selectedValue == 6){
				 wrongConfig++;
//				toastr.warning("Input and output pin can not be same ");
				showSwal('Input and output pin can not be same','warning');
			 }else if (selectedOutput == 7 && selectedValue == 7){
				 wrongConfig++;
//				toastr.warning("Input and output pin can not be same ");
				showSwal('Input and output pin can not be same','warning');
			 }
			 else{
				$("#ledtype").prop("disabled",false);			  
 		 		 $("#outputPinName").prop("disabled",true);
 		 		 
			}		  
		  
		}
		
		
	});
var inputPin, inputPinName ,code , code1 ;
$("#switchConfig").change(function(){
		$("body").css("padding","0px 0px 0px 0px");	
		inputPin = $("#switchConfig").val();
		var selectE2 = document.getElementById("switchConfig");
		var selectedOption = selectE2.options[selectE2.selectedIndex];
		
		 inputPinName = selectedOption.getAttribute("name");
		if(inputPin<=0){
			toastr.warning("Select Output Pin.");
		}else{
		   $("#inputPinName").prop("disabled",false);
		   		  		  			  
 		  $("#switchConfig").prop("disabled",true);
 	}	
	});
	
	
var material; var code,code1;
$("#ledtype").change(function(){
	$("body").css("padding","0px 0px 0px 0px");	
		material = $("#ledtype").val(); 
		if(material<=0){
			toastr.warning("Select LED Connection Type.");
		}else{	
			
				$("#generateCode").prop("disabled", false);
				$("#compileCode").prop("disabled", false);
				$("#executeCode").prop("disabled", false);
				$("#downloadCode").prop("disabled", false);
				$("#ledtype").prop("disabled", true);	
			
				  	 
		}
		
});



	var flag = false;
	var head = '';

$("#generateCode").click(function () {
	
//	$("#inputPinName").prop("disabled",true);
// 	$("#outputPinName").prop("disabled",true);
// 	$("#ledtype").prop("disabled",true);	
	$("#modelMsg").html("<b class='boldTextGreen'>Code Generated Successfully.</b>");
	flag=true;
		
	$("#codeview").prop("hidden",false);
	hexValue = calculateHex();
	var currentdate = new Date(); 
    var datetime = "Date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " Time "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


	var a = `<div class="scrollable-text-container>"
	<p>`+datetime+`</p><br>	
	
	<pre style="background-color: blue; padding: 8px; border-radius: 6px;">
	<span style="color: yellow;">#include &lt;Wire.h&gt;</span> 
  	<span style="color: yellow;">#include &lt;LiquidCrystal_I2C.h&gt;</span> 
  	</pre>
	<p>		// I2C Address and LCD size (16x2).LiquidCrystal_I2C lcd(0x27, 16, 2);</p>

	<p>	// Define pins for the sensor, motor, and LED</p>
	<p>	const int irSensorPin = ${inputPinName};    &nbsp; &nbsp;&nbsp;&nbsp;// Pin ${inputPinName};  Vout pin of LM35 sensor</p>
	<p>	const int motorPin = ${inputPinVal};  &nbsp; &nbsp;&nbsp;&nbsp; // Pin ${inputPinVal}; for the DC motor</p>
	<p>	const int ledPin = ${outputPinVal};   &nbsp; &nbsp;&nbsp;&nbsp;// Pin ${outputPinVal}; for the LED</p>

	<p>	void setup() {</p>
	<p>	 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;// Initialize the LCD display</p>
	<p>	lcd.init();</p>
	<p>	lcd.backlight();</p>
	<p>	lcd.clear();</p>
	

	<p> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;// Set output pins</p>
	<p>pinMode(motorPin, OUTPUT);</p>
	<p>pinMode(ledPin, OUTPUT);</p>
	
	<p>}</p>

	
	<p>void loop() {</p>
 	<p>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;// Read the analog voltage value from the sensor </p>
  	<p>int sensorValue = analogRead(tempSensorPin);</p>

	<p> &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;// Convert the voltage value to Celsius temperature (for LM35)</p>
	
  	<p>float voltage = sensorValue * (5.0 / 1024.0);</p>
  	<p>float temperatureC = voltage * 100;</p>
  	
  	
  <p>	// Clear the LCD </p>
<p>lcd.clear();</p>

<p>  // Display temperature on the first line</p>
<p>lcd.setCursor(0, 0);</p>
<p>lcd.print("Temp: ");</p>
<p>lcd.print(temperatureC);</p>
<p>lcd.print(" C");</p>

 
  <p>// Check if the temperature is greater than 40&deg;C</p>
 <p> if (temperatureC> 40.0) {</p>
  <p>  // If the condition is true, turn on the LED and motor</p>
<p>digitalWrite(ledPin, HIGH);</p>
<p>digitalWrite(motorPin, HIGH);</p>

 <p>   // Display 'ON' status on the second line</p>
<p>  lcd.setCursor(0, 1);</p>
   <p> lcd.print("MOTOR & LED ON");</p>
 <p>  } </p>

<p>  // Otherwise (if temperature is 40&deg;C or less)</p>
<p>  else { </p>
<p>    // Keep the LED and motor off </p>
<p> digitalWrite(ledPin, LOW);</p>
<p> digitalWrite(motorPin, LOW);</p>
<p>   } </p>

<p>   // Wait for a short duration</p>
<p> delay(1000); </p>
<p> }</p>


</div>


`
//		+'<p></p>'

    $("#demo").html(a);

    $("#errorview").prop("hidden",false);
   	var b = '<b class="blink_text">_</b><br><br><br><br><br><br><br>'
	$("#errordemo").html(b);

});

var compileflag=false;
$("#compileCode").click(function(){
	
	compileflag=true;
	if(flag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Check Terminal Window Below Code for Errors.</b>");
		var b1 = '<p>Program Compiled Successfully.</p><br><br>'
		$("#errordemo").html(b1);
	}else{
		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First.</b>");
	}
});
 

$("#executeCode").click(function () {
	wrongConfig++;
	if(compileflag==true){
		$("#modelMsg").html("<b class='boldTextGreen'>Code Executed Successfully.</b>");
			iPinSelect = $("#inputPinName").val();
			oPinSelect = $("#outputPinName").val();
			LedConSelect = $("#ledtype").val();
			switchConfigSelect= $("#switchConfig").val();
			$("#canvas-div").html('');
			$("#canvas-div1").html('');
//			$("#plot").prop("hidden",false);
			resultJson.configuration = wrongConfig;
			console.log(resultJson);
			 $("#canvas-div").prop('hidden',false);	
			 Mimic_Switch();
//			mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);
    
	}else{
//		mimic(iPinSelect,oPinSelect,switchConfigSelect,LedConSelect);
		$("#modelMsg").html("<b class='boldTextGreen'>Please Compile The Code First</b>");
	}
	
	
 
});

  var doc = new jsPDF();
	var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
   

$("#downloadCode").click(function () {
	 if(flag==true){
			doc.fromHTML($('#demo').html(), 15, 15, {
        	'width': 170,
            'elementHandlers': specialElementHandlers
    		});
    		doc.save('sourcecode.pdf');
//			$("#modelMsg").html("<b class='boldTextGreen'>Download Code File Successfully.</b>");	
	}else{
//		$("#modelMsg").html("<b class='boldTextGreen'>Please Generate The Code First and Then You Can Download Code File.</b>");
		toastr.warning("Please Generate The Code First and Then You Can Download Code File.")
	}

 
});


//$(document).ready(function () {
    // Function to calculate hex value and update the input field
    function calculateHex() {
        var frequency = $("#fqVal").val();
        var hexValue;

        // Perform conversion based on selected frequency 
        switch (parseInt(frequency)) {
            case 1:
                hexValue = "0x42"; // Example value for 1 MHz
                break;
            case 2:
                hexValue = "0x52"; // Example value for 2 MHz
                break;
            case 3:
                hexValue = "0x62"; // Example value for 4 MHz
                break;

            case 4:
                hexValue = "0x72"; // Example value for 8 MHz
                break;
            case 5:
                hexValue = "0x12"; // Example value for 125 MHz
                break;
            case 6:
                hexValue = "0x22"; // Example value for 250 MHz
                break;
            case 7:
                hexValue = "0x32"; // Example value for 500 MHz
                break;
            // Add more cases for other frequencies as needed
            default:
                hexValue = "Unknown"; // Default value if frequency is not recognized
        }
		return hexValue;
        // Update the input field with the calculated hex value
//        $("#hexValue").val(hexValue);
    }


//}
