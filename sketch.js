let bob
let anchor 
let velocity 
let restLength = 200
let k = 0.01 
let gravity

function setup() {
  createCanvas(600,windowHeight);
  bob = createVector(350,0)
  anchor = createVector(300,0)
  velocity = createVector(0,0)
  gravity = createVector(0,0.1)
}

function draw() {
  background(220);
  background(112,50,126)
  stroke(255,65,0)
  strokeWeight(4)
  fill(45,197,244)
  stroke(255,65,0)
  strokeWeight(4)
  line(anchor.x,anchor.y,bob.x,bob.y)
  circle(bob.x,bob.y,64)
  circle(anchor.x,anchor.y,32)

  if(mouseIsPressed){
    bob.x = mouseX
    bob.y = mouseY
    velocity.set(0,0)
  }
 

  let force = p5.Vector.sub(bob,anchor)
  let x = force.mag() - restLength
  force.normalize()
  force.mult(k * -1 * x)

  //f = a
  velocity.add(force)
  velocity.add(gravity)
  bob.add(velocity)
  velocity.mult(0.99)
}