score_leftWristX=0;
score_rightWristX=0;
song_status="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song1="";
song2="";
song.play();
function preload() {
img = loadImage('assets/laDefense.jpg');
song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");

function setup() {
createCanvas(390, 240);
capture = createCapture(VIDEO);
capture.size(320, 240);
video.hide();
poseNet=ml5.poseNet(video.modelLoaded);
poseNet.on('pose',getPoses);
    

}
function modelLoaded()
{
console.log("PoseNet Is Initialized");
}
function draw() {
background(255);
image(capture, 0, 0, 320, 240);
fill("#FF0000");
stroke("#FF0000");
if(songisPlaying){
song_variable.isPlaying() 
if(scoreLeftWrist>0.2)
drawcircle(X, Y,);
}
stop()
{
song_variable.stop()
}
song="song";
{
  if(songisPlaying)
 isPlaying()
     song_variable.isPlaying("true") 
}
song.stop()
{
  song_variable.stop()
}
}  
song("song");
  }
  function gotPoses(results)
  {
  if(results.length>0)
  {
  console.log(results);
  leftWristX=results[0].pose.leftWrist.x;
  leftWristY=results[0].pose.leftWrist.y;
  console.log("leftWristX=" +leftWristX +" leftWristY="+leftWristY);
  rightWristX=results[0].pose.rightWrist.x;
  rightWristY=results[0].pose.rightWrist.y;
  console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
  scoreLeftWrist=results[0].pose.keypoints[9].score;
  console.log("scoreLeftWrist=" +scoreLeftWrist);
  console.log(results);
  scoreRightWrist=results[0].pose.keypoints[10].score;
  scoreLeftWrist=results[0].pose.keypoints[9].score;
  console.log("scoreRightWrist=" +scoreRightWrist+"scoreLeftWrist=");
  }
  }
  
  
  