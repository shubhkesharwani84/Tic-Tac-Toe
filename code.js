var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7fe0dafc-c86a-4e4a-9ce2-d1bb47cdc4cb","dca38eaa-2e4e-4d5b-8389-e2c91c5e4942","e695f8a4-677c-4e9c-8373-040c437c726f","76454d50-0f19-431d-808a-124f8ad5658c","ca9ad709-9f0a-4cc4-a85c-6ad0de9fef2d","c35046c3-e8d6-491a-8677-c2ae170fcf36","fcd74a8b-3921-4cd2-b8c5-c1021f350ad1"],"propsByKey":{"7fe0dafc-c86a-4e4a-9ce2-d1bb47cdc4cb":{"name":"penguin_1","sourceUrl":null,"frameSize":{"x":256,"y":257},"frameCount":1,"looping":true,"frameDelay":12,"version":"yq1_Gybf84VydQTLr_i_RxOXTv4pLfoc","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":257},"rootRelativePath":"assets/7fe0dafc-c86a-4e4a-9ce2-d1bb47cdc4cb.png"},"dca38eaa-2e4e-4d5b-8389-e2c91c5e4942":{"name":"panda_1","sourceUrl":"assets/api/v1/animation-library/gamelab/q2BmjnMHPOrMxJd1Xac4h3r_ug_ESDsO/category_animals/panda.png","frameSize":{"x":304,"y":257},"frameCount":1,"looping":true,"frameDelay":2,"version":"q2BmjnMHPOrMxJd1Xac4h3r_ug_ESDsO","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":257},"rootRelativePath":"assets/api/v1/animation-library/gamelab/q2BmjnMHPOrMxJd1Xac4h3r_ug_ESDsO/category_animals/panda.png"},"e695f8a4-677c-4e9c-8373-040c437c726f":{"name":"cross","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sePgTA9McF3yffmrHt4Rm0.Jq2Ykvh6U","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/e695f8a4-677c-4e9c-8373-040c437c726f.png"},"76454d50-0f19-431d-808a-124f8ad5658c":{"name":"circle4.jpg_1","sourceUrl":null,"frameSize":{"x":575,"y":585},"frameCount":1,"looping":true,"frameDelay":12,"version":"lb4zlvW_ZVkUbpdpyGGcdZxtOeHBO9of","loadedFromSource":true,"saved":true,"sourceSize":{"x":575,"y":585},"rootRelativePath":"assets/76454d50-0f19-431d-808a-124f8ad5658c.png"},"ca9ad709-9f0a-4cc4-a85c-6ad0de9fef2d":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ua94AM0VdzqX869A5YeUKwqYjGguuDY_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ca9ad709-9f0a-4cc4-a85c-6ad0de9fef2d.png"},"c35046c3-e8d6-491a-8677-c2ae170fcf36":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":3,"looping":true,"frameDelay":12,"version":"rXhS0KMy2aMu2jkfu6PnfMVhFqQkLLC5","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/c35046c3-e8d6-491a-8677-c2ae170fcf36.png"},"fcd74a8b-3921-4cd2-b8c5-c1021f350ad1":{"name":"Untitled.png_1","sourceUrl":null,"frameSize":{"x":498,"y":398},"frameCount":5,"looping":true,"frameDelay":15,"version":"4APwtOMIEHVKyIgKVUMUechYIMFW0kXT","loadedFromSource":true,"saved":true,"sourceSize":{"x":996,"y":1194},"rootRelativePath":"assets/fcd74a8b-3921-4cd2-b8c5-c1021f350ad1.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating object to design look of game
var boundary = createSprite(10, 200, 8, 400)
boundary.shapeColor = "white";
var boundary2 = createSprite(390, 200, 8, 400)
boundary2.shapeColor = "white";
var boundary3 = createSprite(200, 390, 400, 8)
boundary3.shapeColor = "white";
var boundary4 = createSprite(200, 10, 400, 8);
boundary4.shapeColor = "white";

var headder = createSprite(200, 50, 375, 8);
headder.shapeColor = rgb(10,255,255)
var footer = createSprite(200,350,375,8);
footer.shapeColor = rgb(10,255,255)

//creating players profile
var player1 = createSprite(30, 28, 10, 10);
player1.setAnimation("panda_1");
player1.scale = 0.1

var player2 = createSprite(30, 370, 10, 10);
player2.setAnimation("penguin_1");
player2.scale = 0.1

//creating playing area
var side = createSprite(144,200,8,290);
var side2 = createSprite(268, 200, 8, 290);

var side3 = createSprite(200,146,375,8);
var side4 = createSprite(200, 243,375,8);

//creating invisible boxes to detect mouse over
var box = createSprite(205,195,120,90);
box.shapeColor = "white"
box.visible = false;
var box2 = createSprite(329,195,113,90);
box2.shapeColor = "red"
box2.visible = false;
var box3 = createSprite(329,296,113,95);
//box3.shapeColor = "yellow"
box3.visible = false;
var box4 = createSprite(207,296,120,95);
box4.shapeColor = "blue"
box4.visible = false;
var box5 = createSprite(75,296,120,95);
box5.shapeColor = "green"
box5.visible = false;
var box6 = createSprite(77,195,123,90)
//box6.shapeColor = "yellow"
box6.visible = false;
var box7 = createSprite(77,100,123,85);
box7.shapeColor = "blue"
box7.visible = false;
var box8 = createSprite(205,98, 120, 88);
box8.shapeColor = "red"
box8.visible = false;
var box9 = createSprite(329,98,118,88);
box9.shapeColor = "green"
box9.visible = false;

//creating object for telling rules of the game
var contorls = createSprite(320, 30,130,30);
contorls.shapeColor = "grey";
var controls = createSprite(200,200,400,400);
controls.visible = false;
var cross = createSprite(20,20,10,10);
cross.shapeColor = "white"
cross.setAnimation("cross")
cross.visible = false;
cross.scale = 0.5

// for deciding behavour of the game
var chance = 1;
var done = 0;
var done2 = 0;
var done3 = 0;
var done1 = 0;
var done4 = 0;
var done5 = 0;
var done6 = 0;
var done7 = 0;
var done8 = 0;
// for checking if player1 wins
var won = 0;
var won2 = 0;
var won3 = 0;
var won4 = 0;
var won5 = 0;
var won6 = 0;
var won7 = 0;
var won8 = 0;
//for cecking if player2 wins
var won9 = 0;
var won10 = 0;
var won11 = 0;
var won12 = 0;
var won13 = 0;
var won14 = 0;
var won15 = 0;
var won16 = 0;
//for checking if game tied
var total = 0;
var gameState = 1;
var time = 0;
var intro = createSprite(200,200,400,400)
intro.setAnimation("Untitled.png_1");
function draw() {
background(0)
fill(rgb(10,255,255))
textSize(20)
text("player1:   Panda", 85, 35);
text("player2:  penguin", 85, 380);

if(gameState === 1){
  
if(World.frameCount <30){
    time = time + 1
       intro.visible = true;
}  

if(World.frameCount >80){
console.log("destroy")
       intro.visible = false;
}

console.log(World.frameCount)
  if(chance === 1 && mousePressedOver(box9) && done8 === 0){
    chance = 2
    done8 = 1
    won10 = won10 +1;
    won12 = won12 +1;
    won16 = won16+1;
    total = total +1;
    var circle =  createSprite(box9.x,box9.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
}

if(chance === 2 && mousePressedOver(box9) && done8 === 0){
    chance = 1
    done8 = 1
    won2 = won2+1
    won4 = won4 +1
    won8 = won8+1
    total = total +1;
    var check =  createSprite(box9.x,box9.y,10,10)
    check.setAnimation("animation_1")
    check.scale = 0.5
}

if(chance === 1 && mousePressedOver(box7) && done6 === 0){
    chance = 2
    done6 = 1
    won10 = won10 + 1;
    won14 = won14 + 1;
    won15 = won15 + 1;
    total = total +1;
    var circle =  createSprite(box7.x,box7.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
}

if(chance === 2 && mousePressedOver(box7) && done6 === 0){
    chance = 1
    done6 = 1
    won2 = won2+1
    won6 = won6+1
    won7 = won7+1
    total = total +1;
    var check =  createSprite(box7.x,box7.y,10,10)
    check.setAnimation("animation_1")
    check.scale = 0.5
}

if(chance === 1 && mousePressedOver(box8) && done7 === 0){
    chance = 2
    done7 = 1
    won10 = won10 + 1;
    won13 = won13+1;
    total = total +1;
    var circle =  createSprite(box8.x,box8.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
}

if(chance === 2 && mousePressedOver(box8) && done7 === 0){
    chance = 1
    done7 = 1
    won2 = won2+1
    won5 = won5+1
    total = total +1;
    var check =  createSprite(box8.x,box8.y,10,10)
    check.setAnimation("animation_1")
    check.scale = 0.5
}

if(chance === 1 && mousePressedOver(box6) && done5 === 0){
    chance = 2
    done5 = 1
    won9 = won9 + 1;
    won14 = won14+1;
    total = total +1;
    var circle =  createSprite(box6.x,box6.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
}

if(chance === 2 && mousePressedOver(box6) && done5 === 0){
    chance = 1
    done5 = 1
    won = won+1
    won6 = won6+1
    total = total +1;
    var check =  createSprite(box6.x,box6.y,10,10)
    check.setAnimation("animation_1")
    check.scale = 0.5
}

if(chance === 1 && mousePressedOver(box5) && done4 === 0){
    chance = 2
    done4 = 1
    won11 = won11 + 1;
    won14 = won14+1;
    won16 = won16+1;
    total = total +1;
    var circle =  createSprite(box5.x,box5.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
}

if(chance === 2 && mousePressedOver(box5) && done4 === 0){
    chance = 1
    done4 = 1
    won3 = won3 + 1;
    won6 = won6+1;
      won8 = won8+1;
    total = total +1;
    var check =  createSprite(box5.x,box5.y,10,10)
    check.setAnimation("animation_1")
    check.scale = 0.5
}

if(chance === 1 && mousePressedOver(box4) && done3 === 0){
    chance = 2
    done3 = 1
    won11 = won11 + 1;
    won13 = won13+1;
    total = total +1;
    var circle =  createSprite(box4.x,box4.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
}

if(chance === 2 && mousePressedOver(box4) && done3 === 0){
    chance = 1
    done3 = 1
    won3 = won3+1;
    won5 = won5 + 1;
    total = total +1;
    var check =  createSprite(box4.x,box4.y,10,10)
    check.setAnimation("animation_1")
    check.scale = 0.5
}

//console.log(won12 + "win")

if(chance === 1 && mousePressedOver(box) && done1 === 0){
    chance = 2
    done1 = 1
    won9 = won9 + 1;
    won13 = won13+1;
    won15 = won15+1;
    won16 = won16 + 1;
    total = total +1;
    var circle =  createSprite(box.x,box.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
}

if(chance === 2 && mousePressedOver(box) && done1 === 0){
    chance = 1
    done1 = 1
    won = won+1
    won5 = won5+1
    won7 = won7+1
    won8 = won8+1
    total = total +1;
    var check =  createSprite(box.x,box.y,10,10)
    check.setAnimation("animation_1")
    check.scale = 0.5
}

console.log(done)
console.log(chance + "c")

if(chance === 1 && mousePressedOver(box2) && done ===0){
    chance = 2
    won9 = won9 + 1;
    won12 = won12+1;
    total = total +1;
    var circle =  createSprite(box2.x,box2.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
    done = 1
}

if(chance === 2 && mousePressedOver(box2) && done === 0){
      chance = 1
      done = 2
      won = won+1
      won4 = won4+1;
      total = total +1;
    var check =  createSprite(box2.x,box2.y,10,10)
    check.setAnimation("animation_1")
    check.scale = 0.5
  
}


if(chance === 2 && mousePressedOver(box3) && done2 === 0){
      chance = 1
      done2 = 2
      won3 = won3+1;
      won4 = won4+1;
      won7 = won7+1;
      total = total + 1;
    var check2 =  createSprite(box3.x,box3.y,10,10)
    check2.setAnimation("animation_1")
    check2.scale = 0.5
}

if(chance === 1 && mousePressedOver(box3) && done2 === 0){
      chance = 2
      done2 = 2
      total = total +1;
      won11 = won11 + 1;
    won12 = won12+1;
    won15 = won15+1;
    var circle =  createSprite(box3.x,box3.y,10,10)
    circle.setAnimation("circle4.jpg_1")
    circle.scale = 0.15
}

    //displaying whch player won
if (total === 9){
    gameState = 2;
}
 if(won ===3){
    gameState = 2;
}
if(won2 === 3){
    gameState = 2;
}
if(won3 === 3){
    gameState = 2;
}

if(won4 === 3){
    gameState = 2;
}

if(won5 === 3){
    gameState = 2;
}

if(won6 === 3){
    gameState = 2;
}


if(won7 === 3){
    gameState = 2;
}


if(won8 === 3){
    gameState = 2;
}

if(won9 === 3){
    gameState = 2;
}

if(won10 === 3){
    gameState = 2;
}

if(won11 === 3){
    gameState = 2;
}

if(won12 === 3){
    gameState = 2;
}

if(won13 === 3){
    gameState = 2;
}

if(won14 === 3){
    gameState = 2;
}

if(won15 === 3){
    gameState = 2;
}

if(won16 === 3){
    gameState = 2;
} 
  
}

console.log(gameState + "state")

if(mousePressedOver(contorls)){
  controls.visible = true;
  cross.visible = true;
  textSize(15);
}


if(gameState === 2){
  
  //displaying whch player won
// if (total === 9){
//     gameState = 2;
// if(won ===3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }
// if(won2 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }
// if(won3 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won4 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won5 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won6 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }


// if(won7 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }


// if(won8 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won9 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won10 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won11 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won12 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won13 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won14 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won15 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }

// if(won16 === 3){
//   var win = createSprite(200, 200, 200, 40)
//     gameState = 2;
// }
//   var win = createSprite(200, 200, 150, 40)
// }
  
  
  
}

if(mousePressedOver(contorls)){
  controls.visible = true;
  contorls = createSprite(320, 30,130,30);
contorls.shapeColor = "grey";
  cross.visible = true;
  textSize(15);
}

drawSprites();  
fill("yellow")
text("rules", 260, 35)

if(won9 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Panda wins",80,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}


if(total ===9 && won9 !== 3 && won!==3 && won2!==3 && won3!==3 && won4!==3 && won5!==3 && won6!==3 && won7!==3 && won8!==3 && won10!==3 && won11!==3 && won12!==3 && won13!==3 && won14!==3 && won15!==3 && won16!==3){
  stroke("red")
  strokeWeight(10)
  textSize(35)
  text("Well played", 100, 200)
  text("Match Tied",100,300)
  chance = 0;
}

if(won10 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Panda wins",80,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}

if(won11 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Panda wins",80,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}

if(won12 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Panda wins",80,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}

if(won13 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Panda wins",80,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}

if(won14 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Panda wins",80,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}


if(won15 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Panda wins",80,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}

if(won16 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Panda wins",80,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}

if(won7 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Penguin wins",70,200)
  text("Panda lost", 100, 300)
  chance = 0;
}

if(won8 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Penguin wins",70,200)
  text("Panda lost", 100, 300)
  chance = 0;
}

if(won2 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Penguin wins",70,200)
  text("Panda lost", 100, 300)
  chance = 0;
}

if(won4 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Penguin wins",70,200)
  text("Panda lost", 100, 300)
  chance = 0;
}

if(won6 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Penguin wins",70,200)
  text("Panda lost", 100, 300)
  chance = 0;
}

if(won5 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Penguin wins",70,200)
  text("Panda lost", 100, 300)
  chance = 0;
}

if(won3 === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Penguin wins",70,200)
  text("Panda lost", 100, 300)
  chance = 0;
  
}

if(won === 3){
    stroke("red")
  strokeWeight(10)
  textSize(35)
  text("WOW!! Penguin wins",70,200)
  text("Penguin lost", 100, 300)
  chance = 0;
}
if(controls.visible === true){
  textSize(17);
  text("*It's a 2player game first chance to player1(circle)", 10, 80)
  text("then second chance for player2(check)", 30, 100)
  text("* click on the box you want ", 20, 140)
  text("   to check or circle ", 20, 160)
  text("* if you made 3 circle or check", 20, 200)
  text("in a row or diagonally then you will won", 40, 220)
}

if(mousePressedOver(cross)){
  controls.visible = false;
  cross.visible =  false;
}


}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
