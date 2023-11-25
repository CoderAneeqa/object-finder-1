status = "";
video = "";
input_value="";

function setup(){

    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(500,400);

}

function start(){

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_holder").innerHTML = "Status : Detecting Objects !";
    input_value = document.getElementById("input").value;


}

function modelLoaded(){

    console.log("Model Is Loaded !");
    status = true;



}

function draw(){

    image(video, 0, 0, 500, 400);

}