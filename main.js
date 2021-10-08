var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function Start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start();


}

recognition.onresult=function (event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML=content;

    if (content=="take my selfie") {
        console.log("take selfie ---");
        Speak();
    }

    


}

function Speak() {
    var Synth = window.speechSynthesis;

     speak_data= "Taking your selfie in 5 seconds";

     var utterthis = new SpeechSynthesisUtterance(speak_data);

     Synth.speak(utterthis);
Webcam.attach(camera);

setTimeout (function(){
    take_snapshot();
    Save();

},5000);
}
 var camera = document.getElementById("camera");

Webcam.set({
    width: 360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:90
});

 function take_snapshot() {
     Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
     });
 } 

 function Save() {
     link = document.getElementById("link");
     image = document.getElementById("selfie_image").src;
     link.href=image;
     link.click();
 }