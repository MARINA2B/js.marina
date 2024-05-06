
1
 let cor;
2
 let posicaoHorizontal // x
3
 let posicaoVertical // y
4
 
5
function setup() {
6
  createCanvas(400, 400);
7
  background(color(100, 0, 0));
8
  cor= color(random(0, 255), random(0, 255),random(0, 255));
9
  posicaoHorizontal = 200;
10
  posicaoVertical = 200;
11
  
12
}
13
​
14
function draw() {
15
  fill(cor);
16
  circle(posicaoHorizontal, posicaoVertical, 50);
17
  if(mouseX < posicaoHorizontal) {
18
    posicaoHorizontal--;
19
  }   
20
  if(mouseX > posicaoHorizontal) {
21
    posicaoHorizontal++;
22
  }
23
  if(mouseY > posicaoVertical) {
24
    posicaoVertical--;
25
  }
26
  if(mouseY < posicaoVertical) {
27
    posicaoVertical++;
28
  }
29
  if(mouseIsPressed){
30
  }
31
​
32
​
33
}
