noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

 function setup()
  {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
  }


  function gotPoses(results)
  {
    if(results.length > 0)
    {
      
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
    
      console.log("leftWristX = " + leftWristX + " difference = " + difference);
    }
  }

  function draw()
  {
       background('#0000FF');
       fill('#F90093');
       stroke('#F90093');
       textSize(rightWristX, leftWristX, difference);
       text('Arjun', 10, 500);
       fill(255, 204, 0);
       
  }

  
  
    
  

    function modelLoaded()
    {
        console.log('PoseNet Is Initialised!');
    }