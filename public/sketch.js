let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
var img;
 

// let poses = [];
// let skeletons = [];

// function setup() {
//   createCanvas(640, 480);
//   video = createCapture(VIDEO);
//   video.size(width, height);

//   // Create a new poseNet method with a single detection
//   poseNet = ml5.poseNet(video, modelReady);
//   // This sets up an event that fills the global variable "poses"
//   // with an array every time new poses are detected
//   poseNet.on('pose', function (results) {
//     poses = results;
//   });
//   // Hide the video element, and just show the canvas
//   video.hide();
// }

function setup() {
  createCanvas(640, 480);
  video = createCapture(OPAQUE);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  img = loadImage("assets/von.png");  // Load the image
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
    let nY = poses[0].pose.keypoints[0].position.y;
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyelX = lerp(eyelX, eX, 0.5);
    eyelY = lerp(eyelY, eY, 0.5);
  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  image(video, 0, 0);
  tint(255, 255)
  let d = dist(noseX, noseY, eyelX, eyelY);

  // fill(255, 0, 0);
  // ellipse(noseX, noseY, d);
  //fill(0,0,255);
  //ellipse(eyelX, eyelY, 50);

  // Displays the image at its actual size at point (0,0)
  image(img, eyelX - 50, eyelY);
  // image(noseX, noseY, d);
  // Displays the image at point (0, height/2) at half size
  // image(img, 0, height/2, img.width/2, img.height/2);


}

// function modelReady() {
//   select('#status').html('Model Loaded');
// }

// function draw() {
//   image(video, 0, 0, width, height);

//   // We can call both functions to draw all keypoints and the skeletons
//   // drawKeypoints();
//   drawSkeleton();
// }

// // A function to draw ellipses over the detected keypoints
// function drawKeypoints(poses) {
//   // Loop through all the poses detected
//   for (let i = 0; i < poses.length; i++) {
//     // For each pose detected, loop through all the keypoints
//     for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
//       // A keypoint is an object describing a body part (like rightArm or leftShoulder)
//       let keypoint = poses[i].pose.keypoints[j];
//       // Only draw an ellipse is the pose probability is bigger than 0.2
//       if (keypoint.score > 0.2) {
//         fill(255, 0, 0);
//         noStroke();
//         ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
//       }
//     }
//   }
// }

// // A function to draw the skeletons
// function drawSkeleton() {
//   // Loop through all the skeletons detected
//   for (let i = 0; i < poses.length; i++) {
//     // For every skeleton, loop through all body connections
//     for (let j = 0; j < poses[i].skeleton.length; j++) {
//       let nX = poses[0].pose.keypoints[0].position.x;
//       //linear interpolate, straight line basically ha
//       noseX = lerp(noseX, nX, 0.5);
//       // let partA = poses[i].skeleton[j][0];
//       // let partB = poses[i].skeleton[j][1];
//       // stroke(255, 0, 0);
//       // line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
//       let d = dist(noseX);
//       fill(255, 0, 0);
//       ellipse(noseX, d);

//     }
//   }
// }

// function gotPoses(poses) {
//   // console.log(poses);
//   if (poses.length > 0) {
//     let nX = poses[0].pose.keypoints[0].position.x;
//     let nY = poses[0].pose.keypoints[0].position.y;
//     let eX = poses[0].pose.keypoints[1].position.x;
//     let eY = poses[0].pose.keypoints[1].position.y;
//     noseX = lerp(noseX, nX, 0.5);
//     noseY = lerp(noseY, nY, 0.5);
//     eyelX = lerp(eyelX, eX, 0.5);
//     eyelY = lerp(eyelY, eY, 0.5);
//   }
// }

// function modelReady() {
//   console.log('model ready');
// }

// function draw() {
//   image(video, 0, 0);

//   let d = dist(noseX, noseY, eyelX, eyelY);

//   fill(255, 0, 0);
//   ellipse(noseX, noseY, d);
//   //fill(0,0,255);
//   //ellipse(eyelX, eyelY, 50);


// }