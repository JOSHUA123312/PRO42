 var hr,mn,sc



function setup() {
  createCanvas(800,700);
hr=hour()
mn=minute()
sc=second()
angleMode(DEGREES)

}

function draw() {
  background(0);  
  
push()
scAngle=map(sc,0,60,0,360)
translate(400,300)
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop()

push()
mnAngle=map(mn,0,60,0,360)
translate(400,300)
rotate(mnAngle)
stroke("blue")
strokeWeight(7)
line(0,0,80,0)
pop()

push()
hrAngle=map(hr,0,60,0,360)
translate(400,300)
rotate(hrAngle)
stroke("limegreen")
strokeWeight(7)
line(0,0,50,0)
pop()

  drawSprites();
}