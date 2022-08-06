var nosex=0;
var nosey=0;
var difference=0;
var rightwristx=0;
var leftwristx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}

function draw(){
background('#969A97');
document.getElementById("square_side").innerHTML="Width and height of a square will be"+ difference +"px" ;
fill("#00fbef");
stroke("#00fbef");
textSize(difference);
text("Devansh",nosex,nosey);

}

function modelLoaded(){
    console.log("poseNet Is Loaded,Please Proceed");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);

    }
}