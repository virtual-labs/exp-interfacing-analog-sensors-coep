function Mimic_Switch(){
	    $("#centerText1").html('MIMIC');
    $("#centerText2").html('CONFIGURATION');
    $('#canvas-div').removeAttr('width');
	$('#canvas-div').removeAttr('height');
	timerMasterJson.configuration = $("#counter").text();
	$("#generateCode,#compileCode,#executeCode").prop('disabled',true);
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
var y=50;	

var interval_plot1=1000/1000;
var offTime1=500/1000;
var onTime1=500/1000;
var onTime11=onTime1+offTime1;
var object;
var wood;
var ardinoPin = paper.image("images/ArdiunoPin.png",x+200,y+200,200, 250);
var sensoe = paper.image("images/tempSensor.png",x+33,y+40,140, 100).rotate(31);
//if(sensorType == 2){
//	var sensoe = paper.image("images/capacitive.png",x+80,y+40,60, 60).rotate(200);
//}


//var replay = paper.image("images/relay.png",x+300,y+400,150, 100);
var checkStatus = paper.image("images/checkBtn1.png",x+50,y-30,130, 50);
var lcd = paper.image("images/lcd.png",x+380,y-70,250, 100);
var next = paper.image("images/next.png",x+50,y-30,100, 40);
next.hide();
var scaleBox = paper.rect(x+160, y+120, 100, 40,5).attr({fill: "#edc26b",stroke: "#2c3e50", "stroke-width": 2});  // motor rrect
var line_scale = paper.path("M"+(x+180)+" "+(y+150)+"l 5 5 l -5 -5 l 5 -5 l -5 5 l  60 0 l -5 5 l 5 -5 l -5 -5 l 5 5 ").attr({'stroke-width':1.5,stroke: "#000"});
var min = paper.image("images/minus.png",x+170,y+122,20, 20);
var max = paper.image("images/plus.png",x+230,y+122,20, 20);
//var wave = paper.image("images/wave1.png",x+140,y+50,40, 40);
if(material == 1){
	object = paper.image("images/metal_img.png",x+200,y+30,0, 0).attr({ cursor: "pointer" });
	wood = paper.image("images/wood.png",x+200,y+90,50, 20).attr({ cursor: "pointer" });
}else{
	object = paper.image("images/glass.png",x+200,y+30,100, 100).attr({ cursor: "pointer" });
}

 

//object.hide();
wood.hide();
min.hide();
max.hide();
line_scale.hide();
scaleBox.hide();

//  var quadCurve = paper.path("M"+(x+310)+" "+(y+118)+" l 50 -1").attr({
//          stroke: "#3498db",
//          "stroke-width": 4
//        });


var t = paper.path("M"+(x+43)+" "+(y+93)+"l  -20 0 l 0 340").attr({'stroke-width':3,stroke: "#3498db"});
var t = paper.path("M"+(x+45)+" "+(y+95)+"l  0 155 l 70 0 ").attr({'stroke-width':3,stroke: "#ed1f37"});
var t = paper.path("M"+(x+42)+" "+(y+85)+" l -40 0l  0 250 l 50 0 ").attr({'stroke-width':3,stroke: "#000"});

var t = paper.path("M"+(x+200)+" "+(y+250)+" l 0 -70 l 140 0 0 -230 l 50 0   ").attr({'stroke-width':1,stroke: "#ed1f37"});//red
var t = paper.path("M"+(x+205)+" "+(y+430)+" l 0 -240  l 145 0 l0  -235 l 40 0 ").attr({'stroke-width':1,stroke: "#000"}); //black
var t = paper.path("M"+(x+215)+" "+(y+381)+"l -20 0 l 0 -210  l 140 0 l0  -225 l 50 0 ").attr({'stroke-width':1,stroke: "#3498db"}); //blue
var t = paper.path("M"+(x+215)+" "+(y+400)+"l -25 0 l 0 -235  l 140 0 l0  -223 l 50 0 ").attr({'stroke-width':1,stroke: "#1fa125"}); //green

var m1 = paper.circle(x+200, y+250, 2).attr({fill: "#ed1f37", stroke: "#ed1f37"}); 
var m1 = paper.circle(x+205, y+430, 2).attr({fill: "#000", stroke: "#000"}); 
var m1 = paper.circle(x+210, y+381, 2).attr({fill: "#3498db", stroke: "#3498db"}); 
var m1 = paper.circle(x+210, y+400, 2).attr({fill: "#1fa125", stroke: "#1fa125"}); 

var ground1= paper.image("images/ground.png",x+160,y+450,30, 21);

var ground1= paper.image("images/ground.png",x+550,y+140,20, 15);
//var ground1= paper.image("images/ground.png",x+75,y+160,20, 15);
var t1 = paper.path("M"+(x+180)+" "+(y+450)+"l 0 -20  l 40 0 ").attr({'stroke-width':3});


  var img = paper.image("images/fan.png", x+510, y+45, 50, 45);
    paper.circle(x+535, y+70, 30).attr({'stroke-width':3});
      var diode = paper.image("images/diode1.png", x+450, y+240, 40, 80);
     
//      var coil = paper.image("images/coil.png", x+500, y+250, 40, 75);
       var coil = paper.image("images/redCoil.png", x+500, y+230, 40, 100);
       var trans = paper.image("images/transmitter.png", x+530, y+400, 100, 120);
      var resiter =  paper.image("images/resistorSymbol.png",x+460,y+405,100, 55);
    
     
      var ledoff = paper.image("images/LedoffMirror.png",x+550,y+330,80, 50);
       var ledon = paper.image("images/ledMirror.png", x+550, y+330, 80,50);
      ledon.hide();
//     paper.circle(x+580, y+352, 27).attr({stroke: "black", "stroke-width": 1})
     var d1 = paper.path("M"+(x+630)+" "+(y+355)+"l  0 170 l -200 0  M"+(x+370)+" "+(y+525)+"l  -220 0  l 0 -120 l 30 0 l 0 -150 ").attr({'stroke-width':1,stroke: "#000"});
      var resiter =  paper.image("images/resistorSymbol.png",x+350,y+498,100, 55);
       


    
 
   function animateFire() {
      // Random flicker only in size
      var randWidth = baseWidth + Math.random() * 20 - 10;   // ±10px width change
      var randHeight = baseHeight + Math.random() * 30 - 10; // ±10–30px height change
      var randOpacity = 0.8 + Math.random() * 0.2;           // 0.8–1 glow

      // Keep bottom position fixed → adjust Y only by height difference
      var newY = baseY - (randHeight - baseHeight); 

      fire.animate(
        {
          width: randWidth,
          height: randHeight,
          x: baseX - (randWidth - baseWidth) / 2, // horizontally centered
          y: newY,                                // only top moves
          opacity: randOpacity
        },
        250, // short flicker time
        function () {
          animateFire(); // loop continuously
        }
      );
    }

//    animateFire();

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
var r1 = paper.path("M"+(x+532)+" "+(y+400)+"l  60 0").attr({'stroke-width':2,stroke: "#000"});

     var rect1 = paper.rect(x+495, y+100, 80, 30,4).attr({
      fill: "#39ccaf",
      stroke: "#2c3e50",
      "stroke-width": 3
    });  // motor rrect
    
    var dctxt = paper.text(x+535, y+115,"DC Motor").attr({"font-weight":"bold",'font-size': 13});
    
 
//    function animation(x,y){
//		var arr = [];
//		arr[0]=paper.path("M "+(x+180)+" "+(y+70)+ "l 0 0").attr({'stroke-width':1,"stroke-dasharray": "- " });
//		arr[0].animate({path :"M"+(x+180)+" "+(y+70)+"l 50  10  "},1000,function(){
//		arr[0]=paper.path("M "+(x+230)+" "+(y+80)+ "l 0 0").attr({'stroke-width':1,"stroke-dasharray": "- " });
//		arr[0].animate({path :"M"+(x+230)+" "+(y+80)+"l -50  20  "},1000,function(){
//			animation(x,y);
//		})
//			
//		})
//			
//		}
	

     





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
  
//  var diodeLines = paper.path("M"+(x+470)+" "+(y+320)+"l  0 50 l 120 0 l 0 30").attr({'stroke-width':2,stroke: "#000"});
    var diodeLines = paper.path("M"+(x+520)+" "+(y+240)+"l  0 -40 l -340 0 l 0 50 l 30 0").attr({'stroke-width':2,stroke: "#000"}); 
    
    
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
	var dctxt = paper.text(x+50, y+360,"Input").attr({"font-weight":"bold",'font-size': 13});
	var dctxt = paper.text(x+60, y+430,"GND").attr({"font-weight":"bold",'font-size': 13});
	var dctxt = paper.text(x+100, y+230,"VCC").attr({"font-weight":"bold",'font-size': 13});
	var dctxt = paper.text(x+410, y+500,"1k\u03A9").attr({"font-weight":"bold",'font-size': 13,'fill':'#ed1f37',"font-family": "Arial, Helvetica, sans-serif"});
	var dctxt = paper.text(x+500, y+410,"1k\u03A9").attr({"font-weight":"bold",'font-size': 13,'fill':'#ed1f37',"font-family": "Arial, Helvetica, sans-serif"});
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
    var dctxt = paper.text(x+440, y-80,"LED Display (I2C)").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif"});
    var dctxt = paper.text(x+300, y-80,"PC5 - SCl").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif",'fill':'#1fa125'});
    var dctxt = paper.text(x+300, y-60,"PC4 - SDA").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif",'fill':'#3498db'});
    var dctxt = paper.text(x+300, y-40,"GND- GND").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif",'fill':'black'});
     var dctxt = paper.text(x+300, y-20,"5V - VCC").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif",'fill':'red'});
      var dctxt = paper.text(x+80, y+50,"Temprature Sensor (LM 35)").attr({'font-size': 11,"font-family": "Arial, Helvetica, sans-serif",'fill':'black'});
    
    
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
    var startValue = 0;
		var endValue ;  var currentValue;
		
		var baseX = 0;
		var baseY = 0;
		var baseWidth = 0;
		var baseHeight = 0;
	var	fire = paper.image("images/fire.png", baseX, baseY, baseWidth, baseHeight);
		
		
    // Function to move image to the left
    function moveImageLeft() {

      startValue = startValue + 10;
       counter.attr("text", startValue);
       lcd_text.attr("text", startValue);
       
		if (startValue == 40) {
			
			 baseX = 230;
			 baseY = 95;
			 baseWidth = 20;
			 baseHeight = 50;
			 fire = paper.image("images/fire.png", baseX, baseY, baseWidth, baseHeight);
			  animateFire();
		} else if (startValue == 60) {
			//medium fire
			fire.hide();
			 baseX = 220;
			 baseY = 100;
			 baseWidth = 30;
			 baseHeight = 60;

			// Draw fire image
			 fire = paper.image("images/fire1.png", baseX, baseY, baseWidth, baseHeight);
			  animateFire();

		}else if (startValue == 80){
			fire.hide();
				 baseX = 215;
			 baseY = 95;
			baseWidth = 40;
			 baseHeight = 50;
			 fire = paper.image("images/fire2.png", baseX, baseY, baseWidth, baseHeight);
			 animateFire();
			
		}else if (startValue < 40){
			fire.hide();
		}
    }

    // Function to reset image back
    function resetImage() {

        startValue = startValue - 10;
         counter.attr("text", startValue);
         lcd_text.attr("text", startValue);
         
		if (startValue == 40) {
			fire.hide();
			 baseX = 230;
			 baseY = 95;
			 baseWidth = 20;
			 baseHeight = 50;
			 fire = paper.image("images/fire.png", baseX, baseY, baseWidth, baseHeight);
			 animateFire();
		} else if (startValue == 60) {
			//medium fire
			fire.hide();
			 baseX = 220;
			 baseY = 100;
			 baseWidth = 30;
			 baseHeight = 60;

			// Draw fire image
			 fire = paper.image("images/fire1.png", baseX, baseY, baseWidth, baseHeight);
			 animateFire();

		}else if (startValue == 80){
			fire.hide();
				 baseX = 215;
			 baseY = 95;
			 baseWidth = 40;
			 baseHeight = 50;
			 fire = paper.image("images/fire2.png", baseX, baseY, baseWidth, baseHeight);
			 animateFire();
			
		}
		
		else if (startValue < 40){
			fire.hide();
		}
    }

    // Example calls
//    setTimeout(moveImageLeft, 1000);  // move left after 1s
//    setTimeout(resetImage, 3000);     // reset after 3s
	
	

	 // Start and end values
   endValue = 40;
//    if(sensorType == 1){
//		endValue = 8;
//	}else{
//		endValue = 2;
//	}
  
    var duration = 1000; // 1 second

    // Draw text
    var counter = paper.text(x+203, y+140, startValue).attr({
      "font-size": 10,
      "font-family": "Arial, Helvetica, sans-serif",
      "fill": "black"
    });
    
     var counter1 = paper.text(x+220, y+140, "\u00B0C").attr({
      "font-size": 10,
      "font-family": "Arial, Helvetica, sans-serif",
      "fill": "black"
    });
    
    var  lcd_text = paper.text(x + 430, y-5 ,startValue  ).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
    var  lcd_text1 = paper.text(x + 452, y-5 ,"\u00B0C"  ).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
    var  lcd_text2 = paper.text(x + 530, y-5 ,"MOTOR & LED ON "  ).attr({"font-size":18,"font-family":"digital-clock-font","fill":"#0af25f","font-weight":"bold"});
	counter.hide();
	counter1.hide();
	lcd_text.hide();
	lcd_text1.hide();
	lcd_text2.hide();
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
      lcd_text.attr("text", currentValue);

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
    
    
     var diodeLines = paper.path("M"+(x+160)+" "+(y+310)+"l  50 0 M"+(x+160)+" "+(y+328)+"l  50 0M"+(x+160)+" "+(y+345)+"l  50 0M"
    +(x+160)+" "+(y+364)+"l  50 0M" +(x+160)+" "+(y+378)+"l  35 0M" +(x+160)+" "+(y+397)+"l  30 0M" ).attr({'stroke-width':1,stroke: "#000"});   
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
	paper.circle(x+120, y+250, 5).attr({fill: "red", stroke: "black", "stroke-width": 2}),   // sensor points red
	
	paper.circle(x+180, y+250, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),// 5V supply point
	paper.circle(x+180, y+430, 5).attr({fill: "black", stroke: "black", "stroke-width": 2}),// black line point ground
	paper.circle(x+28, y+430, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //left point resgister
	paper.circle(x+110, y+480, 0).attr({fill: "blue", stroke: "black", "stroke-width": 2}), //right point resgister
	paper.circle(x+55, y+338, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//left point resgister input pin
	
	paper.circle(x+470, y+320, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//anode
	paper.circle(x+545, y+355, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//cathod switch
	paper.circle(x+530, y+400, 4.5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//colllector
	
	paper.circle(x+160, y+308, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//PC0
	paper.circle(x+160, y+328, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//PC1
	paper.circle(x+160, y+345, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//PC2
	paper.circle(x+160, y+360, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//PC3
	paper.circle(x+160, y+376, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2}),//pc4
	paper.circle(x+160, y+396, 5).attr({fill: "blue", stroke: "black", "stroke-width": 2})//pc5
	
  ];
  
  
 var gnd = paper.circle(x+180, y+430, 5).attr({fill: "red", stroke: "black", "stroke-width": 2});
 var supply = paper.circle(x+180, y+250, 5).attr({fill: "red", stroke: "black", "stroke-width": 2});
 gnd.hide();
 supply.hide();
  
   // Assign IDs
  points.forEach((p, i) => p.data("id", "P" + (i+1)));

  var firstPoint = null;
  var connections = [];
  var  correctSetB =[];
  var correctSetA = [];	
   var correctSetC = [];	
  var inputPt , outputPt , input ; 
//  // ✅ Allowed correct connections
//  var correctConnections = [
//    ["P1", "P2"] , // only P1-P2 is correct
//    ["P3", "P4"],
//    ["P5", "P6"]
//  ];

if (inputPin == 1){
	
  correctSetC = [["P17","P21"],
  ["P19","P20"]]
  input = paper.circle(x+160, y+308, 5).attr({fill: "red", stroke: "black", "stroke-width": 2})
  
}else if(inputPin == 2){
	correctSetC = [["P17","P22"],
  ["P19","P20"]]
 input = paper.circle(x+160, y+328, 5).attr({fill: "red", stroke: "black", "stroke-width": 2})
	
}else if(inputPin == 3){
	  correctSetC = [["P17","P23"],
  ["P19","P20"]]
 input =  paper.circle(x+160, y+345, 5).attr({fill: "red", stroke: "black", "stroke-width": 2})
	
}else if(inputPin == 4){
	  correctSetC = [["P17","P24"],
  ["P19","P20"]]
  	input = paper.circle(x+160, y+360, 5).attr({fill: "red", stroke: "black", "stroke-width": 2})
	
}else if(inputPin == 5){
	  correctSetC = [["P17","P25"],
  ["P19","P20"]]
 input = paper.circle(x+160, y+376, 5).attr({fill: "red", stroke: "black", "stroke-width": 2})
	
}else if(inputPin == 6){
	  correctSetC = [["P17","P26"],
  ["P19","P20"]]
  input =paper.circle(x+160, y+396, 5).attr({fill: "red", stroke: "black", "stroke-width": 2})
	
}
input.hide();

    // ✅ Two different arrays of correct connections
  if (selectedOutput == 2){
	   correctSetA = [
		["P1", "P7"],
	 // d10 to ouput 
	    ["P8", "P9"], //motor to no
	     ["P10", "P11"],
	      ["P12", "P13"]
  		];
  		outputPt = paper.circle(x+400, y+275, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
  		
   } else if (selectedOutput == 3){
	   correctSetA = [
		 ["P2", "P7"],
		 // d11 to ouput 
	    ["P8", "P9"] ,//motor to no
	    ["P10", "P11"],
	     ["P12", "P13"]
  		];
  		outputPt = paper.circle(x+400, y+290, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   } 
   else if (selectedOutput == 4){
	   correctSetA = [
		["P3", "P7"], // d13 to ouput 
	     ["P8", "P9"], //motor to no
	     ["P10", "P11"],
	      ["P12", "P13"]
 		 ]	;
 		 outputPt = paper.circle(x+400, y+305, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   } else if (selectedOutput == 5){
	   correctSetA = [
		["P4", "P7"], // d3 to ouput 
	     ["P8", "P9"], //motor to no
	     ["P10", "P11"],
	      ["P12", "P13"]
 		 ]	;
 		 outputPt =	paper.circle(x+400, y+325, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   }else if (selectedOutput == 6){
	   correctSetA = [
		["P5", "P7"], // d4 to ouput 
	     ["P8", "P9"] ,//motor to no
	     ["P10", "P11"],
	      ["P12", "P13"]
 		 ]	;
 		 outputPt = paper.circle(x+400, y+340, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   }else if (selectedOutput == 7){
	   correctSetA = [
		["P6", "P7"], // d5 to ouput 
	    ["P8", "P9"], //motor to no
	    ["P10", "P11"],
	     ["P12", "P13"]
 		 ]	;
 		 outputPt = paper.circle(x+400, y+360, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
   }
  outputPt.hide();
	
// Input
	  if(selectedValue == 2){
		  
		  correctSetB = [ ["P1", "P18"], // d3 to switch p5
		  ["P16", "P13"],
		   ["P14", "P15"]
		  ];
		  inputPt = paper.circle(x+400, y+275, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 3){
		 
		  correctSetB = [ ["P2", "P18"], // d4 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		  inputPt = paper.circle(x+400, y+290, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 4){
	
		  correctSetB = [ ["P3", "P18"], // d5 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		   inputPt = paper.circle(x+400, y+305, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 5){
		 
		  correctSetB = [ ["P4", "P18"] ,// d6 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		  inputPt =	paper.circle(x+400, y+325, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 6){
		 
		  correctSetB = [ ["P5", "P18"], // d7 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		   inputPt = paper.circle(x+400, y+340, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }else if(selectedValue == 7){
		 
		  correctSetB = [ ["P6", "P18"], // d8 to switch p5
		   ["P16", "P13"],
		     ["P14", "P15"]
		  ];
		  inputPt = paper.circle(x+400, y+360, 4.5).attr({fill: "red", stroke: "black", "stroke-width": 2});
	  }
	  
	  inputPt.hide();

var  coorectflg;
var  wrongflg;

//  function showConnections() {
////    document.getElementById("output").textContent = "Connections:\n" + 
////      connections.map(c => c.id1 + " ↔ " + c.id2 + (c.correct ? " ✅" : " ❌")).join("\n");
//	console.log(	"Connections:\n" + 
//     connections.map(c => c.id1 + " ↔ " + c.id2 + (c.correct ? " ✅" : " ❌")).join("\n"));
//       updateSummary();
//  }
function showConnections() {
  console.log(
    "Connections:\n" + 
    connections.map(c => 
      c.id1 + " ↔ " + c.id2 + 
      (c.correct ? " ✅ (Set " + c.set + ")" : " ❌")
    ).join("\n")
  );
  updateSummary();
}

  function showMessage(msg, color="red") {
    var msgBox = document.getElementById("message");
    msgBox.style.color = color;
    msgBox.textContent = msg;
    setTimeout(() => msgBox.textContent = "", 2000);
  }
  
    // ✅ Update summary counts
//  function updateSummary() {
//    let correctCount = connections.filter(c => c.correct).length;
//    let wrongCount = connections.filter(c => !c.correct).length;
//    coorectflg = correctCount;
//    wrongflg = wrongCount;
//
//   console.log(
//      "✅ Correct connections: " + correctCount + "<br>" +
//      "❌ Wrong connections: " + wrongCount);
//  }

function updateSummary() {
  let correctCount = connections.filter(c => c.correct).length;
  let wrongCount = connections.filter(c => !c.correct).length;

  let countA = connections.filter(c => c.set === "A").length;
  let countB = connections.filter(c => c.set === "B").length;
  let countC = connections.filter(c => c.set === "C").length;

  coorectflg = correctCount;
  wrongflg = wrongCount;

  console.log(
    "✅ Correct connections: " + correctCount + "\n" +
    "❌ Wrong connections: " + wrongCount + "\n" +
    "📌 Set A: " + countA + ", Set B: " + countB + ", Set C: " + countC
  );
  
  console.log(coorectflg);
}

//  function isCorrectConnection(id1, id2) {
//    return correctConnections.some(c =>
//      (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
//    );
//  }

  // check if connection belongs to Set A or Set B
// check if connection belongs to Set A, Set B, or Set C
function checkConnectionSet(id1, id2) {
  let inSetA = correctSetA.some(c =>
    (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
  );
  if (inSetA) return "A";

  let inSetB = correctSetB.some(c =>
    (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
  );
  if (inSetB) return "B";

  let inSetC = correctSetC.some(c =>
    (c[0] === id1 && c[1] === id2) || (c[0] === id2 && c[1] === id1)
  );
  if (inSetC) return "C";

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
            var conn = {id1: id1, id2: id2, line: line, correct: correct,set:set};
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
	if(coorectflg == 8 ){
		statusFlag=true;				
//		$("#plot").html("");
//		$("#plot").prop("hidden",false);
//		start();
//		start(1,0,1);
//		start(1,0,1);
		 
		wood.show();
		line_scale.show();
		counter.show();
		min.show();
       max.show();
    	counter1.show();
       scaleBox.show();
		checkStatus.hide();
//		animation(x, y);
		lcd_text.show();
		lcd_text1.show();
		

		
//		toastr.success("Connection Established Successfully.Now Click on Switch.");	
		showSwal('Connection Established Successfully.Now Click on Object.','success');
//		switchpress=paper.text(x+365,y+3,"Click and Hold the Switch").attr({'font-size':14});

		
		
		disableAllPoints();
		
	}else if(coorectflg < 8 || wrongflg >= 1){
		
//		toastr.warning("Some Connections are missing.")
		if(wrongAttempts <= 3){
			
			showSwal('Some Connections are missing or wrong','error');
		}else{
			Swal.fire({
					title: 'Appropriate connections',
					html: `<div>
                <img src='images/tempCorrect.png' class='img-fluid' 
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
	
	
	max.click(function(){
		onTime1 = 1000/1000;
		offTime1 = 0/1000;
		setRedflag=true;
		
		if(startValue < 100){
			
	
	
		moveImageLeft() ;
	if(startValue > endValue){
		rotateLine();
		blink();
		startRotation();
		inputPt.show();
		outputPt.show();
		input.show();
		 gnd.show();
 		supply.show();
		ledoff.hide();
		ledon.show();
//		start(interval_plot1,onTime1,offTime1);
//		next.show();
		lcd_text2.show();
		lcd_text2.attr("text", "MOTOR & LED ON");
		
		
	}
		}else{
			showSwal('Maximum temprature','warning');
		}
	
//	setTimeout(rotateLine, 1900);
//	setTimeout(blink, 1900);
//	
//	 setTimeout( startRotation, 2200);
	    
  		
	});
	
	min.click(function(){
		
		onTime1 = 0/1000;
		offTime1 = 1000/1000;
		setRedflag=false;
	
			
		
		if(startValue > 0){
			
		
		resetImage();
		 
		 if(startValue < endValue){
//			 start(interval_plot1,onTime1,offTime1);
			 resetLine();
			 stopBlink();
			 inputPt.hide();
		  	outputPt.hide();
		  	input.hide();
		  	 gnd.hide();
 			supply.hide();
			 stopRotation();
			 ledon.hide();
			 ledoff.show();
			  lcd_text2.attr("text", "");
			  

		
			 }
			}else{
				showSwal('Minimum temprature','warning');
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
		
	});
	
	
	
	
	
			
		function animation(x, y) {
    // create dashed line starting at (x+180, y+70)
    var line = paper.path("M " + (x+180) + " " + (y+70) + " l 0 0")
        .attr({ 'stroke-width': 2, "stroke-dasharray": "- ", stroke: "cyan" });
      var line1 = paper.path("M " + (x+230) + " " + (y+80) + " l 0 0")
        .attr({ 'stroke-width': 2, "stroke-dasharray": "- ", stroke: "#f56042" });

    // animate forward
    line.animate(
        { path: "M" + (x+180) + " " + (y+70) + " l 50 10" },
        1000,
        function () {
            // after first leg, animate backward
            line1.animate(
                { path: "M" + (x+230) + " " + (y+80) + " l -50 20" },
                1000,
                function () {
                    // remove old line
                    line.remove();
                     line1.remove();
                    // restart from original position
                    animation(x, y);
                }
            );
        }
    );
}
	
	
	
	

    
	
}