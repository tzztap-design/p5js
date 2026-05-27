let startTime;
let colorChangeTime;
let firstColors = [ '#45518D', '#71BDCB', '#F4D433', '#1064AA', '#FBAE2A', '#158BB9', '#6EBBCD', '#1797C4', '#056DAA', '#38A0BF', '#F8A41A',  '#F7DB59', '#FAC62D', '#0870AD', '#0382B9', '#31A7C5', '#0870AD', '#0B89B9', '#E86714', '#F3C800', '#0E85AF', '#F19408', '#CDC348', '#78BECA', '#FBD25C', '#C87026'
];
let currentColors = [];

function setup() {
  createCanvas(600, 400);
  select('canvas').style('width', '100%').style('height', '100%');
  startTime = millis();
  colorChangeTime = 1000;
  
  for (let i = 0; i < firstColors.length; i++) 
  {
    currentColors.push(color(firstColors[i]));
  }
}

function draw() {
  background('#E6EBF0');
  noStroke();
  let elapsedTime = millis() - startTime;
  
  if (elapsedTime > colorChangeTime) 
  {
    for (let i = 0; i < currentColors.length; i++) 
    {
      if (random(1) < 0.5) 
      {
        currentColors[i] = color(random(0, 50), random(100, 200), random(200, 255));
      } 
      else 
      {
        currentColors[i] = color(random(230, 255), random(180, 230), random(0, 60));
      }
    }
    colorChangeTime += 1000;
  }
  
  // 무지개 부분 (시간에 따른 크기 변화)
  let sizePlus = sin(frameCount * 0.05) * 30;
  let anglePlus = sin(frameCount * 0.05) * 25;
fill('#72438B'); 
  arc(300, 200, 400 + sizePlus, 400 + sizePlus, radians(90 - anglePlus), radians(165 + anglePlus));
  arc(300, 200, 400 + sizePlus, 400 + sizePlus, radians(250 - anglePlus), radians(30 + anglePlus));
  fill('#174E8D'); 
  arc(300, 200, 385 + sizePlus, 385 + sizePlus, radians(90 - anglePlus), radians(165 + anglePlus));
  arc(300, 200, 385 + sizePlus, 385 + sizePlus, radians(250 - anglePlus), radians(30 + anglePlus));
  fill('#1A90BA'); 
  arc(300, 200, 370 + sizePlus, 370 + sizePlus, radians(90 - anglePlus), radians(165 + anglePlus));
  arc(300, 200, 370 + sizePlus, 370 + sizePlus, radians(250 - anglePlus), radians(30 + anglePlus));
  fill('#249A57'); 
  arc(300, 200, 355 + sizePlus, 355 + sizePlus, radians(90 - anglePlus), radians(165 + anglePlus));
  arc(300, 200, 355 + sizePlus, 355 + sizePlus, radians(250 - anglePlus), radians(30 + anglePlus));
  fill('#EBBC05'); 
  arc(300, 200, 340 + sizePlus, 340 + sizePlus, radians(90 - anglePlus), radians(165 + anglePlus));
  arc(300, 200, 340 + sizePlus, 340 + sizePlus, radians(250 - anglePlus), radians(30 + anglePlus));
  fill('#F5751E'); 
  arc(300, 200, 325 + sizePlus, 325 + sizePlus, radians(90 - anglePlus), radians(165 + anglePlus));
  arc(300, 200, 325 + sizePlus, 325 + sizePlus, radians(250 - anglePlus), radians(30 + anglePlus));
  fill('#D52717'); 
  arc(300, 200, 310 + sizePlus, 310 + sizePlus, radians(90 - anglePlus), radians(165 + anglePlus));
  arc(300, 200, 310 + sizePlus, 310 + sizePlus, radians(250 - anglePlus), radians(30 + anglePlus));
  fill('#E6EBF0'); 
  arc(300, 200, 295 + sizePlus, 295 + sizePlus, radians(0), radians(360));
  
  // 물방울 부분 (시간에 따른 색상 변화)
  // 몸체
  fill(currentColors[0]);
  circle(300, 225, 150);
  triangle(231, 195, 369, 195, 300, 75);
  fill(currentColors[1]);
  circle(310, 209, 93);
  // 물방울 안 다각형들
  fill(currentColors[2]);
  circle(300, 210, 50);
  fill(currentColors[3]); 
  triangle(254, 160, 276, 145, 300, 75);
  fill(currentColors[4]); 
  triangle(300, 125, 276, 145, 300, 75);
  quad(254, 160, 241, 185, 249, 192, 276, 145);
  fill(currentColors[5]);  
  triangle(312, 125, 335, 135, 300, 75);
  fill(currentColors[6]);  
  triangle(300, 150, 318, 148, 300, 75);
  triangle(300, 150, 285, 155, 265, 195);
  quad(241, 185, 249, 192, 244, 224, 233, 213);
  fill(currentColors[7]);  
  triangle(300, 125, 300, 150, 285, 155);
  fill(currentColors[8]); 
  quad(285, 155, 265, 195, 249, 192, 265, 165);
  fill(currentColors[9]); 
  quad(265, 195, 285, 169, 300, 163, 283, 185);
  quad(265, 195, 283, 185, 277, 217, 260, 215);
  fill(currentColors[10]);
  quad(312, 125, 318, 148, 346, 155, 335, 135);
  quad(300, 150, 300, 163, 335, 180, 318, 148);
  quad(335, 180, 340, 220, 345, 221, 356, 195);
  fill(currentColors[11]);
  quad(318, 148, 335, 180, 356, 195, 346, 155);
  fill(currentColors[12]);   
  triangle(300, 163, 335, 180, 340, 220);
  fill(currentColors[13]); 
  quad(244, 224, 233, 213, 227, 237, 255, 280);
  fill(currentColors[14]);  
  quad(249, 192, 244, 224, 249, 254, 265, 195);
  fill(currentColors[15]);  
  quad(356, 195, 345, 221, 320, 280, 365, 260);
  fill(currentColors[16]);  
  quad(320, 280, 300, 300, 255, 280, 262, 260);
  fill(currentColors[17]);  
  quad(262, 260, 345, 221, 332, 252, 284, 268);
  fill(currentColors[18]);  
  triangle(262, 260, 271, 233, 287, 248);
  fill(currentColors[19]);  
  quad(271, 233, 277, 217, 298, 243, 287, 248);
  fill(currentColors[20]); 
  quad(365, 260, 320, 280, 300, 300, 330, 290);
  fill(currentColors[21]); 
  quad(277, 217, 260, 215, 249, 254, 255, 280);
  quad(262, 260, 284, 268, 300, 263, 298, 243);
  fill(currentColors[22]); 
  quad(335, 245, 327, 263, 345, 254, 351, 237);
  fill(currentColors[23]);
  circle(300, 210, 40);
  fill(currentColors[24]);
  arc(296, 220, 54, 67, radians(270), radians(360));
  fill(currentColors[25]);
  arc(315, 235, 20, 20, radians(340), radians(155));
  
  // 빛 부분 (시간에 따른 위치 변화)
  stroke(255, 255, 0);
  strokeWeight(5);
  fill('#EDE2A2');
  let angle = sin(frameCount * 0.02) * 30;
  arc(300, 210, 330, 330, radians(65 + angle), radians(70 + angle));
  arc(300, 210, 370, 370, radians(45 + angle), radians(50 + angle));
  arc(300, 210, 300, 300, radians(82 + angle), radians(87 + angle));
  arc(300, 210, 400, 400, radians(30 + angle), radians(35 + angle));
}

function keyPressed() {
  if (key === 's') {
    saveGif('20251488이승규_과제 4. 자신의 추상화에 시간에 따른 움직임 넣기', 10);
  }
}
