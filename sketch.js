var r=50,
    planets = [
      {
            size:15,
            speed:10,
            radius:3
      },
      {
            size:30,
            speed:8,
            radius:5
      }
    ],
    angle=0,
    points = [{x:0,y:0},{x:0,y:0}],
    myLines=[];
function setup() {
  createCanvas(800,600)
  noFill();
  stroke(255,100)
  frameRate(24)
  angleMode(DEGREES)
}

function draw() {
  background(100)
  stroke(255,70)

  translate(width/2,height/2)
  rotate(-90)

  var myLine = {}
  planets.forEach(function(p,i){
    points[i].x = cos(angle*p.speed);
    points[i].y = sin(angle*p.speed);
    myLine['x'+i] = points[i].x
    myLine['y'+i] = points[i].y
  })

  var r1=planets[0].radius*r,
      r2=planets[1].radius*r;

  if (angle <= 360) myLines.push(myLine)
  myLines.forEach(function(L,i){
    line(L.x0*r1,L.y0*r1,L.x1*r2,L.y1*r2)
  })
  

  noStroke();
  fill('#974B2F')
  ellipse(points[0].x*r1,points[0].y*r1,planets[0].size)
  fill('#0080FF')
  ellipse(points[1].x*r2,points[1].y*r2,planets[1].size)
  
  angle++;
  if (angle >= 360) {
    angle = 0;
    // noLoop();
    // myLines = []
  }
}