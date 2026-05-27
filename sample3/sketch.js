let shirtR = 255;
let shirtG = 255;
let shirtB = 255;

function setup() {
  createCanvas(400, 600);
  select('canvas').style('width', '100%').style('height', '100%');
}

function draw() {
  
  background(240);
  
  // [Interaction 1] 마우스 클릭 시 옷 색상 랜덤 변경
  if (mouseIsPressed) {
    shirtR = random(255);
    shirtG = random(255);
    shirtB = random(255);
  }
  stroke(0);
  strokeWeight(2);
  fill(233, 205, 184); 
  rect(160, 350, 80, 100); // 목 사각형
  fill(shirtR, shirtG, shirtB); // 몸통 (옷)
  rect(80, 430, 240, 170, 20); // 어깨와 몸통 (둥근 사각형)
  noFill(); 
  stroke(50);
  arc(200, 430, 90, 50, radians(0), radians(180)); // 옷의 목 부분 곡선
  fill(0);
  ellipse(200, 455, 15, 15);  // 단추
  fill(233, 205, 184);
  stroke(0);
  ellipse(310, 270, 30, 50); // 오른쪽 귀
  fill(233, 205, 184);
  ellipse(200, 250, 220, 260); // 얼굴 전체 윤곽
  fill(20);
  noStroke();
  ellipse(200, 160, 250, 170); // 머리 윗부분 볼륨
  stroke(0);
  fill(20);
  arc(200, 215, 235, 155, radians(165), radians(375)); // 이마 위 앞머리 라인
  fill(255);
  ellipse(160, 260, 45, 30); // 왼쪽 눈 흰자
  ellipse(240, 260, 45, 30); // 오른쪽 눈 흰자
  
  // [인터랙션 2] 눈동자 움직이기
  let moveX = (mouseX / 400) * 14 - 7;
  let moveY = (mouseY / 600) * 10 - 5;
  
  if (moveX > 7) moveX = 7;
  if (moveX < -7) moveX = -7;
  if (moveY > 5) moveY = 5;
  if (moveY < -5) moveY = -5;
  
  fill(30);
  ellipse(160 + moveX, 260 + moveY, 25, 25);
  ellipse(240 + moveX, 260 + moveY, 25, 25);
  
  noFill();
  stroke(0);
  line(200, 270, 195, 310); // 콧대
  line(195, 310, 205, 310); // 코 밑부분
  
  // [Interaction 3] 키보드 입력 시 입 모양 변경
  if (keyIsPressed) {
    fill(150, 50, 50);
    ellipse(200, 340, 30, 40); // '오' 모양 입
  } else {
    fill(200, 100, 100);
    stroke(0);
    arc(200, 340, 60, 20, 0, PI); // 평소 웃는 입
  }
  fill(255);
  noStroke();
  ellipse(315, 275, 12, 18); // 에어팟 헤드 부분
  rect(312, 280, 6, 20); // 에어팟 기둥 부분
  fill(0);
  ellipse(315, 275, 3, 3); // 에어팟위쪽 작은 점
  ellipse(315, 295, 3, 3); // 에어팟아래쪽 작은 점
}

function keyPressed() {
  if (key === 's') {
    saveGif('20251488이승규_과제 3. 움직이는 캐릭터 그리기', 5);
  }
}
