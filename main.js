noseX=0;
noseY=0;
rightWristx=0;
leftWristx=0;
difference=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550,550);
    canvas.position(600,150);

    poseNet= ml5.poseNet(video, model_loaded);
    poseNet.on('pose',got_poses);
}

function model_loaded(){
    console.log("PoseNet model is loaded!");
}

function draw(){
    background('#808080');
    fill('#FFC0CB');
    stroke('#FFC0CB');
    square(noseX,noseY,difference);

}

function got_poses(results){
    if(results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("noseX="+ noseX,"noseY="+ noseY);
    
    rightWristx= results[0].pose.rightWrist.x;
    leftWristx= results[0].pose.leftWrist.x;
    difference= floor(leftWristx-rightWristx)
    document.getElementById("size").innerHTML="The width and height of the square in realtime is "+difference;

    }
}



