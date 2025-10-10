function Mimic_Switch(){
	    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	timerMasterJson.configuration = $("#counter").text();
	seconds = 0;
	 updateCounter();
	console.log(timerMasterJson);
	var w = 650;
	var h = 550;
	
	var width = $(window).width();

	if ($(window).width() < 500) {
		width = $(this).width();
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	} else {
		paper = new Raphael(document.getElementById('canvas-div'), '100%', '100%');
		paper.setViewBox(0, 0, w, h, true);
		paper.setSize('100%', '100%');
	}
	

var x=10;
var y=10;	

var interval_plot1=1000/1000;
var offTime1=500/1000;
var onTime1=500/1000;
var onTime11=onTime1+offTime1;
var object;
var ardinoPin = paper.image("images/ArdiunoPin.png",x+200,y+200,200, 250);
var sensoe = paper.image("images/sensor.png",x+50,y+50,100, 100).rotate(220);
if(sensorType == 2){
	var sensoe = paper.image("images/capacitive.png",x+80,y+40,60, 60).rotate(200);
}


//var replay = paper.image("images/relay.png",x+300,y+400,150, 100);
var checkStatus = paper.image("images/checkBtn1.png",x+380,y-10,130, 50);
var next = paper.image("images/next.png",x+380,y-10,100, 40);
next.hide();
var scaleBox = paper.rect(x+160, y+120, 100, 40,5).attr({fill: "#edc26b",stroke: "#2c3e50", "stroke-width": 2});  // motor rrect
var line_scale = paper.path("M"+(x+180)+" "+(y+150)+"l 5 5 l -5 -5 l 5 -5 l -5 5 l  60 0 l -5 5 l 5 -5 l -5 -5 l 5 5 ").attr({'stroke-width':1.5,stroke: "#000"});
var min = paper.image("images/minus.png",x+170,y+122,20, 20);
var max = paper.image("images/plus.png",x+230,y+122,20, 20);
var wave = paper.image("images/wave1.png",x+140,y+50,40, 40);
if(material == 1){
	object = paper.image("images/metal_img.png",x+200,y+30,100, 100).attr({ cursor: "pointer" });
}else{
	object = paper.image("images/btl.png",x+200,y+30,100, 100).attr({ cursor: "pointer" });
}
 

object.hide();
min.hide();
max.hide();
line_scale.hide();
scaleBox.hide();

//  var quadCurve = paper.path("M"+(x+310)+" "+(y+118)+" l 50 -1").attr({
//          stroke: "#3498db",
//          "stroke-width": 4
//        });


var t = paper.path("M"+(x+50)+" "+(y+110)+"l  0 30 l 40 0 l 0 20").attr({'stroke-width':3,stroke: "#3498db"});
var t = paper.path("M"+(x+45)+" "+(y+100)+"l  0 80 l 250 0 ").attr({'stroke-width':3,stroke: "#ed1f37"});
var t = paper.path("M"+(x+40)+" "+(y+90)+"l  0 200 l 50 0 ").attr({'stroke-width':3,stroke: "#000"});


var ground1= paper.image("images/ground.png",x+160,y+450,30, 21);

var ground1= paper.image("images/ground.png",x+550,y+140,20, 15);
var ground1= paper.image("images/ground.png",x+75,y+160,20, 15);
var t1 = paper.path("M"+(x+180)+" "+(y+450)+"l 0 -20  l 40 0 ").attr({'stroke-width':3});


  var img = paper.image("images/fan.png", x+510, y+45, 50, 45);
    paper.circle(x+535, y+70, 30).attr({'stroke-width':3});
      var diode = paper.image("images/diode1.png", x+450, y+240, 40, 80);
//      var coil = paper.image("images/coil.png", x+500, y+250, 40, 75);
       var coil = paper.image("images/redCoil.png", x+500, y+230, 40, 100);
       var trans = paper.image("images/transmitter.png", x+530, y+400, 100, 120);
      var resiter =  paper.image("images/resistorSymbol.png",x+460,y+405,100, 55);
      var resiter =  paper.image("images/resistorSymbol.png",x+20,y+452,100, 55);
       
//      function blink() {
//      coil.animate({opacity: 0.5}, 500, "easeIn", function () {
//        coil.animate({opacity: 1}, 500, "easeOut", blink);
//      });
//    }
//      blink();

var blinking = false;  // control flag

function blink() {
  blinking = true;  // start blinking
  function loop() {
    if (!blinking) return; // stop if flag is false
    coil.animate({opacity: 0.5}, 500, "easeIn", function () {
      if (!blinking) return;
      coil.animate({opacity: 1}, 500, "easeOut", loop);
    });
  }
  loop();
}

// Function to stop blinking
function stopBlink() {
  blinking = false;
  coil.stop();         // stop ongoing animation immediately
  coil.attr({opacity: 1}); // ensure fully visible
}
motor(x,y);
function motor(x,y){
	

var r = paper.path("M"+(x+510)+" "+(y+130)+"l  0 20").attr({'stroke-width':3,stroke: "#000"});
var r1 = paper.path("M"+(x+560)+" "+(y+130)+"l  0 10").attr({'stroke-width':3,stroke: "#000"});


     var rect1 = paper.rect(x+495, y+100, 80, 30,4).attr({
      fill: "#39ccaf",
      stroke: "#2c3e50",
      "stroke-width": 3
    });  // motor rrect
    
    var dctxt = paper.text(x+535, y+115,"DC Motor").attr({"font-weight":"bold",'font-size': 13});
     





//    // Add red overlay rectangle same size as coil
//    var glow = paper.rect(50, 50, 300, 300);
//    glow.attr({
//      fill: "red",
//      opacity: 0.2,   // start faint
//      "stroke-width": 0
//    });
//
//    // Function to make it glow continuously
//    function glowEffect() {
//      glow.animate({opacity: 0.6}, 600, "easeIn", function () {
//        glow.animate({opacity: 0.2}, 600, "easeOut", glowEffect);
//      });
//    }
	


    
    var switchCircleNAme = paper.text(x+490, y+140,"(+Ve)").attr({"font-weight":"bold",'font-size': 10});
	var switchCircleNAme = paper.text(x+580, y+140,"(-Ve)").attr({"font-weight":"bold",'font-size': 10});
 }   
 Power(x,y-30);
 function Power(x,y){
	 
 
     var rect1 = paper.rect(x+380, y+80, 60, 70,4).attr({
      fill: "#39ccaf",
      stroke: "#2c3e50",
      "stroke-width": 3
    });  // battery rrect	
    
    
    
     var dctxt = paper.text(x+410, y+95,"12V").attr({"font-weight":"bold",'font-size': 13});
     var dctxt = paper.text(x+410, y+110,"Power").attr({"font-weight":"bold",'font-size': 13});
      var dctxt = paper.text(x+410, y+130,"Supply").attr({"font-weight":"bold",'font-size': 13});
      
       var switchCircleNAme = paper.text(x+370, y+160,"(+Ve)").attr({"font-weight":"bold",'font-size': 10});
      var switchCircleNAme = paper.text(x+440, y+160,"(-Ve)").attr({"font-weight":"bold",'font-size': 10});	
            var r = paper.path("M"+(x+390)+" "+(y+150)+"l  0 40").attr({'stroke-width':3,stroke: "#000"});
  	 var r1 = paper.path("M"+(x+420)+" "+(y+150)+"l  0 20").attr({'stroke-width':3,stroke: "#000"});
  	 var ground1= paper.image("images/ground.png",x+410,y+170,20, 15);
  }    
      

  	  var vot = paper.path("M"+(x+210)+" "+(y+250)+"l  20 0").attr({'stroke-width':1,stroke: "#000"});
    var diodeLines = paper.path("M"+(x+470)+" "+(y+240)+"l  50 0").attr({'stroke-width':3,stroke: "#000"});
    var diodeLines = paper.path("M"+(x+470)+" "+(y+320)+"l  50 0").attr({'stroke-width':3,stroke: "#000"});
  
  var diodeLines = paper.path("M"+(x+470)+" "+(y+320)+"l  0 50 l 120 0 l 0 30").attr({'stroke-width':2,stroke: "#000"});
    var diodeLines = paper.path("M"+(x+520)+" "+(y+240)+"l  0 -40 l -340 0 l 0 50 l 30 0").attr({'stroke-width':2,stroke: "#000"}); 
     var diodeLines = paper.path("M"+(x+100)+" "+(y+480)+"l  330 0").attr({'stroke-width':3,stroke: "#000"});   
    
//      var NC  = paper.path("M"+(x+550)+" "+(y+270)+"l  0 -20 l 20 0 ").attr({'stroke-width':2,stroke: "#000"});  
     var No  = paper.path("M"+(x+550)+" "+(y+300)+"l  0 20 l 70 0  l 0 -90").attr({'stroke-width':2,stroke: "#000"});
     var com  = paper.path("M"+(x+570)+" "+(y+290)+" l 20 0 l 0 -40").attr({'stroke-width':2,stroke: "#000"});
//     var line = paper.path("M"+(x+550)+" "+(y+270)+" l 20 20 ").attr({'stroke-width':2,stroke: "#000"});
	var m1 = paper.circle(x+570, y+290, 2).attr({fill: "black", stroke: "black", "stroke-width": 2}); 
	var m1 = paper.circle(x+550, y+300, 2).attr({fill: "black", stroke: "black", "stroke-width": 2});
 	var m1 = paper.circle(x+550, y+270, 2).attr({fill: "black", stroke: "black", "stroke-width": 2});
//	var m1 = paper.circle(x+570, y+250, 2).attr({fill: "black", stroke: "black", "stroke-width": 2}); 
	
	var dctxt = paper.text(x+240, y+250,"5V").attr({"font-weight":"bold",'font-size': 13});
	var dctxt = paper.text(x+240, y+430,"GND").attr({"font-weight":"bold",'font-size': 13});
	var dctxt = paper.text(x+50, y+300,"input").attr({"font-weight":"bold",'font-size': 13});
	var dctxt = paper.text(x+60, y+150,"GND").attr({"font-weight":"bold",'font-size': 13});
	var dctxt = paper.text(x+100, y+190,"VCC").attr({"font-weight":"bold",'font-size': 13});
	var dctxt = paper.text(x+70, y+450,"10k\u03A9").attr({"font-weight":"bold",'font-size': 13,'fill':'#ed1f37',"font-family": "Arial, Helvetica, sans-serif"});
	var dctxt = paper.text(x+500, y+410,"4.7k\u03A9").attr({"font-weight":"bold",'font-size': 13,'fill':'#ed1f37',"font-family": "Arial, Helvetica, sans-serif"});
	var dctxt = paper.text(x+600, y+460,"E").attr({'font-size': 13,"font-family": "Arial, Helvetica, sans-serif"});
	var dctxt = paper.text(x+530, y+470,"2N2222-NPN Transistor").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif"});

	var dctxt = paper.text(x+550, y+420,"B").attr({'font-size': 13,"font-family": "Arial, Helvetica, sans-serif"});
 	var dctxt = paper.text(x+600, y+400,"C").attr({'font-size': 13,"font-family": "Arial, Helvetica, sans-serif"});
 	var dctxt = paper.text(x+490, y+300,"anode").attr({'font-size': 10,"font-family": "Arial, Helvetica, sans-serif"});
 	var dctxt = paper.text(x+490, y+250,"cathod").attr({'font-size': 10,"font-family": "Arial, Helvetica, sans-serif"});
 	var dctxt = paper.text(x+500, y+230,"(+ve)").attr({'font-size': 10,"font-family": "Arial, Helvetica, sans-serif",'fill':'#ed1f37'});
 	var dctxt = paper.text(x+500, y+330,"(-ve)").attr({'font-size': 10,"font-family": "Arial, Helvetica, sans-serif",'fill':'#ed1f37'});
 	var dctxt = paper.text(x+560, y+260,"NC").attr({'font-size': 10,"font-family": "Arial, Helvetica, sans-serif",'fill':'blue'});
    var dctxt = paper.text(x+570, y+310,"NO").attr({'font-size': 10,"font-family": "Arial, Helvetica, sans-serif",'fill':'blue'});
    var dctxt = paper.text(x+606, y+280,"COM").attr({'font-size': 10,"font-family": "Arial, Helvetica, sans-serif",'fill':'blue'});
    var dctxt = paper.text(x+440, y+290,"Diode").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif"});
    var dctxt = paper.text(x+440, y+270,"(1N4007)").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif"});
    
    
//     var line = paper.path("M"+(x+550)+" "+(y+270)+" l 20 20 ").attr({'stroke-width':2,stroke: "#000"});
     var line = paper.path("M"+(x+570)+" "+(y+290)+" l -18 -18 ").attr({'stroke-width':2,stroke: "#000"});
    // Rotation center (adjust if needed)
    var cx = x + 570;
    var cy = y + 290;

    // Function to rotate line forward by 20°
    function rotateLine() {
      line.animate(
        { transform: "r-70," + cx + "," + cy },
        800,  // duration in ms
        "easeInOut"
      );
    }

    // Function to reset line back to 0°
    function resetLine() {
      line.animate(
        { transform: "r0," + cx + "," + cy },
        800,  // duration in ms
        "easeInOut"
      );
    }

    // Example: rotate after 1s, reset after 3s


  
    
    

    // Rotation variables
    var angle = 0;
    var angle1 = 0;
    var rotationInterval = null;
     var rotationInterval1 = null;

    // Function to rotate image
    function rotateImage(el, angle) {
      var bbox = el.getBBox();
      el.transform("r" + angle + "," + (bbox.x + bbox.width / 2) + "," + (bbox.y + bbox.height / 2));
    }
    
      function rotateImage1(el, angle1) {
      var bbox = el.getBBox();
      el.transform("r" + angle1 + "," + (bbox.x + bbox.width / 2) + "," + (bbox.y + bbox.height / 2));
    }

    // Start rotation
    function startRotation() {
      if (rotationInterval) return; // prevent multiple intervals
      rotationInterval = setInterval(function () {
        angle += 5; // rotation speed
        rotateImage(img, angle);
      }, 10);
    }

    // Stop rotation
    function stopRotation() {
      clearInterval(rotationInterval);
      rotationInterval = null;
    }
    
 
	    // Start rotation
    function startRotationWave() {
      if (rotationInterval1) return; // prevent multiple intervals
      rotationInterval1 = setInterval(function () {
        angle1 += 5; // rotation speed
        rotateImage1(wave, angle1);
      }, 100);
    }

    // Stop rotation
    function stopRotationWave() {
      clearInterval(rotationInterval1);
      rotationInterval1 = null;
    }
	
//	  startRotation();
	
	
	
	
	
    // Store original position
    var originalX = x+200;
    var originalY = y+30;
    var startValue = 10;
		var endValue ;  var currentValue;
    // Function to move image to the left
    function moveImageLeft() {
	
      object.animate(
        { x: originalX - 5 }, // move 200px to the LEFT
        1000, // 1 second
        "easeInOut"
      );
      originalX = originalX - 5 ;
      startValue = startValue - 1
       counter.attr("text", startValue);
    }

    // Function to reset image back
    function resetImage() {

      object.animate(
        { x: originalX + 5}, // back to original
        1000,
        "easeInOut"
      );
        originalX = originalX + 5 ;
        startValue = startValue +1;
         counter.attr("text", startValue);
    }

    // Example calls
//    setTimeout(moveImageLeft, 1000);  // move left after 1s
//    setTimeout(resetImage, 3000);     // reset after 3s
	
	

	 // Start and end values
   
    if(sensorType == 1){
		endValue = 8;
	}else{
		endValue = 2;
	}
  
    var duration = 1000; // 1 second

    // Draw text
    var counter = paper.text(x+203, y+140, startValue).attr({
      "font-size": 10,
      "font-family": "Arial, Helvetica, sans-serif",
      "fill": "black"
    });
    
     var counter1 = paper.text(x+220, y+140, "mm").attr({
      "font-size": 10,
      "font-family": "Arial, Helvetica, sans-serif",
      "fill": "black"
    });
    
	counter.hide();
	counter1.hide();
    var startTime = null;
    var animating = false;

    // Countdown animation (20 → 8)
    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = (timestamp - startTime) / duration;

      if (progress > 1) progress = 1;

      var currentValue = Math.round(startValue + (endValue - startValue) * progress);
      counter.attr("text", currentValue);

      if (progress < 1 && animating) {
        requestAnimationFrame(animateCount);
      } else {
        animating = false;
      }
    }

    // Reset animation (current → 20)
    function animateReset(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = (timestamp - startTime) / duration;

      if (progress > 1) progress = 1;

      var currentVal = parseInt(counter.attr("text")); // current text value
      var currentValue = Math.round(currentVal + (startValue - currentVal) * progress);
      counter.attr("text", currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateReset);
      } else {
        counter.attr("text", startValue); // ensure final value = 20
      }
    }

    // Start countdown
    function startCountdown() {
      if (!animating) {
        animating = true;
        startTime = null;
        requestAnimationFrame(animateCount);
      }
    }

    // Reset countdown (animate back up to 20)
    function resetCountdown() {
      animating = false;
      startTime = null;
      requestAnimationFrame(animateReset);
    }
    
    var coorectflg = 0;
	var	wrongflg = 0;
 
 
  // Draw points
  var points = [
	  
	paper.circle(x+400, y+275, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d3
	paper.circle(x+400, y+290, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d4
	paper.circle(x+400, y+305, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d5
	paper.circle(x+400, y+325, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d6
	paper.circle(x+400, y+340, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //d7
	paper.circle(x+400, y+360, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}) ,//d8
	
	paper.circle(x+470, y+433, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //base point to output pin
	
	paper.circle(x+620, y+230, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //motor 
	paper.circle(x+510, y+150, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),
	
	paper.circle(x+590, y+250, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),
    

	
	paper.circle(x+390, y+160, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //power suplly +
	paper.circle(x+300, y+180, 5).attr({fill: "red", stroke: "black", "stroke-width": 2}),   // sensor points red
	
	paper.circle(x+180, y+250, 0).attr({fill: "blue", stroke: "black", "stroke-width": 2}),// 5V supply point
	paper.circle(x+90, y+290, 5).attr({fill: "black", stroke: "black", "stroke-width": 2}),// black line point
	paper.circle(x+30, y+480, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //left point resgister
	paper.circle(x+110, y+480, 0).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //right point resgister
	paper.circle(x+430, y+480, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}) //left point resgister input pin
  ];
  
  
   // Assign IDs
  points.forEach((p, i) => p.data("id", "P" + (i+1)));

  var firstPoint = null;
  var connections = [];
  var  correctSetB =[];
  var correctSetA = [];	
  var inputPt , outputPt ; 
//  // ✅ Allowed correct connections
//  var correctConnections = [
//    ["P1", "P2"] , // only P1-P2 is correct
//    ["P3", "P4"],
//    ["P5", "P6"]
//  ];

  
    // ✅ Two different arrays of correct connections
  if (selectedOutput == 2){
	   correctSetA = [
		["P1", "P7"],
	 // d10 to ouput 
	    ["P8", "P9"], //motor to no
	     ["P10", "P11"],
	      ["P12", "P11"]
  		];
  		outputPt = paper.circle(x+400, y+275, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
  		
   } else if (selectedOutput == 3){
	   correctSetA = [
		 ["P2", "P7"],
		 // d11 to ouput 
	    ["P8", "P9"] ,//motor to no
	    ["P10", "P11"],
	     ["P12", "P11"]
  		];
  		outputPt = paper.circle(x+400, y+290, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   } 
   else if (selectedOutput == 4){
	   correctSetA = [
		["P3", "P7"], // d13 to ouput 
	     ["P8", "P9"], //motor to no
	     ["P10", "P11"],
	      ["P12", "P11"]
 		 ]	;
 		 outputPt = paper.circle(x+400, y+305, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   } else if (selectedOutput == 5){
	   correctSetA = [
		["P4", "P7"], // d3 to ouput 
	     ["P8", "P9"], //motor to no
	     ["P10", "P11"],
	      ["P12", "P11"]
 		 ]	;
 		 outputPt =	paper.circle(x+400, y+325, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   }else if (selectedOutput == 6){
	   correctSetA = [
		["P5", "P7"], // d4 to ouput 
	     ["P8", "P9"] ,//motor to no
	     ["P10", "P11"],
	      ["P12", "P11"]
 		 ]	;
 		 outputPt = paper.circle(x+400, y+340, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   }else if (selectedOutput == 7){
	   correctSetA = [
		["P6", "P7"], // d5 to ouput 
	    ["P8", "P9"], //motor to no
	    ["P10", "P11"],
	     ["P12", "P11"]
 		 ]	;
 		 outputPt = paper.circle(x+400, y+360, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   }
  outputPt.hide();
	
// Input
	  if(selectedValue == 2){
		  
		  correctSetB = [ ["P1", "P17"], // d3 to switch p5
		  ["P16", "P13"],
		   ["P14", "P15"]
		  ];
		  inputPt = paper.circle(x+400, y+275, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 3){
		 
		  correctSetB = [ ["P2", "P17"], // d4 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		  inputPt = paper.circle(x+400, y+290, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 4){
	
		  correctSetB = [ ["P3", "P17"], // d5 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		   inputPt = paper.circle(x+400, y+305, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 5){
		 
		  correctSetB = [ ["P4", "P17"] ,// d6 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		  inputPt =	paper.circle(x+400, y+325, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 6){
		 
		  correctSetB = [ ["P5", "P17"], // d7 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		   inputPt = paper.circle(x+400, y+340, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 7){
		 
		  correctSetB = [ ["P6", "P17"], // d8 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		  inputPt = paper.circle(x+400, y+360, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }
	  
	  inputPt.hide();

var  coorectflg;
var  wrongflg;

  function showConnections() {
//    document.getElementById("output").textContent = "Connections:\n" + 
//      connections.map(c => c.id1 + " ↔ " + c.id2 + (c.correct ? " ✅" : " ❌")).join("\n");
	console.log(	"Connections:\n" + 
     connections.map(c => c.id1 + " ↔ " + c.id2 + (c.correct ? " ✅" : " ❌")).join("\n"));
       updateSummary();
  }

  function showMessage(msg, color="red") {
    var msgBox = document.getElementById("message");
    msgBox.style.color = color;
    msgBox.textContent = msg;
    setTimeout(() => msgBox.textContent = "", 2000);
  }
  
    // ✅ Update summary counts
  function updateSummary() {
    let correctCount = connections.filter(c => c.correct).length;
    let wrongCount = connections.filter(c => !c.correct).length;
    coorectflg = correctCount;
    wrongflg = wrongCount;

   console.log(
      "✅ Correct connections: " + correctCount + "<br>" +
      "❌ Wrong connections: " + wrongCount);
  }

//  function isCorrectConnection(id1, id2) {
//    return correctConnections.some(c =>
//      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
//    );
//  }

  // check if connection belongs to Set A or Set B
  function checkConnectionSet(id1, id2) {
    let inSetA = correctSetA.some(c =>
      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
    );
    if (inSetA) return "A";

    let inSetB = correctSetB.some(c =>
      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
    );
    if (inSetB) return "B";

    return null; // wrong
  }

  // Function to draw a curved path between two points
  function drawCurve(x1, y1, x2, y2) {
    var midX = (x1 + x2) / 2;
    var midY = (y1 + y2) / 2 - 50; // curve height
    return `M${x1},${y1} Q${midX},${midY} ${x2},${y2}`;
  }
	

  function attachClick(point) {
    point.click(function () {
      if (firstPoint === null) {
        firstPoint = this;
        this.attr({stroke: "orange", "stroke-width": 4});
      } else {
        if (firstPoint !== this) {
          var id1 = firstPoint.data("id");
          var id2 = this.data("id");

          // Check duplicate
          var exists = connections.some(c =>
            (c.id1 === id1 && c.id2 === id2) || (c.id1 === id2 && c.id2 === id1)
          );
          if (exists) {
//            showMessage("⚠ Duplicate connection between " + id1 + " and " + id2);
          } else {
            // Draw CURVED line instead of straight
            var path = drawCurve(firstPoint.attr("cx"), firstPoint.attr("cy"), this.attr("cx"), this.attr("cy"));
            var line = paper.path(path)
                            .attr({stroke: "black", "stroke-width": 2, cursor: "pointer"});

            // ✅ Send line behind circles
            line.toBack();

            // Validate connection
//            var correct = isCorrectConnection(id1, id2);
			 // Validate connection against Set A / Set B
            var set = checkConnectionSet(id1, id2);
            var correct = (set !== null);
            if (correct) {
              line.attr({stroke: "green", "stroke-width": 3});
             
             
//              showMessage("✅ Correct connection: " + id1 + " ↔ " + id2, "green");
		
            } else {
				
              line.attr({stroke: "red", "stroke-width": 3}); //green 
//              showMessage("❌ Wrong connection: " + id1 + " ↔ " + id2, "red");
            }

            // Store connection
            var conn = {id1: id1, id2: id2, line: line, correct: correct};
            connections.push(conn);

            // Allow deletion on click
            line.click(function () {
              line.remove();
              connections = connections.filter(c => c !== conn);
              showConnections();
//              showMessage("❌ Connection " + id1 + " ↔ " + id2 + " deleted");
            });
          }
          showConnections();
        }
        // Reset highlight
        firstPoint.attr({stroke: "black", "stroke-width": 2});
        firstPoint = null;
      }
    });
  }

  // Attach clicks
  points.forEach(p => attachClick(p));
 
 function disableAllPoints() {
  points.forEach(p => {
    p.unclick(); // removes click event
    p.attr({cursor: "default"}); // optional: reset cursor
  });
}


var  wrongAttempts = 0;
checkStatus.click(function(){
		wrongAttempts++;	
	if(coorectflg == 6 ){
		statusFlag=true;				
//		$("#plot").html("");
//		$("#plot").prop("hidden",false);
//		start();
//		start(1,0,1);
		start(1,0,1);
		startRotationWave();
		object.show();
		line_scale.show();
		counter.show();
		min.show();
       max.show();
    	counter1.show();
       scaleBox.show();
		checkStatus.hide();

		
//		toastr.success("Connection Established Successfully.Now Click on Switch.");	
		showSwal('Connection Established Successfully.Now Click on Object.','success');
//		switchpress=paper.text(x+365,y+3,"Click and Hold the Switch").attr({'font-size':14});

		
		
		disableAllPoints();
		
	}else if(coorectflg < 6 || wrongflg >= 1){
		
//		toastr.warning("Some Connections are missing.")
		if(wrongAttempts < 3){
			
			showSwal('Some Connections are missing or wrong','error');
		}else{
			Swal.fire({
					title: 'Appropriate connections',
					html: `<div>
                <img src='images/proximityCorrect  .png' class='img-fluid' 
                     style='border-style: double; border-color: black; display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>
           </div>`,
					width: '80%', // Increases the width of the modal
					confirmButtonText: 'Try Again'
				});
		}
		
	}else{
		showSwal('First Establish Connection. Please Try Again','error');
//		toastr.warning("First Establish Connection. Please Try Again.");
	}
	

	
	
	});
	
	
	min.click(function(){
		onTime1 = 1000/1000;
		offTime1 = 0/1000;
		setRedflag=true;
	if(startValue > 0){
		moveImageLeft();
		
	if(startValue <= endValue){
		rotateLine();
		blink();
		startRotation();
		inputPt.show();
		outputPt.show();
		start(interval_plot1,onTime1,offTime1);
		next.show();
	}
	}else{
		showSwal('Object is in minimum range','warning');
	}	
//	setTimeout(rotateLine, 1900);
//	setTimeout(blink, 1900);
//	
//	 setTimeout( startRotation, 2200);
	    
  		
	});
	
	max.click(function(){
		
		onTime1 = 0/1000;
		offTime1 = 1000/1000;
		setRedflag=false;
		
		resetImage();
		 
		 if(startValue > endValue){
			 start(interval_plot1,onTime1,offTime1);
			 resetLine();
			 stopBlink();
			 inputPt.hide();
		  	outputPt.hide();
			 stopRotation();
		
			 }
		
//		  setTimeout(resetLine, 1200);
//		  setTimeout( stopBlink, 1200);
//		 
//		   setTimeout( stopRotation, 1300);
	});
	
	
	next.click(function(){
		resultJson.mimic = wrongAttempts;
			 $('#plot').prop('hidden',true);
			  showQuestions();
		
	})
	
	
	
	
// object.mousedown(function () {
//      object.animate({x: originalX - 50}, 500, "easeInOut"); // move left & hold
//      	onTime1 = 1000/1000;
//		offTime1 = 0/1000;
//		setRedflag=true;
//		
//		inputPt.show();
//		outputPt.show();
//
//	startCountdown();	
//	setTimeout(rotateLine, 600);
//	setTimeout(blink, 600);
//	
//	 setTimeout( startRotation, 700);
//	  setTimeout( start(interval_plot1,onTime1,offTime1), 700);
//    });
//
//    // When mouse button is released → return to original position
//    object.mouseup(function () {
//      object.animate({x: originalX}, 600, "easeInOut"); // go back smoothly
//      
//      	onTime1 = 0/1000;
//		offTime1 = 1000/1000;
//		setRedflag=false;
//		start(interval_plot1,onTime1,offTime1);
//		 inputPt.hide();
//		outputPt.hide();
//		resetCountdown();
//		
//		  setTimeout(resetLine, 600);
//		  setTimeout( stopBlink, 600);
//		 
//		   setTimeout( stopRotation, 650);
//    });
    
    
	
}