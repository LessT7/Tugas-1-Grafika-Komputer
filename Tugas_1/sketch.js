function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(157,0,5);
  
  let centerX = width / 2;
  let centerY = height / 2;
  
  quad(centerX - 60, centerY - 40, centerX + 60, centerY - 80, centerX + 60, centerY, centerX - 60, centerY);
  
  let rightX = (width / 4) * 3; 
  quad(rightX - 60, centerY - 40, rightX + 60, centerY - 80, rightX + 60, centerY, rightX - 60, centerY);

  let leftX = width / 4;
  quad(leftX - 60, centerY - 40, leftX + 60, centerY - 80, leftX + 60, centerY, leftX - 60, centerY);
}