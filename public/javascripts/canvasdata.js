
function SAOmenucircle(ctx,x,y,rgb) {

// layer1/Path
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(35.6+x, 20.0+y);
    ctx.bezierCurveTo(35.6+x, 28.6+y, 28.6+x, 35.6+y, 20.0+x, 35.6+y);
    ctx.bezierCurveTo(11.4+x, 35.6+y, 4.4+x, 28.6+y, 4.4+x, 20.0+y);
    ctx.bezierCurveTo(4.4+x, 11.4+y, 11.4+x, 4.4+y, 20.0+x, 4.4+y);
    ctx.bezierCurveTo(28.6+x, 4.4+y, 35.6+x, 11.4+y, 35.6+x, 20.0+y);
    ctx.closePath();
    ctx.fillStyle = rgb;
    ctx.fill();

    // layer1/Compound Path/Path
    ctx.moveTo(20.0+x, 40.0+y);
    ctx.bezierCurveTo(9.0+x, 40.0+y, 0.0+x, 31.0+y, 0.0+x, 20.0+y);
    ctx.bezierCurveTo(0.0+x, 9.0+y, 9.0+x, 0.0+y, 20.0+x, 0.0+y);
    ctx.bezierCurveTo(31.0+x, 0.0+y, 40.0+x, 9.0+y, 40.0+x, 20.0+y);
    ctx.bezierCurveTo(40.0+x, 31.0+y, 31.0+x, 40.0+y, 20.0+x, 40.0+y);
    ctx.closePath();

    // layer1/Compound Path/Path
    ctx.moveTo(20.0+x, 2.0+y);
    ctx.bezierCurveTo(10.0+x, 2.0+y, 2.0+x, 10.0+y, 2.0+x, 20.0+y);
    ctx.bezierCurveTo(2.0+x, 30.0+y, 10.0+x, 38.0+y, 20.0+x, 38.0+y);
    ctx.bezierCurveTo(30.0+x, 38.0+y, 38.0+x, 30.0+y, 38.0+x, 20.0+y);
    ctx.bezierCurveTo(38.0+x, 10.0+y, 30.0+x, 2.0+y, 20.0+x, 2.0+y);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}
var Leporidae = {   //토끼과
    mainTag : '전세계 어딜가나있는 토끼목 토끼과 동물!',
    list : [oryctolagus,Lepus]
}

var oryctolagus = {       //토끼과 굴토끼속
    mainTag : '모로코와 알제리 주변이 원산지인 토끼과',
    list : ['Oryctolagus cuniculus'],
    tag : ['유럽토끼로 부터 가축화되어, 집 주변에서 흔히 볼 수 있다.(우리집 주변엔 없던데...)'],
    speed : 64,
    maxsize : 50,
    minsize : 38,
    maxweight : 2.5,
    minweight : 1.5,
    lifespan : 9,
    bmrperkg : 51
}
var Lepus = {       //토끼과 산토끼속
    mainTag : '토끼!',
    list : ['Lepus othus'],
    tag : ['땅에 굴을파지 않는 토끼로, 알레스카의 개활지에서 서식한다.'],
    speed : 64,
    maxsize : 69,
    minsize : 56,
    maxweight : 7.2,
    minweight : 3.9,
    lifespan : 12,
    bmrperkg : 51
}

var Poaceae = {   //벼과
    mainTag : '세계 각지에서 흔히볼 수 있는 중요한 식물들!',
    list : [Oryza]
}

var Oryza = {       //벼과 벼속
    mainTag : '아시아 벼와 아프리카벼가 포함된다',
    list : ['Oryza sativa'],
    tag : ['흔히 말하는 벼, 하얀쌀밥에 계란프라이 간장!'],
    height : 100
}


function rabit(ctx,x,y) {

    // layer1/Compound Path
    ctx.save();
    ctx.beginPath();

    // layer1/Compound Path/Path
    ctx.moveTo(5.1+x, 5.5+y);
    ctx.bezierCurveTo(5.1+x, 5.3+y, 5.2+x, 5.0+y, 5.2+x, 4.8+y);
    ctx.bezierCurveTo(5.4+x, 3.5+y, 5.6+x, 2.3+y, 6.3+x, 1.2+y);
    ctx.bezierCurveTo(6.4+x, 1.0+y, 6.6+x, 0.8+y, 6.8+x, 0.6+y);
    ctx.bezierCurveTo(7.3+x, 0.1+y, 7.9+x, -0.2+y, 8.7+x, 0.1+y);
    ctx.bezierCurveTo(9.4+x, 0.5+y, 9.8+x, 1.1+y, 9.9+x, 1.9+y);
    ctx.bezierCurveTo(10.0+x, 3.5+y, 9.5+x, 5.0+y, 8.9+x, 6.4+y);
    ctx.bezierCurveTo(8.8+x, 6.7+y, 8.8+x, 6.9+y, 9.0+x, 7.3+y);
    ctx.bezierCurveTo(10.7+x, 9.1+y, 10.2+x, 11.9+y, 7.9+x, 13.2+y);
    ctx.bezierCurveTo(5.9+x, 14.4+y, 3.4+x, 14.2+y, 1.6+x, 12.8+y);
    ctx.bezierCurveTo(-0.2+x, 11.4+y, -0.5+x, 9.0+y, 0.9+x, 7.3+y);
    ctx.bezierCurveTo(1.2+x, 7.0+y, 1.2+x, 6.8+y, 1.1+x, 6.4+y);
    ctx.bezierCurveTo(0.7+x, 5.3+y, 0.4+x, 4.1+y, 0.1+x, 2.9+y);
    ctx.bezierCurveTo(0.0+x, 2.4+y, 0.1+x, 1.9+y, 0.3+x, 1.4+y);
    ctx.bezierCurveTo(0.7+x, 0.0+y, 2.1+x, -0.4+y, 3.1+x, 0.5+y);
    ctx.bezierCurveTo(3.6+x, 0.9+y, 4.0+x, 1.5+y, 4.2+x, 2.1+y);
    ctx.bezierCurveTo(4.5+x, 3.0+y, 4.6+x, 4.0+y, 4.8+x, 5.0+y);
    ctx.bezierCurveTo(4.8+x, 5.1+y, 4.9+x, 5.3+y, 4.9+x, 5.5+y);
    ctx.bezierCurveTo(5.0+x, 5.5+y, 5.0+x, 5.5+y, 5.1+x, 5.5+y);
    ctx.closePath();

    // layer1/Compound Path/Path
    ctx.moveTo(6.1+x, 6.6+y);
    ctx.bezierCurveTo(5.4+x, 6.6+y, 4.6+x, 6.6+y, 3.9+x, 6.6+y);
    ctx.bezierCurveTo(3.9+x, 6.4+y, 3.9+x, 6.2+y, 3.8+x, 6.1+y);
    ctx.bezierCurveTo(3.7+x, 4.7+y, 3.7+x, 3.3+y, 3.0+x, 2.0+y);
    ctx.bezierCurveTo(2.7+x, 1.4+y, 2.2+x, 1.0+y, 1.7+x, 1.1+y);
    ctx.bezierCurveTo(1.3+x, 1.2+y, 1.0+x, 1.8+y, 1.1+x, 2.5+y);
    ctx.bezierCurveTo(1.3+x, 3.5+y, 1.5+x, 4.5+y, 1.8+x, 5.5+y);
    ctx.bezierCurveTo(2.0+x, 6.1+y, 2.3+x, 6.6+y, 2.6+x, 7.2+y);
    ctx.bezierCurveTo(2.3+x, 7.4+y, 2.1+x, 7.6+y, 1.9+x, 7.8+y);
    ctx.bezierCurveTo(0.7+x, 9.0+y, 0.8+x, 10.7+y, 2.0+x, 11.8+y);
    ctx.bezierCurveTo(3.5+x, 13.2+y, 6.0+x, 13.3+y, 7.6+x, 12.1+y);
    ctx.bezierCurveTo(9.3+x, 10.9+y, 9.4+x, 8.9+y, 7.9+x, 7.6+y);
    ctx.bezierCurveTo(7.7+x, 7.4+y, 7.6+x, 7.3+y, 7.4+x, 7.2+y);
    ctx.bezierCurveTo(7.7+x, 6.6+y, 8.0+x, 6.1+y, 8.2+x, 5.5+y);
    ctx.bezierCurveTo(8.6+x, 4.4+y, 9.0+x, 3.3+y, 8.9+x, 2.1+y);
    ctx.bezierCurveTo(8.8+x, 1.7+y, 8.7+x, 1.2+y, 8.2+x, 1.1+y);
    ctx.bezierCurveTo(7.8+x, 1.0+y, 7.4+x, 1.3+y, 7.2+x, 1.6+y);
    ctx.bezierCurveTo(6.9+x, 2.2+y, 6.6+x, 2.8+y, 6.5+x, 3.4+y);
    ctx.bezierCurveTo(6.3+x, 4.4+y, 6.2+x, 5.5+y, 6.1+x, 6.6+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(6.4+x, 8.3+y);
    ctx.bezierCurveTo(6.8+x, 8.3+y, 7.0+x, 8.5+y, 7.1+x, 8.9+y);
    ctx.bezierCurveTo(7.1+x, 9.3+y, 6.9+x, 9.5+y, 6.5+x, 9.5+y);
    ctx.bezierCurveTo(6.1+x, 9.6+y, 5.9+x, 9.3+y, 5.8+x, 9.0+y);
    ctx.bezierCurveTo(5.8+x, 8.6+y, 6.0+x, 8.4+y, 6.4+x, 8.3+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(3.6+x, 8.3+y);
    ctx.bezierCurveTo(3.9+x, 8.4+y, 4.2+x, 8.6+y, 4.2+x, 8.9+y);
    ctx.bezierCurveTo(4.2+x, 9.3+y, 3.9+x, 9.6+y, 3.5+x, 9.5+y);
    ctx.bezierCurveTo(3.2+x, 9.5+y, 3.0+x, 9.3+y, 3.0+x, 8.9+y);
    ctx.bezierCurveTo(2.9+x, 8.5+y, 3.2+x, 8.3+y, 3.6+x, 8.3+y);
    ctx.closePath();
    ctx.fill("evenodd");
    ctx.restore();

}

function rice(ctx,x,y) {
    // layer1/Path
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(3.5+x, 0.0+y);
    ctx.bezierCurveTo(4.4+x, 1.2+y, 5.1+x, 2.4+y, 5.1+x, 3.9+y);
    ctx.bezierCurveTo(5.1+x, 5.0+y, 4.4+x, 6.2+y, 3.5+x, 6.9+y);
    ctx.bezierCurveTo(3.5+x, 6.8+y, 3.4+x, 6.8+y, 3.4+x, 6.8+y);
    ctx.bezierCurveTo(2.6+x, 6.0+y, 2.1+x, 5.1+y, 2.0+x, 4.0+y);
    ctx.bezierCurveTo(2.0+x, 3.5+y, 2.0+x, 3.0+y, 2.2+x, 2.5+y);
    ctx.bezierCurveTo(2.5+x, 1.6+y, 2.9+x, 0.8+y, 3.5+x, 0.0+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(3.8+x, 21.9+y);
    ctx.bezierCurveTo(3.8+x, 21.2+y, 3.8+x, 20.6+y, 3.8+x, 20.1+y);
    ctx.bezierCurveTo(3.8+x, 19.5+y, 3.9+x, 18.9+y, 4.0+x, 18.4+y);
    ctx.bezierCurveTo(4.1+x, 17.8+y, 4.4+x, 17.3+y, 4.8+x, 16.9+y);
    ctx.bezierCurveTo(5.4+x, 16.4+y, 6.1+x, 16.0+y, 6.8+x, 15.7+y);
    ctx.bezierCurveTo(6.9+x, 16.1+y, 7.0+x, 16.5+y, 7.0+x, 17.0+y);
    ctx.bezierCurveTo(7.0+x, 17.6+y, 7.0+x, 18.3+y, 6.9+x, 19.0+y);
    ctx.bezierCurveTo(6.8+x, 19.6+y, 6.5+x, 20.1+y, 6.1+x, 20.5+y);
    ctx.bezierCurveTo(5.4+x, 21.1+y, 4.7+x, 21.5+y, 3.8+x, 21.9+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(6.8+x, 5.1+y);
    ctx.bezierCurveTo(7.0+x, 6.3+y, 7.1+x, 7.4+y, 6.8+x, 8.6+y);
    ctx.bezierCurveTo(6.7+x, 9.1+y, 6.4+x, 9.6+y, 6.1+x, 9.9+y);
    ctx.bezierCurveTo(5.5+x, 10.5+y, 4.6+x, 11.1+y, 3.8+x, 11.3+y);
    ctx.bezierCurveTo(3.8+x, 11.2+y, 3.8+x, 11.1+y, 3.8+x, 11.0+y);
    ctx.bezierCurveTo(3.7+x, 9.9+y, 3.8+x, 8.9+y, 4.0+x, 7.8+y);
    ctx.bezierCurveTo(4.2+x, 7.1+y, 4.6+x, 6.6+y, 5.1+x, 6.1+y);
    ctx.bezierCurveTo(5.6+x, 5.7+y, 6.2+x, 5.4+y, 6.8+x, 5.1+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(3.8+x, 16.5+y);
    ctx.bezierCurveTo(3.8+x, 16.4+y, 3.8+x, 16.4+y, 3.8+x, 16.3+y);
    ctx.bezierCurveTo(3.7+x, 15.2+y, 3.8+x, 14.1+y, 4.0+x, 13.0+y);
    ctx.bezierCurveTo(4.2+x, 12.4+y, 4.6+x, 11.8+y, 5.1+x, 11.4+y);
    ctx.bezierCurveTo(5.6+x, 10.9+y, 6.1+x, 10.6+y, 6.8+x, 10.3+y);
    ctx.bezierCurveTo(6.9+x, 10.8+y, 7.0+x, 11.3+y, 7.0+x, 11.7+y);
    ctx.bezierCurveTo(7.0+x, 12.4+y, 7.0+x, 13.0+y, 6.9+x, 13.7+y);
    ctx.bezierCurveTo(6.8+x, 14.3+y, 6.4+x, 14.9+y, 6.0+x, 15.3+y);
    ctx.bezierCurveTo(5.4+x, 15.8+y, 4.7+x, 16.2+y, 4.0+x, 16.5+y);
    ctx.bezierCurveTo(3.9+x, 16.5+y, 3.9+x, 16.5+y, 3.8+x, 16.5+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(3.2+x, 16.5+y);
    ctx.bezierCurveTo(3.1+x, 16.5+y, 3.0+x, 16.5+y, 2.9+x, 16.5+y);
    ctx.bezierCurveTo(2.5+x, 16.2+y, 2.0+x, 16.0+y, 1.6+x, 15.7+y);
    ctx.bezierCurveTo(0.6+x, 15.1+y, 0.1+x, 14.1+y, 0.0+x, 12.9+y);
    ctx.bezierCurveTo(-0.0+x, 12.0+y, 0.0+x, 11.2+y, 0.2+x, 10.4+y);
    ctx.bezierCurveTo(0.2+x, 10.4+y, 0.2+x, 10.4+y, 0.3+x, 10.4+y);
    ctx.bezierCurveTo(1.1+x, 10.7+y, 1.8+x, 11.2+y, 2.4+x, 11.9+y);
    ctx.bezierCurveTo(2.9+x, 12.5+y, 3.1+x, 13.1+y, 3.1+x, 13.8+y);
    ctx.bezierCurveTo(3.2+x, 14.6+y, 3.2+x, 15.4+y, 3.2+x, 16.2+y);
    ctx.bezierCurveTo(3.2+x, 16.3+y, 3.2+x, 16.4+y, 3.2+x, 16.5+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(3.2+x, 21.8+y);
    ctx.bezierCurveTo(2.1+x, 21.5+y, 1.2+x, 20.9+y, 0.6+x, 20.0+y);
    ctx.bezierCurveTo(0.2+x, 19.5+y, 0.1+x, 18.9+y, 0.0+x, 18.3+y);
    ctx.bezierCurveTo(-0.0+x, 17.4+y, 0.0+x, 16.5+y, 0.2+x, 15.6+y);
    ctx.bezierCurveTo(1.6+x, 16.3+y, 2.8+x, 17.1+y, 3.1+x, 18.8+y);
    ctx.bezierCurveTo(3.2+x, 19.7+y, 3.2+x, 20.7+y, 3.2+x, 21.6+y);
    ctx.bezierCurveTo(3.2+x, 21.6+y, 3.2+x, 21.7+y, 3.2+x, 21.7+y);
    ctx.bezierCurveTo(3.2+x, 21.8+y, 3.2+x, 21.8+y, 3.2+x, 21.8+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(3.2+x, 11.3+y);
    ctx.bezierCurveTo(2.1+x, 10.9+y, 1.1+x, 10.3+y, 0.5+x, 9.4+y);
    ctx.bezierCurveTo(0.1+x, 8.9+y, 0.1+x, 8.3+y, 0.0+x, 7.7+y);
    ctx.bezierCurveTo(-0.0+x, 6.8+y, 0.0+x, 6.0+y, 0.2+x, 5.1+y);
    ctx.bezierCurveTo(1.8+x, 5.7+y, 2.9+x, 6.7+y, 3.1+x, 8.3+y);
    ctx.bezierCurveTo(3.2+x, 9.2+y, 3.2+x, 10.1+y, 3.2+x, 11.0+y);
    ctx.bezierCurveTo(3.2+x, 11.0+y, 3.2+x, 11.1+y, 3.2+x, 11.2+y);
    ctx.bezierCurveTo(3.2+x, 11.2+y, 3.2+x, 11.2+y, 3.2+x, 11.3+y);
    ctx.closePath();
    ctx.fill("evenodd");

    // layer1/Path
    ctx.beginPath();
    ctx.moveTo(3.7+x, 37.0+y);
    ctx.bezierCurveTo(3.6+x, 37.0+y, 3.4+x, 37.0+y, 3.3+x, 37.0+y);
    ctx.bezierCurveTo(3.3+x, 32.1+y, 3.3+x, 27.1+y, 3.3+x, 22.1+y);
    ctx.bezierCurveTo(3.4+x, 22.1+y, 3.4+x, 22.1+y, 3.5+x, 22.1+y);
    ctx.bezierCurveTo(3.6+x, 22.1+y, 3.6+x, 22.1+y, 3.7+x, 22.1+y);
    ctx.bezierCurveTo(3.7+x, 27.1+y, 3.7+x, 32.1+y, 3.7+x, 37.0+y);
    ctx.closePath();
    ctx.fill("evenodd");
    ctx.restore();
}
console.log('canvasdataonloaded');