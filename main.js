function setup() {
    video = createCapture(VIDEO);
    video.size(750,700);
    
    canvas = createCanvas(750,750);
    canvas.position(760,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
 console.log('PoseNet Is Initialized');
}

function draw() {
    background('#00FA9A');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}